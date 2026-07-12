"use client";

import { useEffect, useRef, useState } from "react";
import Mascot from "./Mascot";

type Who = "you" | "mochi";
interface Line {
  who: Who;
  text: string;
  process?: boolean;
}

const SCRIPT: Line[] = [
  { who: "you", text: 'add customer "Acme" to crm' },
  { who: "mochi", text: "record #A-102 · Acme Inc created ✓", process: true },
  { who: "you", text: "any new customers this week?" },
  { who: "mochi", text: "found 12 new customers in 'crm' 🍡", process: true },
  { who: "you", text: "commit to git" },
  { who: "mochi", text: "bundle exported → workspace/crm ✓", process: true },
];

const STAGES = ["INIT", "QUERY", "WRITE", "COMMIT"];

export default function MochiConsole() {
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
        await sleep(line.who === "mochi" ? 26 : 34);
      }
    };

    const run = async () => {
      while (!cancelled) {
        setHistory([]);
        setTyping(null);
        setPartial("");
        for (const line of SCRIPT) {
          if (cancelled) return;
          if (line.process) {
            setProcessing(true);
            for (let s = 0; s < STAGES.length; s++) {
              if (cancelled) return;
              setStage(s);
              await sleep(360);
            }
            setStage(-1);
            setProcessing(false);
          }
          await typeOut(line);
          if (cancelled) return;
          setHistory((h) => [...h, line].slice(-4));
          setTyping(null);
          setPartial("");
          await sleep(line.process ? 900 : 550);
        }
        await sleep(1500);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, partial, processing]);

  return (
    <div className="panel scanlines mx-auto w-full max-w-xl text-left">
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center border border-line bg-surface">
            <Mascot thinking={processing} uid="console" className="h-5 w-5" />
          </span>
          <span className="pixel text-[9px] text-foreground">MOCHI.CHAT</span>
        </div>
        <span className="mono flex items-center gap-1.5 text-[10px] text-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${processing ? "bg-foreground animate-pulse" : "bg-muted-2"}`} />
          {processing ? "PROCESSING" : "LIVE"}
        </span>
      </div>

      {/* conversation */}
      <div ref={scrollRef} className="h-[168px] space-y-2 overflow-hidden px-4 py-4">
        {history.map((l, i) => (
          <Bubble key={i} line={l} />
        ))}
        {processing && <Pipeline stage={stage} />}
        {typing && <Bubble line={{ ...typing, text: partial }} caret />}
      </div>

      {/* input bar (decorative) */}
      <div className="flex items-center gap-2 border-t border-line px-4 py-2.5">
        <span className="mono text-[11px] text-muted-2">›</span>
        <span className="mono text-[11px] text-muted-2">talk to mochi…</span>
        <span className="ml-auto pixel text-[8px] text-muted-2">ENTER ⏎</span>
      </div>
    </div>
  );
}

function Bubble({ line, caret }: { line: Line; caret?: boolean }) {
  const isYou = line.who === "you";
  return (
    <div className={`flex ${isYou ? "justify-end" : "justify-start"}`}>
      <div
        className={`mono max-w-[85%] border px-3 py-1.5 text-[12px] leading-snug ${
          isYou ? "border-line bg-surface text-foreground" : "border-line bg-foreground text-background"
        }`}
      >
        <span className={isYou ? "text-muted-2" : "text-background/60"}>{isYou ? "you › " : "mochi › "}</span>
        {line.text}
        {caret && <span className="animate-cursor ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-current align-middle" />}
      </div>
    </div>
  );
}

function Pipeline({ stage }: { stage: number }) {
  return (
    <div className="border border-line bg-surface px-3 py-2.5">
      <div className="mb-2 flex items-center justify-between">
        <span className="pixel text-[7px] text-muted">WORKFLOW</span>
        <span className="pixel animate-blink text-[7px] text-foreground">RUNNING…</span>
      </div>

      <div className="flex items-center">
        {STAGES.map((s, i) => {
          const done = i < stage;
          const active = i === stage;
          return (
            <div key={s} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1">
                <span
                  className={`flex h-4 w-4 items-center justify-center border text-[7px] ${
                    active
                      ? "animate-pulse-node border-line bg-foreground text-background"
                      : done
                        ? "border-line bg-foreground text-background"
                        : "border-line bg-surface text-muted-2"
                  }`}
                >
                  {done ? "✓" : i + 1}
                </span>
                <span className={`pixel text-[6px] ${active || done ? "text-foreground" : "text-muted-2"}`}>{s}</span>
              </div>
              {i < STAGES.length - 1 && (
                <div className="mx-1 h-px flex-1 overflow-hidden bg-border">
                  <div className={`h-full bg-foreground transition-all duration-300 ${i < stage ? "w-full" : "w-0"}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* scan bar */}
      <div className="relative mt-2.5 h-1 overflow-hidden border border-line bg-surface">
        <div className="absolute inset-y-0 w-1/3 animate-scanx bg-foreground/70" />
      </div>
    </div>
  );
}
