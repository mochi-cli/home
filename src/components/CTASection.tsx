"use client";

import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function CTASection() {
  const { m } = useLang();
  return (
    <section className="border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-center text-background sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-background/10">
                <Mascot pose="happy" uid="cta" className="h-14 w-14" />
              </div>

              <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Insert coin to continue.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-background/70">
                {m.cta.sub}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-background px-7 text-sm font-medium text-foreground transition-transform hover:-translate-y-px"
                >
                  Press start →
                </a>
                <div className="mono inline-flex h-12 items-center gap-3 rounded-full border border-background/20 bg-background/5 px-5 text-sm text-background/90">
                  <span className="text-background/40">$</span> sudo npx @mochi-cli/mochi init --kit all
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
