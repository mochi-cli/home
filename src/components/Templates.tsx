"use client";

import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const templateMeta = [
  { name: "CRM",       code: "Customer Management" },
  { name: "HRM",       code: "HR Management" },
  { name: "INVENTORY", code: "Stock & Warehouse" },
  { name: "PROJECT",   code: "Task & Progress" },
];

export default function Templates() {
  const { m } = useLang();
  return (
    <section id="templates" className="relative border-b border-line-soft bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="tech">// TEMPLATES</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {m.tpl.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {m.tpl.sub}
            </p>
          </div>
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            View all →
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {templateMeta.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <div className="card h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="pixel text-[11px] text-foreground">{t.name}</span>
                  <span className="tech text-[9px]">0{i + 1}</span>
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">{t.code}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{m.tpl.items[i]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
