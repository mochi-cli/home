"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";
import { useEngine } from "./EngineProvider";
import { toneAt } from "@/lib/tones";

const stepMeta = [
  { n: "01", cmd: "npx @mochi-cli/mochi init --kit all" }, // overridden per selection
  { n: "02", cmd: '"Hey Mochi create profile"' },
  { n: "03", cmd: '"Hey mochi create CRM"' },
];

function CopyableCommand({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="mono mt-6 flex items-center justify-between gap-2 rounded-xl border border-line-soft bg-surface-2 px-3 py-2 text-[12px] text-foreground">
      <span className="truncate">{text}</span>
      <button
        onClick={handleCopy}
        className="shrink-0 rounded-full border border-line-soft bg-surface px-2.5 py-1 text-[11px] font-medium text-muted transition-colors hover:border-line hover:text-foreground"
        title="Copy to clipboard"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function Workflow() {
  const { m } = useLang();
  const { kitValue } = useEngine();
  return (
    <section id="workflow" className="relative border-b border-line-soft">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12">
          <p className="tech">// HOW IT WORKS</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {m.flow.title}
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {stepMeta.map((s, i) => {
            const tone = toneAt(i);
            return (
              <Reveal key={s.n} delay={i * 100}>
                <div className="card h-full p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
                      style={{ backgroundColor: tone.bg, color: tone.fg }}
                    >
                      {i + 1}
                    </span>
                    <span className="tech">Step {s.n}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {m.flow.steps[i].title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {m.flow.steps[i].desc}
                  </p>
                  <CopyableCommand text={i === 0 ? `npx @mochi-cli/mochi init --kit ${kitValue}` : s.cmd} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
