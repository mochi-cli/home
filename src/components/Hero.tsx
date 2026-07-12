"use client";

import Mascot from "./Mascot";
import MochiConsole from "./MochiConsole";
import {
  Frame,
  Crosshair,
  RegMark,
  DashedRings,
  PixelHeart,
  TickBar,
  TechCaption,
  EQSlider,
  CircleToolbar,
  ConnectorJacks,
  WarnTriangle,
  DotBlock,
} from "./hud";
import { useLang } from "./LanguageProvider";

const agents = ["CLAUDE", "CODEX", "OPENCODE"];

function Dpad({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M38 12 h24 v26 h26 v24 h-26 v26 h-24 v-26 h-26 v-24 h26 z" />
      <circle cx="50" cy="50" r="8" />
      <path d="M50 20 l-4 6 h8 z" fill="currentColor" />
      <path d="M50 80 l-4 -6 h8 z" fill="currentColor" />
      <path d="M20 50 l6 -4 v8 z" fill="currentColor" />
      <path d="M80 50 l-6 -4 v8 z" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  const { m } = useLang();
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
        lines={["SYS.READY", "P1 · INSERT COIN", "AI // CLAUDE·CODEX·OC"]}
      />

      {/* ---- side rails (EQ + circle toolbars) ---- */}
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
        <div className="mb-10 flex justify-center">
          <span className="pixel inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2 text-[11px] text-foreground">
            <span className="h-2 w-2 animate-blink rounded-full bg-foreground" />
            INSERT COIN
          </span>
        </div>

        {/* mascot reticle */}
        <div className="relative mx-auto mb-10 w-fit">
          <DashedRings className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 [color:var(--line-soft)] sm:h-[400px] sm:w-[400px]" />
          <Crosshair className="absolute -left-4 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" />
          <Crosshair className="absolute -right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" />
          <RegMark className="absolute left-1/2 -top-6 h-3 w-3 -translate-x-1/2 text-muted" />
          <RegMark className="absolute left-1/2 -bottom-6 h-3 w-3 -translate-x-1/2 text-muted" />
          <Frame size={18} className="p-6">
            <Mascot uid="hero" className="animate-float relative h-40 w-40 sm:h-48 sm:w-48" />
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
          {agents.map((a) => (
            <span key={a} className="pixel border border-line bg-surface px-2.5 py-1 text-[9px] text-foreground">
              {a}
            </span>
          ))}
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
          <div className="mono inline-flex h-12 items-center gap-3 border border-line bg-surface px-5 text-sm text-foreground">
            <span className="text-muted-2">$</span> npm i -g mochikit
          </div>
        </div>

        {/* live dialogue + workflow processing */}
        <div className="mt-12">
          <MochiConsole />
        </div>

        {/* HI SCORE bar + controls */}
        <div className="mx-auto mt-12 flex max-w-xl items-center gap-4">
          <Dpad className="hidden h-14 w-14 flex-none text-muted sm:block" />
          <div className="panel scanlines flex flex-1 items-center justify-between gap-4 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <PixelHeart className="h-4 w-5 text-foreground" />
              <PixelHeart className="h-4 w-5 text-foreground" />
              <PixelHeart className="h-4 w-5 text-foreground" />
              <PixelHeart filled={false} className="h-4 w-5 text-muted-2" />
            </div>
            <TickBar count={20} className="hidden md:flex" />
            <span className="pixel text-[11px] text-foreground">
              HI-SCORE <span className="text-muted">19009304</span>
            </span>
          </div>
          <div className="hidden flex-none grid-cols-2 gap-1.5 sm:grid">
            {["A", "B", "X", "Y"].map((b) => (
              <span key={b} className="pixel flex h-6 w-6 items-center justify-center rounded-full border border-line text-[8px] text-muted">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* connector jacks */}
        <div className="mt-8 flex justify-center">
          <ConnectorJacks className="h-16 w-52 text-muted" />
        </div>
      </div>
    </section>
  );
}
