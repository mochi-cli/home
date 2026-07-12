"use client";

import Reveal from "./Reveal";
import { Frame } from "./hud";
import { useLang } from "./LanguageProvider";
import MochiConsole from "./MochiConsole";

function ChatVisual({ m }: { m: any }) {
  return (
    <div className="mt-6">
      <MochiConsole customScript={m.scripts.chat} heightClass="h-[280px]" />
    </div>
  );
}

function TemplateVisual({ m }: { m: any }) {
  return (
    <div className="mt-6">
      <MochiConsole customScript={m.scripts.template} heightClass="h-[280px]" />
    </div>
  );
}

export default function Features() {
  const { m } = useLang();

  const featureMeta = [
    { span: "lg:col-span-3", tag: "AI AGENT",    getTitle: () => m.feat.items[0].title, getDesc: () => m.feat.items[0].desc, visual: <ChatVisual m={m} /> },
    { span: "lg:col-span-2", tag: "TEMPLATES",   getTitle: () => m.feat.items[1].title, getDesc: () => m.feat.items[1].desc, visual: <TemplateVisual m={m} /> },
  ];

  return (
    <section id="features" className="relative border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="tech">{"// FEATURES"}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {m.feat.title}
            </h2>
          </div>
          <span className="pixel hidden whitespace-nowrap text-[9px] text-muted-2 sm:block">02 MODULES</span>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-5">
          {featureMeta.map((f, i) => (
            <Reveal key={f.tag} delay={i * 80} className={f.span}>
              <Frame size={12} className="card-hud h-full border border-line bg-surface p-7">
                <p className="pixel text-[9px] text-muted">{f.tag}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{f.getTitle()}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.getDesc()}</p>
                {f.visual}
              </Frame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
