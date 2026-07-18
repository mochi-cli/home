"use client";

import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";
import MochiConsole from "./MochiConsole";

export default function Features() {
  const { m } = useLang();

  const featureMeta = [
    { span: "lg:col-span-3", tag: "AI Agent",  script: m.scripts.chat,     item: m.feat.items[0] },
    { span: "lg:col-span-2", tag: "Templates", script: m.scripts.template, item: m.feat.items[1] },
  ];

  return (
    <section id="features" className="relative border-b border-line-soft bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12">
          <p className="tech">// FEATURES</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {m.feat.title}
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-5">
          {featureMeta.map((f, i) => (
            <Reveal key={f.tag} delay={i * 80} className={f.span}>
              <div className="card h-full p-7">
                <span className="tech">{f.tag}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  {f.item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.item.desc}</p>
                <div className="mt-6 overflow-hidden rounded-xl border border-line-soft">
                  <MochiConsole customScript={f.script} heightClass="h-[280px]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
