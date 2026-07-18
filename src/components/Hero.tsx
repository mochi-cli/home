"use client";

import { useState } from "react";
import Mascot from "./Mascot";
import { useLang } from "./LanguageProvider";
import { useEngine, ALL_ENGINES } from "./EngineProvider";
import { toneAt } from "@/lib/tones";

export default function Hero() {
  const { m } = useLang();
  const { selectedEngines, toggleEngine, kitValue } = useEngine();
  const [copied, setCopied] = useState(false);

  const installCommand = `npx @mochi-cli/mochi init --kit ${kitValue}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative overflow-hidden border-b border-line-soft">
      {/* ambient background glow — slow drifting color blobs, kept faint so text stays crisp */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-drift-a absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(163,240,209,0.55), transparent 70%)" }}
        />
        <div
          className="animate-drift-b absolute -right-28 top-0 h-[380px] w-[380px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(147,197,253,0.5), transparent 70%)" }}
        />
        <div
          className="animate-drift-c absolute bottom-[-160px] left-1/3 h-[360px] w-[360px] rounded-full opacity-45 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(216,180,254,0.45), transparent 70%)" }}
        />
      </div>
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 text-center md:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-soft bg-surface px-4 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-highlight-strong" />
          <span className="tracking-wide">Live workspace — synced peer-to-peer</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {m.hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {m.hero.sub}
        </p>

        {/* Prompt bar — teable-style, with mascot as avatar */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-3xl rounded-2xl border border-line-soft bg-surface p-2 text-left shadow-[var(--shadow-card)]">
            <div className="flex items-start gap-3 p-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-highlight/50">
                <Mascot uid="hero" className="h-8 w-8" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mono flex items-center gap-2 text-sm text-foreground">
                  <span className="text-muted-2">$</span>
                  <span className="truncate">{installCommand}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted-2">
                  Select an agent · kit is auto-detected
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="btn-ghost h-9 text-xs"
                title="Copy install command"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 border-t border-line-soft px-3 py-3">
              {ALL_ENGINES.map((a, i) => {
                const isSelected = selectedEngines.includes(a);
                const tone = toneAt(i);
                return (
                  <button
                    key={a}
                    onClick={() => toggleEngine(a)}
                    style={
                      isSelected
                        ? { backgroundColor: tone.bg, color: tone.fg, borderColor: "transparent" }
                        : undefined
                    }
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      isSelected
                        ? ""
                        : "border-line-soft bg-surface text-muted hover:border-line hover:text-foreground"
                    }`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="btn-primary text-sm">
            Get started →
          </a>
          <a href="#workflow" className="btn-ghost text-sm">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
