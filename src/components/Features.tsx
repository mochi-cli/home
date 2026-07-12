"use client";

import Reveal from "./Reveal";
import { Frame } from "./hud";
import { useLang } from "./LanguageProvider";
import { useEffect, useState } from "react";
import MochiConsole, { Line } from "./MochiConsole";

function ChatVisual({ m }: { m: any }) {
  return (
    <div className="mt-6">
      <MochiConsole customScript={m.scripts.chat} heightClass="h-[280px]" />
    </div>
  );
}

function TemplateVisual({ m }: { m: any }) {
  return (
    <div className="mt-6">
      <MochiConsole customScript={m.scripts.template} heightClass="h-[280px]" />
    </div>
  );
}

type DBRow = { id: string; name: string; phone: string; source: string; status: "staged" | "pushed" | "merged" | "reverted" };
type GitLog = { id: string; branch: string; msg: string; type: "commit" | "push" | "revert" };

function RealtimeDB({ m }: { m: any }) {
  const db = m.db;
  const [rows, setRows] = useState<DBRow[]>([]);
  const [logs, setLogs] = useState<GitLog[]>([]);

  useEffect(() => {
    setRows([]);
    setLogs([]);
    const handleReset = () => {
      setRows([]);
      setLogs([]);
    };
    const handleA = (e: any) => {
      if (e.detail === "commit-A") {
        setRows(r => r.find(x => x.id === db.dataA.id) ? r : [...r, { id: db.dataA.id, name: db.dataA.name, phone: db.dataA.phone, source: db.dataA.source, status: "staged" }]);
        setLogs(l => [...l, { id: Date.now().toString(), branch: db.branchAName, msg: db.dataA.msgC, type: "commit" }]);
      }
      if (e.detail === "push-A") {
        setRows(r => r.map(x => x.id === db.dataA.id ? { ...x, status: "pushed" } : x));
        setLogs(l => [...l, { id: Date.now().toString(), branch: db.branchAName, msg: db.dataA.msgP, type: "push" }]);
      }
    };
    const handleB = (e: any) => {
      if (e.detail === "commit-B") {
        setRows(r => r.find(x => x.id === db.dataB.id) ? r : [...r, { id: db.dataB.id, name: db.dataB.name, phone: db.dataB.phone, source: db.dataB.source, status: "staged" }]);
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

  const statusLabel = (s: DBRow["status"]) => s === "merged" ? db.statusMerged : s === "pushed" ? db.statusPushed : s === "reverted" ? db.statusReverted : db.statusStaged;
  const statusCls   = (s: DBRow["status"]) => s === "staged" ? "text-muted" : s === "reverted" ? "text-red-400 line-through" : "text-foreground";

  return (
    <div className="flex-1 min-w-0 mt-6 lg:mt-0">
      <div className="mb-2 flex items-center gap-2">
        <span className="pixel text-[8px] text-muted">{db.title}</span>
        <span className="mono text-[9px] border border-line bg-surface px-2 py-0.5 text-foreground flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${rows.length ? "bg-foreground animate-pulse" : "bg-muted-2"}`} />
          {db.live}
        </span>
      </div>
      <div className="panel scanlines h-[260px] overflow-y-auto px-4 py-3 font-mono flex flex-col">
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
        
        <div className="mt-4 flex-1">
          <div className="mono text-[9px] text-muted-2 mb-2 pt-2 border-t border-line">{db.eventsTitle}</div>
          <div className="space-y-1.5">
            {logs.length === 0 ? (
              <div className="mono text-[9px] text-muted-2">{db.eventsEmpty}</div>
            ) : (
              logs.map((log, i) => (
                <div key={i} className="mono text-[9px] flex gap-2 animate-in fade-in slide-in-from-bottom-1 duration-300">
                  <span className={log.type === "revert" ? "text-red-400" : "text-foreground"}>
                    {log.type === "commit" ? "○" : log.type === "push" ? "↑" : "⨯"}
                  </span>
                  <span className="text-muted-2">[{log.branch}]</span>
                  <span className={log.type === "revert" ? "text-red-400 line-through" : "text-foreground"}>{log.msg}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiBranchVisual({ m }: { m: any }) {
  return (
    <div className="mt-8 flex flex-col gap-6 lg:flex-row">
      <div className="flex-1 min-w-0">
        <div className="mb-2 flex items-center gap-2">
          <span className="pixel text-[8px] text-muted">{m.db.userA}</span>
          <span className="mono text-[9px] border border-line bg-surface px-2 py-0.5 text-foreground">⎇ {m.db.branchAName}</span>
        </div>
        <MochiConsole customScript={m.scripts.branchA} heightClass="h-[260px]" consoleId="branch-a" />
      </div>
      <div className="hidden w-px bg-line lg:block" />
      <div className="flex-1 min-w-0">
        <div className="mb-2 flex items-center gap-2">
          <span className="pixel text-[8px] text-muted">{m.db.userB}</span>
          <span className="mono text-[9px] border border-line bg-surface px-2 py-0.5 text-foreground">⎇ {m.db.branchBName}</span>
        </div>
        <MochiConsole customScript={m.scripts.branchB} heightClass="h-[260px]" consoleId="branch-b" initialDelay={3500} />
      </div>
      <div className="hidden w-px bg-line lg:block" />
      <RealtimeDB m={m} />
    </div>
  );
}

export default function Features() {
  const { m } = useLang();

  const featureMeta = [
    { span: "lg:col-span-3", tag: "SYS.01 · AGENT", getTitle: () => m.feat.items[0].title, getDesc: () => m.feat.items[0].desc, visual: <ChatVisual m={m} /> },
    { span: "lg:col-span-2", tag: "SYS.02 · TEMPLATE", getTitle: () => m.feat.items[1].title, getDesc: () => m.feat.items[1].desc, visual: <TemplateVisual m={m} /> },
    { span: "lg:col-span-5", tag: "SYS.03 · GIT & CONTROL", getTitle: () => `${m.feat.items[2].title} & ${m.feat.items[3].title}`, getDesc: () => `${m.feat.items[2].desc} ${m.feat.items[3].desc}`, visual: <MultiBranchVisual m={m} /> },
  ];

  return (
    <section id="features" className="relative border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="tech">{"// FEATURE SELECT"}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {m.feat.title}
            </h2>
          </div>
          <span className="pixel hidden whitespace-nowrap text-[9px] text-muted-2 sm:block">03 MODULES</span>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-5">
          {featureMeta.map((f, i) => (
            <Reveal key={f.tag} delay={i * 80} className={f.span}>
              <Frame size={12} className="card-hud h-full border border-line bg-surface p-7">
                <p className="pixel text-[9px] text-muted">{f.tag}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{f.getTitle()}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.getDesc()}</p>
                {f.visual}
              </Frame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
