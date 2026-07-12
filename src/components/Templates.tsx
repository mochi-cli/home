"use client";

import Reveal from "./Reveal";
import { Frame } from "./hud";
import { useLang } from "./LanguageProvider";

const templateMeta = [
  { name: "CRM", code: "MODE_01" },
  { name: "HRM", code: "MODE_02" },
  { name: "INVENTORY", code: "MODE_03" },
  { name: "PROJECT", code: "MODE_04" },
];

export default function Templates() {
  const { m } = useLang();
  return (
    <section id="templates" className="relative border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="tech">{"// SELECT MODE"}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {m.tpl.title}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {m.tpl.sub}
            </p>
            <a
              href="https://github.com/mochi-cli/mochi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost pixel mt-6 inline-flex h-11 items-center px-5 text-[10px]"
            >
              VIEW ALL ►
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {templateMeta.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <Frame size={12} className="card-hud h-full border border-line bg-surface p-6">
                  <div className="flex items-center justify-between">
                    <span className="pixel text-[9px] text-muted-2">{t.code}</span>
                    <span className="flex h-5 w-5 items-center justify-center border border-line text-[10px] text-muted">
                      {i + 1}
                    </span>
                  </div>
                  <p className="pixel mt-5 text-[13px] text-foreground">{t.name}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{m.tpl.items[i]}</p>
                </Frame>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
