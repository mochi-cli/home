"use client";

import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const stepMeta = [
  { n: "01", cmd: "mochikit init --template crm" },
  { n: "02", cmd: '"Hey Mochi…"' },
  { n: "03", cmd: "mochikit deploy git" },
];

export default function Workflow() {
  const { m } = useLang();
  return (
    <section id="workflow" className="scanlines relative border-b border-line bg-surface-2">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-8">
          <p className="tech">{"// GAME LOOP"}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {m.flow.title}
          </h2>
        </Reveal>

        {/* animated processing flow */}
        <div className="relative mb-8 hidden h-6 items-center md:flex" aria-hidden="true">
          <div className="relative h-px w-full bg-line">
            <div
              className="absolute h-px w-full opacity-60"
              style={{ backgroundImage: "repeating-linear-gradient(90deg,var(--line) 0 6px,transparent 6px 12px)" }}
            />
            {["16.66%", "50%", "83.33%"].map((left) => (
              <span
                key={left}
                className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-line bg-surface-2"
                style={{ left }}
              />
            ))}
            <span className="animate-flowx absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground shadow-[0_0_0_3px_var(--surface-2)]" />
          </div>
          <span className="pixel ml-3 whitespace-nowrap text-[8px] text-muted">LOOP ∞</span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stepMeta.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="card-hud group relative h-full border border-line bg-background p-7">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <span className="pixel text-3xl text-foreground">{s.n}</span>
                  <span className="pixel text-[9px] text-muted-2">LEVEL</span>
                </div>
                <div className="mono mt-5 inline-block border border-line bg-surface px-2.5 py-1 text-[12px] text-foreground">
                  {s.cmd}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{m.flow.steps[i].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.flow.steps[i].desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
