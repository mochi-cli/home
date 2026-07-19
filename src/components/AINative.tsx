"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";
import MochiConsole, { type Line } from "./MochiConsole";
import { toneAt } from "@/lib/tones";

// ─── Types ────────────────────────────────────────────────────────────────────
type DBRow = {
  id: string;
  name: string;
  phone: string;
  source: string;
  status: "staged" | "pushed" | "merged" | "reverted";
};
type LiveLog = { id: string; branch: string; msg: string; type: "commit" | "push" | "revert" };
type DB = {
  userA: string; userB: string; branchAName: string; branchBName: string;
  title: string; live: string; watching: string;
  tableHeader: string; tableEmpty: string; tableFooter: string;
  statusStaged: string; statusPushed: string; statusReverted: string; statusMerged: string;
  eventsTitle: string;
  dataA: { id: string; name: string; phone: string; source: string; msgC: string; msgP: string };
  dataB: { id: string; name: string; phone: string; source: string; msgC: string; msgR: string };
};

// ─── Item 1 & 2 — single console demo ──────────────────────────────────────────
function ConsolePanel({ script }: { script: Line[] }) {
  return (
    <div className="mx-auto max-w-xl">
      <MochiConsole customScript={script} heightClass="h-[340px]" />
    </div>
  );
}

