"use client";

import Reveal from "./Reveal";
import { Frame } from "./hud";
import { useLang } from "./LanguageProvider";
import { useEffect, useState } from "react";
import MochiConsole from "./MochiConsole";

// ─── Types ────────────────────────────────────────────────────────────────────
type DBRow = {
  id: string;
  name: string;
  phone: string;
  source: string;
  status: "staged" | "pushed" | "merged" | "reverted";
};
type LiveLog = {
  id: string;
  branch: string;
  msg: string;
  type: "commit" | "push" | "revert";
};
type HistoryEntry = { hash: string; msg: string; time: string };

// ─── Static git history entries ───────────────────────────────────────────────
const HISTORY_ENTRIES: HistoryEntry[] = [
  { hash: "a3f9d1", msg: "feat(crm): add customer Mike",   time: "2 min ago"  },
  { hash: "b8c2e7", msg: "feat(crm): update Sarah phone",  time: "14 min ago" },
  { hash: "d4a501", msg: "feat(hrm): add dept HR",         time: "1 hr ago"   },
  { hash: "e1b3f8", msg: "fix(crm): correct email field",  time: "3 hr ago"   },
  { hash: "f92c6a", msg: "init: workspace bootstrap",      time: "1 day ago"  },
];

// ─── Git Log with rollback animation (embedded inside RealtimeDB) ─────────────
function GitLog() {
  const [active,   setActive]   = useState(0);
  const [rolling,  setRolling]  = useState(false);
  const [rolledTo, setRolledTo] = useState<number | null>(null);
  const [done,     setDone]     = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setRolling(true), 2800);
    const t2 = setTimeout(() => { setRolledTo(2); setActive(2); }, 4200);
    const t3 = setTimeout(() => { setRolling(false); setDone(true); }, 5600);
    const t4 = setTimeout(() => {
      setActive(0); setRolling(false); setRolledTo(null); setDone(false);
    }, 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [done]);

  return (
    <div className="mt-3 pt-3 border-t border-line">
      {/* Sub-header */}
      <div className="flex items-center justify-between mb-2">
        <span className="mono text-[9px] text-muted-2">GIT LOG</span>
        <span className="mono flex items-center gap-1.5 text-[9px] text-muted-2">
          <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
            rolling ? "bg-foreground animate-pulse" : done ? "bg-foreground" : "bg-muted-2"
          }`} />
          {rolling ? "REVERTING…" : done ? "REVERTED ✓" : "TRACKING"}
        </span>
      </div>

      {/* Commit rows */}
      <div className="space-y-1">
        {HISTORY_ENTRIES.map((e, i) => {
          const isHead     = i === active && rolledTo === null;
          const isReverted = rolledTo !== null && i < rolledTo;
          const isTarget   = rolledTo !== null && i === rolledTo;
          const isNewHead  = isTarget && done;

          return (
            <div
              key={e.hash}
              className={`mono text-[9px] flex items-center gap-2 leading-snug transition-all duration-500 ${
                isReverted ? "opacity-25 line-through text-muted-2" : "text-foreground"
              }`}
            >
              {/* node */}
              <span className={`flex-shrink-0 flex h-3 w-3 items-center justify-center border text-[5px] transition-all duration-500 ${
                isNewHead || (isHead && !rolling)
                  ? "border-foreground bg-foreground text-background"
                  : isReverted
                  ? "border-line bg-surface text-muted-2"
                  : "border-line bg-surface text-muted-2"
              }`}>
                {isNewHead || isHead ? "H" : "○"}
              </span>

              {/* hash */}
              <span className="text-muted-2 font-mono shrink-0">{e.hash}</span>

              {/* message */}
              <span className="flex-1 truncate">{e.msg}</span>

              {/* badges */}
              <div className="flex items-center gap-1.5 shrink-0">
                {(isNewHead || isHead) && (
                  <span className="pixel text-[6px] border border-foreground px-1 py-px text-foreground animate-in fade-in duration-300">
                    HEAD
                  </span>
                )}
                <span className="text-muted-2">{e.time}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rollback command bar */}
      <div className="mt-2 pt-2 border-t border-line flex items-center gap-2">
        <span className="mono text-[10px] text-muted-2">›</span>
        <span className={`mono text-[9px] flex-1 transition-colors duration-300 ${rolling || done ? "text-foreground" : "text-muted-2"}`}>
          {done
            ? `mochi rollback --to ${HISTORY_ENTRIES[rolledTo ?? 0].hash} ✓`
            : rolling
            ? `mochi rollback --to ${HISTORY_ENTRIES[2].hash}…`
            : "mochi log --all"}
        </span>
        {done && (
          <span className="pixel text-[6px] border border-foreground px-1 py-px text-foreground animate-in fade-in duration-300">
            DONE
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Realtime DB panel — data table + GIT LOG embedded below ──────────────────
function RealtimeDB({ m }: { m: any }) {
  const db = m.db;
  const [rows, setRows] = useState<DBRow[]>([]);
  const [logs, setLogs] = useState<LiveLog[]>([]);

  useEffect(() => {
    setRows([]); setLogs([]);
    const handleReset = () => { setRows([]); setLogs([]); };
    const handleA = (e: any) => {
      if (e.detail === "commit-A") {
        setRows(r => r.find(x => x.id === db.dataA.id) ? r : [
          ...r, { id: db.dataA.id, name: db.dataA.name, phone: db.dataA.phone, source: db.dataA.source, status: "staged" },
        ]);
        setLogs(l => [...l, { id: Date.now().toString(), branch: db.branchAName, msg: db.dataA.msgC, type: "commit" }]);
      }
      if (e.detail === "push-A") {
        setRows(r => r.map(x => x.id === db.dataA.id ? { ...x, status: "pushed" } : x));
        setLogs(l => [...l, { id: Date.now().toString(), branch: db.branchAName, msg: db.dataA.msgP, type: "push" }]);
      }
    };
    const handleB = (e: any) => {
      if (e.detail === "commit-B") {
        setRows(r => r.find(x => x.id === db.dataB.id) ? r : [
          ...r, { id: db.dataB.id, name: db.dataB.name, phone: db.dataB.phone, source: db.dataB.source, status: "staged" },
        ]);
        setLogs(l => [...l, { id: Date.now().toString(), branch: db.branchBName, msg: db.dataB.msgC, type: "commit" }]);
      }
      if (e.detail === "revert-B") {
        setRows(r => r.map(x => x.id === db.dataB.id ? { ...x, status: "reverted" } : x));
        setLogs(l => [...l, { id: Date.now().toString(), branch: db.branchBName, msg: db.dataB.msgR, type: "revert" }]);
      }
    };
    window.addEventListener("mochi-reset-branch-a", handleReset);
    window.addEventListener("mochi-reset-branch-b", handleReset);
    window.addEventListener("mochi-action-branch-a", handleA);
    window.addEventListener("mochi-action-branch-b", handleB);
    return () => {
      window.removeEventListener("mochi-reset-branch-a", handleReset);
      window.removeEventListener("mochi-reset-branch-b", handleReset);
      window.removeEventListener("mochi-action-branch-a", handleA);
      window.removeEventListener("mochi-action-branch-b", handleB);
    };
  }, [db]);

  const statusLabel = (s: DBRow["status"]) =>
    s === "merged" ? db.statusMerged : s === "pushed" ? db.statusPushed : s === "reverted" ? db.statusReverted : db.statusStaged;
  const statusCls = (s: DBRow["status"]) =>
    s === "staged" ? "text-muted" : s === "reverted" ? "text-red-400 line-through" : "text-foreground";

  return (
    <div className="flex-1 min-w-0">
      {/* Label row */}
      <div className="mb-2 flex items-center gap-2">
        <span className="pixel text-[8px] text-muted">{db.title}</span>
        <span className="mono text-[9px] border border-line bg-surface px-2 py-0.5 text-foreground flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${rows.length ? "bg-foreground animate-pulse" : "bg-muted-2"}`} />
          {db.live}
        </span>
      </div>

      {/* Panel — data table + live events + git log */}
      <div className="panel scanlines overflow-y-auto px-4 py-3 font-mono flex flex-col" style={{ height: "auto", minHeight: "260px" }}>

        {/* ── Data table ── */}
        <div>
          <div className="mono text-[9px] text-muted-2 mb-2">{db.watching}</div>
          <pre className="mono text-[9px] leading-snug text-muted-2">{db.tableHeader}</pre>
          {rows.length === 0
            ? <pre className="mono text-[9px] text-muted-2">{db.tableEmpty}</pre>
            : rows.map(r => (
              <pre key={r.id} className={`mono text-[9px] leading-snug animate-in fade-in slide-in-from-bottom-1 duration-300 ${statusCls(r.status)}`}>
                {`| ${r.id.padEnd(5)} | ${r.name.padEnd(4)} | ${r.phone} | ${r.source.padEnd(7)} | ${statusLabel(r.status).padEnd(7)} |`}
              </pre>
            ))
          }
          <pre className="mono text-[9px] text-muted-2">{db.tableFooter}</pre>
        </div>

        {/* ── Live commit events ── */}
        {logs.length > 0 && (
          <div className="mt-3 pt-3 border-t border-line space-y-1.5">
            <div className="mono text-[9px] text-muted-2 mb-1">{db.eventsTitle}</div>
            {logs.map((log, i) => (
              <div key={i} className="mono text-[9px] flex gap-2 animate-in fade-in slide-in-from-bottom-1 duration-300">
                <span className={log.type === "revert" ? "text-red-400" : "text-foreground"}>
                  {log.type === "commit" ? "○" : log.type === "push" ? "↑" : "⨯"}
                </span>
                <span className="text-muted-2">[{log.branch}]</span>
                <span className={log.type === "revert" ? "text-red-400 line-through" : "text-foreground"}>{log.msg}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── GIT LOG (history + rollback demo) ── */}
        <GitLog />
      </div>
    </div>
  );
}

// ─── Multi-branch terminal demo ───────────────────────────────────────────────
function MultiBranchVisual({ m }: { m: any }) {
  return (
    <div className="mt-8 flex flex-col gap-6 xl:flex-row">
      <div className="flex-1 min-w-0">
        <div className="mb-2 flex items-center gap-2">
          <span className="pixel text-[8px] text-muted">{m.db.userA}</span>
          <span className="mono text-[9px] border border-line bg-surface px-2 py-0.5 text-foreground">⎇ {m.db.branchAName}</span>
        </div>
        <MochiConsole customScript={m.scripts.branchA} heightClass="h-[260px]" consoleId="branch-a" />
      </div>
      <div className="hidden w-px bg-line xl:block" />
      <div className="flex-1 min-w-0">
        <div className="mb-2 flex items-center gap-2">
          <span className="pixel text-[8px] text-muted">{m.db.userB}</span>
          <span className="mono text-[9px] border border-line bg-surface px-2 py-0.5 text-foreground">⎇ {m.db.branchBName}</span>
        </div>
        <MochiConsole customScript={m.scripts.branchB} heightClass="h-[260px]" consoleId="branch-b" initialDelay={3500} />
      </div>
      <div className="hidden w-px bg-line xl:block" />
      {/* RealtimeDB now includes GIT LOG internally */}
      <RealtimeDB m={m} />
    </div>
  );
}

// ─── Main exported section ────────────────────────────────────────────────────
export default function GitSection() {
  const { m } = useLang();

  return (
    <section id="git" className="relative border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

        {/* Section header */}
        <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="tech">{"// GIT & HISTORY"}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {m.git.title}
            </h2>
          </div>
          <span className="pixel hidden whitespace-nowrap text-[9px] text-muted-2 sm:block">GIT · HISTORY</span>
        </Reveal>

        {/* Single full-width card */}
        <Reveal>
          <Frame size={12} className="card-hud border border-line bg-surface p-7">
            <p className="pixel text-[9px] text-muted">GIT &amp; HISTORY</p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">
              {m.git.items[0].title} &amp; {m.git.items[1].title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {m.git.items[0].desc} {m.git.items[1].desc}
            </p>
            <MultiBranchVisual m={m} />
          </Frame>
        </Reveal>

      </div>
    </section>
  );
}
