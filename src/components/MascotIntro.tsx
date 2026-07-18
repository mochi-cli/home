"use client";

import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const stats = [
  { label: "Simple",    val: 5 },
  { label: "Safe",      val: 5 },
  { label: "Traceable", val: 4 },
  { label: "Zero-dep",  val: 5 },
];

export default function MascotIntro() {
  const { m } = useLang();
  return (
    <section id="mochi" className="relative border-b border-line-soft">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-surface-2 sm:h-80 sm:w-80">
              <Mascot pose="happy" uid="intro" className="animate-float h-48 w-48 sm:h-56 sm:w-56" />
              <span className="pixel absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-line-soft bg-surface px-3 py-1 text-[9px] text-muted">
                PLAYER 01
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="tech">// MEET MOCHI</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {m.char.title}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              {m.char.sub}
            </p>

            <div className="mt-8 space-y-3">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="pixel w-24 flex-none text-[10px] text-muted">
                    {s.label.toUpperCase()}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-2.5 w-6 rounded-sm ${
                          i < s.val ? "bg-foreground" : "bg-surface-2"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
