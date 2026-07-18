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
          <div className="relative overflow-hidden rounded-3xl bg-mesh-bright px-8 py-20 text-center text-foreground ring-1 ring-line-soft sm:px-16">
            <div className="relative">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-surface shadow-[var(--shadow-card)]">
                <Mascot pose="happy" uid="cta" className="h-14 w-14" />
              </div>

              <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Ready to organize your data?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
                {m.cta.sub}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#pricing" className="btn-primary text-sm">
                  Get started →
                </a>
                <div className="mono inline-flex h-12 items-center gap-3 rounded-full border border-line-soft bg-surface px-5 text-sm text-foreground/90">
                  <span className="text-muted-2">$</span> sudo npx @mochi-cli/mochi init --kit all
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
