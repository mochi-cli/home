"use client";

import Reveal from "./Reveal";
import { Frame } from "./hud";
import { useLang } from "./LanguageProvider";

const plans = [
  { name: "FREE PLAY", price: "$0", credits: "0 CR", popular: false },
  { name: "PRO", price: "$12", credits: "12 CR", popular: true },
  { name: "TEAM", price: "$39", credits: "39 CR", popular: false },
];

function Check() {
  return (
    <svg viewBox="0 0 8 8" className="h-3 w-3 flex-none" shapeRendering="crispEdges" aria-hidden="true">
      <path d="M1 4h1v1h1v1h1v-1h1v-1h1v-1h1v-1" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="1" y="4" width="1" height="1" fill="currentColor" />
      <rect x="2" y="5" width="1" height="1" fill="currentColor" />
      <rect x="3" y="6" width="1" height="1" fill="currentColor" />
      <rect x="4" y="5" width="1" height="1" fill="currentColor" />
      <rect x="5" y="4" width="1" height="1" fill="currentColor" />
      <rect x="6" y="3" width="1" height="1" fill="currentColor" />
    </svg>
  );
}

export default function Subscription() {
  const { m } = useLang();

  return (
    <section id="pricing" className="scanlines relative border-b border-line bg-surface-2">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="tech">{"// SUBSCRIPTION"}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{m.price.title}</h2>
            <p className="mt-2 max-w-md text-sm text-muted">{m.price.sub}</p>
          </div>
          <span className="pixel hidden whitespace-nowrap text-[9px] text-muted-2 sm:block">03 PLANS</span>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan, i) => {
            const data = m.price.plans[i];
            const hot = plan.popular;
            return (
              <Reveal key={plan.name} delay={i * 90}>
                <Frame
                  size={14}
                  className={`card-hud relative flex h-full flex-col border p-7 ${
                    hot ? "border-line bg-[#141414] text-white" : "border-line bg-background"
                  }`}
                >
                  {hot && (
                    <span className="pixel absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap border border-line bg-white px-2 py-0.5 text-[8px] text-[#141414]">
                      ★ {m.price.popular}
                    </span>
                  )}

                  <div className="flex items-center justify-between">
                    <span className={`pixel text-[11px] ${hot ? "text-white" : "text-foreground"}`}>{plan.name}</span>
                    <span className={`pixel text-[8px] ${hot ? "text-white/50" : "text-muted-2"}`}>{plan.credits}</span>
                  </div>

                  <div className="mt-5 flex items-end gap-1">
                    <span className="pixel text-3xl leading-none">{plan.price}</span>
                    <span className={`mono mb-1 text-xs ${hot ? "text-white/60" : "text-muted"}`}>/mo</span>
                  </div>
                  <p className={`mt-1 text-[13px] ${hot ? "text-white/70" : "text-muted"}`}>{data.tagline}</p>

                  <div className={`my-6 h-px w-full ${hot ? "bg-white/20" : "bg-line"}`} />

                  <ul className="flex flex-1 flex-col gap-3">
                    {data.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2.5 text-[13px] ${hot ? "text-white/90" : "text-foreground"}`}>
                        <span className={hot ? "text-white" : "text-foreground"}>
                          <Check />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://github.com/mochi-cli/mochi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`pixel mt-7 inline-flex h-11 w-full items-center justify-center border text-[10px] transition-transform hover:-translate-x-px hover:-translate-y-px ${
                      hot
                        ? "border-white bg-white text-[#141414] shadow-[4px_4px_0_0_rgba(255,255,255,0.3)]"
                        : "border-line bg-foreground text-background shadow-[4px_4px_0_0_var(--line)]"
                    }`}
                  >
                    INSERT COIN ►
                  </a>
                </Frame>
              </Reveal>
            );
          })}
        </div>

        <p className="mono mt-6 text-center text-[11px] text-muted-2">{m.price.billed}</p>
      </div>
    </section>
  );
}
