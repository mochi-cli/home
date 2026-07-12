"use client";

import { useEffect, useState } from "react";
import MochiConsole, { Line } from "./MochiConsole";
import {
  Frame,
  Crosshair,
  RegMark,
  DashedRings,
  TechCaption,
  EQSlider,
  CircleToolbar,
  WarnTriangle,
  DotBlock,
} from "./hud";
import Mascot from "./Mascot";
import { useLang } from "./LanguageProvider";
import { useEngine } from "./EngineProvider";

const agents = ["CLAUDE", "CODEX", "OPENCODE"];

export default function Hero() {
  const { m } = useLang();
  const { selectedEngines, toggleEngine, kitValue } = useEngine();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`npx github:mochi-cli/mochi init --kit ${kitValue}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="scanlines relative overflow-hidden border-b border-line">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-60" />

      {/* ---- corner motifs ---- */}
      <DotBlock className="pointer-events-none absolute left-4 top-4 hidden h-16 w-16 opacity-40 lg:block" />
      <DotBlock className="pointer-events-none absolute right-4 top-4 hidden h-16 w-16 opacity-40 lg:block" />
      <DotBlock className="pointer-events-none absolute bottom-4 left-4 hidden h-16 w-16 opacity-40 lg:block" />
      <DotBlock className="pointer-events-none absolute bottom-4 right-4 hidden h-16 w-16 opacity-40 lg:block" />
      <WarnTriangle className="absolute left-24 top-6 hidden h-4 w-4 text-muted-2 lg:block" />
      <WarnTriangle className="absolute right-24 top-6 hidden h-4 w-4 text-muted-2 lg:block" />
      <TechCaption className="absolute left-24 top-14 hidden lg:block" />
      <TechCaption
        className="absolute right-24 top-14 hidden text-right lg:block"
        lines={["MOCHI READY", "START · TALK TO YOUR DATA", "AI // CLAUDE·CODEX·OC"]}
      />

      {/* ---- side rails ---- */}
      <div className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center gap-3 xl:flex">
        <CircleToolbar />
        <EQSlider dir="left" />
      </div>
      <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-3 xl:flex">
        <EQSlider dir="right" />
        <CircleToolbar />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-14 text-center md:pt-16">
        {/* title */}
        <div className="mb-3 flex items-center justify-center gap-4">
          <span className="hidden h-px w-16 bg-line sm:block" />
          <h1 className="pixel text-5xl font-bold tracking-tight text-foreground sm:text-7xl">MOCHI</h1>
          <span className="hidden h-px w-16 bg-line sm:block" />
        </div>

        {/* insert coin pill */}
        <div className="mb-8 flex justify-center">
          <span className="pixel inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2 text-[11px] text-foreground">
            <span className="h-2 w-2 animate-blink rounded-full bg-foreground" />
            INSERT COIN
          </span>
        </div>

        {/* mascot reticle */}
        <div className="relative mx-auto mb-10 w-fit">
          <DashedRings className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 [color:var(--line-soft)] sm:h-[360px] sm:w-[360px]" />
          <Crosshair className="absolute -left-4 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" />
          <Crosshair className="absolute -right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" />
          <RegMark className="absolute left-1/2 -top-6 h-3 w-3 -translate-x-1/2 text-muted" />
          <RegMark className="absolute left-1/2 -bottom-6 h-3 w-3 -translate-x-1/2 text-muted" />
          <Frame size={18} className="p-6">
            <Mascot uid="hero" className="animate-float relative h-36 w-36 sm:h-44 sm:w-44" />
          </Frame>
        </div>

        {/* headline */}
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {m.hero.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
          {m.hero.sub}
        </p>

        {/* agent select toggles */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="tech">SELECT ENGINE ›</span>
          {agents.map((a) => {
            const isSelected = selectedEngines.includes(a);
            return (
              <button 
                key={a}
                onClick={() => toggleEngine(a)}
                className={`pixel border border-line px-2.5 py-1 text-[9px] transition-colors ${
                  isSelected ? "bg-foreground text-background" : "bg-surface text-foreground"
                }`}
              >
                {a}
              </button>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hard pixel inline-flex h-12 w-full items-center justify-center px-7 text-[11px] sm:w-auto"
          >
            PRESS START ►
          </a>
          <div className="mono flex h-12 items-center justify-between gap-3 border border-line bg-surface pl-5 pr-2 text-sm text-foreground sm:w-auto w-full max-w-full overflow-hidden">
            <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none">
              <span className="text-muted-2">$</span> npx github:mochi-cli/mochi init --kit {kitValue}
            </div>
            <button 
              onClick={handleCopy}
              className="pixel ml-2 flex h-8 shrink-0 items-center justify-center border border-line bg-background px-3 text-[9px] text-muted-2 transition-colors hover:bg-surface hover:text-foreground active:scale-95"
              title="Copy to clipboard"
            >
              {copied ? "COPIED" : "COPY"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
