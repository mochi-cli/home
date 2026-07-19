"use client";

import { useEffect, useRef, useState } from "react";
import Mascot from "./Mascot";

type Who = "you" | "mochi";
export interface Line {
  who: Who;
  text: string;
  process?: boolean;
  id?: string;
}

const DEFAULT_SCRIPT: Line[] = [
  { who: "you", text: 'add customer "Acme" to crm' },
  { who: "mochi", text: "record #A-102 · Acme Inc created ✓", process: true },
  { who: "you", text: "any new customers this week?" },
  { who: "mochi", text: "found 12 new customers in 'crm' 🍡", process: true },
  { who: "you", text: "commit to git" },
  { who: "mochi", text: "bundle exported → workspace/crm ✓", process: true },
];

const STAGES = ["INIT", "QUERY", "WRITE", "COMMIT"];

export default function MochiConsole({ customScript, heightClass = "h-[168px]", consoleId, initialDelay = 0, fullWidth = false }: { customScript?: Line[], heightClass?: string, consoleId?: string, initialDelay?: number, fullWidth?: boolean }) {
  const [history, setHistory] = useState<Line[]>([]);
  const [typing, setTyping] = useState<Line | null>(null);
  const [partial, setPartial] = useState("");
  const [stage, setStage] = useState(-1); // -1 = idle, 0..3 processing
  const [processing, setProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const typeOut = async (line: Line) => {
      setTyping(line);
      setPartial("");
      for (let i = 1; i <= line.text.length; i++) {
        if (cancelled) return;
        setPartial(line.text.slice(0, i));
        await sleep(line.who === "mochi" ? (line.text.length > 100 ? 5 : 26) : 34);
      }
    };

    const run = async () => {
      if (initialDelay > 0) await sleep(initialDelay);
      const activeScript = customScript || DEFAULT_SCRIPT;
      while (!cancelled) {
        if (consoleId) {
          window.dispatchEvent(new CustomEvent(`mochi-reset-${consoleId}`));
        }
        setHistory([]);
        setTyping(null);
        setPartial("");
        for (const line of activeScript) {
          if (cancelled) return;
          if (line.process) {
            setProcessing(true);
            for (let s = 0; s < STAGES.length; s++) {
              if (cancelled) return;
              setStage(s);
              await sleep(800);
            }
            setStage(-1);
            setProcessing(false);
          }
          await typeOut(line);
          if (cancelled) return;
          if (line.who === "you") {
            await sleep(200);
          }
          setHistory((h) => [...h, line].slice(-20));
          setTyping(null);
          setPartial("");
          
          if (consoleId && line.id) {
            window.dispatchEvent(new CustomEvent(`mochi-action-${consoleId}`, { detail: line.id }));
          }
          
          await sleep(line.process ? 900 : 550);
        }
        await sleep(5000);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [consoleId, customScript]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, partial, processing]);

  return (
    <div className={`panel w-full text-left ${fullWidth ? "" : "mx-auto max-w-xl"}`}>
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-line-soft px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-highlight/50">
            <Mascot thinking={processing} uid="console" className="h-5 w-5" />
          </span>
          <span className="pixel text-[9px] text-foreground">MOCHI.CHAT</span>
        </div>
        <span
          className={`mono flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] font-medium transition-colors ${
            processing ? "bg-[#ffedd5] text-[#c2410c]" : "bg-[#d1fbe8] text-[#047857]"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${processing ? "bg-[#f97316] animate-pulse" : "bg-[#10b981]"}`} />
          {processing ? "Processing" : "Live"}
        </span>
      </div>

      {/* conversation */}
      <div ref={scrollRef} className={`${heightClass} space-y-2 overflow-y-auto overflow-x-hidden px-4 py-4 scroll-smooth`}>
        {history.map((l, i) => (
          <Bubble key={i} line={l} />
        ))}
        {processing && <Pipeline stage={stage} />}
        {typing?.who === "mochi" && <Bubble line={{ ...typing, text: partial }} caret />}
      </div>

      {/* input bar */}
      <div className="flex items-center gap-2 border-t border-line-soft bg-surface-2/40 px-4 py-3">
        <span className="mono text-sm text-muted-2 mt-0.5 self-start">›</span>
        <span className={`mono text-sm flex-1 leading-snug ${typing?.who === "you" ? "text-foreground" : "text-muted-2"}`}>
          {typing?.who === "you" ? (
            <>
              {partial}
              <span className="animate-cursor ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-current align-middle" />
            </>
          ) : (
            "talk to mochi…"
          )}
        </span>
        <span className={`ml-auto pixel text-[9px] self-end transition-colors ${typing?.who === "you" ? "text-foreground" : "text-muted-2"}`}>
          ENTER ⏎
        </span>
      </div>
    </div>
  );
}

function Bubble({ line, caret }: { line: Line; caret?: boolean }) {
  const isYou = line.who === "you";
  return (
    <div className={`flex ${isYou ? "justify-end" : "justify-start"}`}>
      <div
        className={`mono max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm leading-relaxed ${
          isYou ? "border border-line-soft bg-surface text-foreground" : "bg-foreground text-background"
        }`}
      >
        <span className={isYou ? "text-muted-2" : "text-background/60"}>{isYou ? "you › " : "mochi › "}</span>
        {line.text}
        {caret && <span className="animate-cursor ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-current align-middle" />}
      </div>
    </div>
  );
}

function Pipeline({ stage }: { stage: number }) {
  return (
    <div className="rounded-xl border border-line-soft bg-surface-2/40 px-3 py-2.5">
      <div className="mb-2 flex items-center justify-between">
        <span className="pixel text-[7px] text-muted">WORKFLOW</span>
        <span className="pixel animate-blink text-[7px] text-[#c2410c]">RUNNING…</span>
      </div>

      <div className="flex items-center">
        {STAGES.map((s, i) => {
          const done = i < stage;
          const active = i === stage;
          return (
            <div key={s} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1">
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full text-[7px] transition-colors duration-300 ${
                    active
                      ? "animate-pulse-node bg-[#f97316] text-white"
                      : done
                        ? "bg-[#10b981] text-white"
                        : "bg-line-soft text-muted-2"
                  }`}
                >
                  {done ? "✓" : i + 1}
                </span>
                <span className={`pixel text-[6px] ${active ? "text-[#c2410c]" : done ? "text-[#047857]" : "text-muted-2"}`}>{s}</span>
              </div>
              {i < STAGES.length - 1 && (
                <div className="mx-1 h-px flex-1 overflow-hidden rounded-full bg-line-soft">
                  <div className={`h-full bg-[#10b981] transition-all duration-300 ${i < stage ? "w-full" : "w-0"}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* scan bar */}
      <div className="relative mt-2.5 h-1 overflow-hidden rounded-full bg-surface">
        <div className="absolute inset-y-0 w-1/3 animate-scanx rounded-full bg-[#f97316]/70" />
      </div>
    </div>
  );
}