// ─── Item 3 — two teammates on two branches + a live-synced table ─────────────
function LiveTable({ db, syncedCaption }: { db: DB; syncedCaption: string }) {
  const [rows, setRows] = useState<DBRow[]>([]);
  const [logs, setLogs] = useState<LiveLog[]>([]);

  useEffect(() => {
    setRows([]);
    setLogs([]);
    const handleReset = () => { setRows([]); setLogs([]); };
    const handleA = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "commit-A") {
        setRows((r) => (r.find((x) => x.id === db.dataA.id) ? r : [
          ...r, { id: db.dataA.id, name: db.dataA.name, phone: db.dataA.phone, source: db.dataA.source, status: "staged" },
        ]));
        setLogs((l) => [...l, { id: Date.now().toString(), branch: db.branchAName, msg: db.dataA.msgC, type: "commit" }]);
      }
      if (detail === "push-A") {
        setRows((r) => r.map((x) => (x.id === db.dataA.id ? { ...x, status: "pushed" } : x)));
        setLogs((l) => [...l, { id: Date.now().toString(), branch: db.branchAName, msg: db.dataA.msgP, type: "push" }]);
      }
    };
    const handleB = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "commit-B") {
        setRows((r) => (r.find((x) => x.id === db.dataB.id) ? r : [
          ...r, { id: db.dataB.id, name: db.dataB.name, phone: db.dataB.phone, source: db.dataB.source, status: "staged" },
        ]));
        setLogs((l) => [...l, { id: Date.now().toString(), branch: db.branchBName, msg: db.dataB.msgC, type: "commit" }]);
      }
      if (detail === "revert-B") {
        setRows((r) => r.map((x) => (x.id === db.dataB.id ? { ...x, status: "reverted" } : x)));
        setLogs((l) => [...l, { id: Date.now().toString(), branch: db.branchBName, msg: db.dataB.msgR, type: "revert" }]);
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
    s === "staged" ? "text-muted" : s === "reverted" ? "text-rose-500 line-through" : "text-emerald-600";

  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-[13px] font-medium text-foreground">{db.title}</span>
        <span className="mono rounded-full bg-[#d1fbe8] px-2 py-0.5 text-[9px] font-medium text-[#047857]">⎇ main</span>
      </div>

      {/* mirrors MochiConsole's own panel: title bar / fixed-height body / footer bar */}
      <div className="panel w-full text-left">
        <div className="flex h-[49px] items-center justify-between border-b border-line-soft px-4 py-2.5">
          <span className="pixel text-[9px] text-foreground">{db.title}</span>
          <span
            className={`mono flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] font-medium ${
              rows.length ? "bg-[#dbeafe] text-[#1d4ed8]" : "bg-surface-2 text-muted-2"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${rows.length ? "bg-[#3b82f6] animate-pulse" : "bg-muted-2"}`} />
            {db.live}
          </span>
        </div>

        <div className="h-[300px] overflow-y-auto px-4 py-4 font-mono">
          <div className="mono text-[9px] text-muted-2 mb-2">{db.watching}</div>
          <pre className="mono text-[9px] leading-snug text-muted-2">{db.tableHeader}</pre>
          {rows.length === 0
            ? <pre className="mono text-[9px] text-muted-2">{db.tableEmpty}</pre>
            : rows.map((r) => (
              <pre key={r.id} className={`mono text-[9px] leading-snug animate-in fade-in slide-in-from-bottom-1 duration-300 ${statusCls(r.status)}`}>
                {`| ${r.id.padEnd(5)} | ${r.name.padEnd(4)} | ${r.phone} | ${r.source.padEnd(7)} | ${statusLabel(r.status).padEnd(7)} |`}
              </pre>
            ))}
          <pre className="mono text-[9px] text-muted-2">{db.tableFooter}</pre>

          {logs.length > 0 && (
            <div className="mt-3 border-t border-line-soft pt-3 space-y-1.5">
              <div className="mono text-[9px] text-muted-2 mb-1">{db.eventsTitle}</div>
              {logs.map((log, i) => (
                <div key={i} className="mono text-[9px] flex gap-2 animate-in fade-in slide-in-from-bottom-1 duration-300">
                  <span className={log.type === "revert" ? "text-rose-500" : "text-emerald-600"}>
                    {log.type === "commit" ? "○" : log.type === "push" ? "↑" : "⨯"}
                  </span>
                  <span className="text-muted-2">[{log.branch}]</span>
                  <span className={log.type === "revert" ? "text-rose-500 line-through" : "text-foreground"}>{log.msg}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex h-[47px] items-center gap-2 border-t border-line-soft bg-surface-2/40 px-4 py-2.5">
          <span className="mono text-xs text-muted-2">⇄ {syncedCaption}</span>
        </div>
      </div>
    </div>
  );
}

function CollabPanel({ m, syncedCaption }: { m: { db: DB; scripts: { branchA: Line[]; branchB: Line[] } }; syncedCaption: string }) {
  return (
    <div>
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-[13px] font-medium text-foreground">{m.db.userA}</span>
            <span className="mono rounded-full bg-[#dbeafe] px-2 py-0.5 text-[9px] font-medium text-[#1d4ed8]">⎇ {m.db.branchAName}</span>
          </div>
          <MochiConsole customScript={m.scripts.branchA} heightClass="h-[300px]" consoleId="branch-a" fullWidth />
        </div>
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-[13px] font-medium text-foreground">{m.db.userB}</span>
            <span className="mono rounded-full bg-[#ede9fe] px-2 py-0.5 text-[9px] font-medium text-[#6d28d9]">⎇ {m.db.branchBName}</span>
          </div>
          <MochiConsole customScript={m.scripts.branchB} heightClass="h-[300px]" consoleId="branch-b" initialDelay={3500} fullWidth />
        </div>
        <LiveTable db={m.db} syncedCaption={syncedCaption} />
      </div>
    </div>
  );
}

// ─── Item 3 — one agent, one branch, syncing straight to a real DB ─────────────
function SoloGitPanel({ m, agentLabel, syncedCaption }: { m: { db: DB; scripts: { branchA: Line[] } }; agentLabel: string; syncedCaption: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="min-w-0">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[13px] font-medium text-foreground">{agentLabel}</span>
          <span className="mono rounded-full bg-[#dbeafe] px-2 py-0.5 text-[9px] font-medium text-[#1d4ed8]">⎇ main</span>
        </div>
        <MochiConsole customScript={m.scripts.branchA} heightClass="h-[300px]" consoleId="branch-a" fullWidth />
      </div>
      <LiveTable db={m.db} syncedCaption={syncedCaption} />
    </div>
  );
}

// ─── Main exported section ─────────────────────────────────────────────────────
interface Item {
  n: string;
  title: string;
  desc: string;
  render: () => ReactNode;
}

export default function AINative() {
  const { m } = useLang();
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const items: Item[] = [
    { n: "01", title: m.feat.items[0].title, desc: m.feat.items[0].desc, render: () => <ConsolePanel script={m.scripts.chat} /> },
    { n: "02", title: m.feat.items[1].title, desc: m.feat.items[1].desc, render: () => <ConsolePanel script={m.scripts.template} /> },
    {
      n: "03",
      title: m.git.items[0].title,
      desc: m.git.items[0].desc,
      render: () => <SoloGitPanel m={m} agentLabel={m.git.agentLabel} syncedCaption={m.git.syncedCaption} />,
    },
    {
      n: "04",
      title: m.git.items[1].title,
      desc: m.git.items[1].desc,
      render: () => <CollabPanel m={m} syncedCaption={m.git.syncedCaption} />,
    },
  ];
  const current = items[active];

  // scroll-driven selection: whichever item crosses the vertical center of the
  // viewport becomes active, so scrolling steps through 01→04 in order.
  // Desktop only — the sticky side-by-side layout needs it; on mobile each
  // item renders its own demo inline instead, so auto-detection would just
  // fight the layout shift that causes.
  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  const handleSelect = (i: number) => {
    setActive(i);
    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="features" className="relative border-b border-line-soft bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-14 text-center">
          <p className="tech">// FEATURES</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {m.feat.title}
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
            {/* left: numbered capability list — a timeline rail fills as you scroll through them */}
            <div className="relative pl-6">
              <div className="absolute left-2 top-1 bottom-1 w-px bg-line-soft" aria-hidden />
              <div
                className="absolute left-2 top-1 hidden w-px transition-all duration-700 ease-out lg:block"
                style={{ height: `${((active + 1) / items.length) * 100}%`, backgroundColor: toneAt(active).dot }}
                aria-hidden
              />
              {items.map((it, i) => {
                const isActive = i === active;
                const passed = i <= active;
                const t = toneAt(i);
                return (
                  <button
                    key={it.n}
                    ref={(el) => { itemRefs.current[i] = el; }}
                    onClick={() => handleSelect(i)}
                    className={`relative flex w-full flex-col justify-center border-b py-4 text-left transition-colors lg:min-h-[380px] ${
                      isActive ? "border-foreground" : "border-line-soft hover:border-line"
                    }`}
                  >
                    <span
                      className="absolute -left-5 top-6 h-2 w-2 -translate-y-1/2 rounded-full border-2 transition-colors duration-300 lg:top-1/2"
                      style={{
                        backgroundColor: passed ? t.dot : "var(--surface)",
                        borderColor: passed ? t.dot : "var(--line-soft)",
                      }}
                      aria-hidden
                    />
                    <span className="tech" style={{ color: isActive ? t.fg : undefined }}>{it.n}</span>
                    <div className={`mt-1 text-base font-semibold transition-colors ${isActive ? "text-foreground" : "text-muted"}`}>
                      {it.title}
                    </div>
                    {isActive && (
                      <>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{it.desc}</p>
                        {/* mobile: show this item's own demo right here instead of a sticky side panel */}
                        <div className="mt-5 lg:hidden">{it.render()}</div>
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* right: demo — desktop only; mobile renders each demo inline under its item */}
            <div className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
              {current.render()}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
