"use client";

import Reveal from "./Reveal";
import { Frame } from "./hud";
import { useLang } from "./LanguageProvider";

export default function GitControl() {
  const { m } = useLang();
  
  return (
    <section id="git-control" className="relative border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="tech">{"// SYS.03"}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {m.git?.title || "Version control for your database"}
            </h2>
          </div>
          <span className="pixel hidden whitespace-nowrap text-[9px] text-muted-2 sm:block">VERSION CONTROL</span>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {m.git?.items?.map((item: any, i: number) => (
            <Reveal key={item.title} delay={i * 80}>
              <Frame size={12} className="card-hud h-full border border-line bg-background p-7">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                
                <div className="mt-6 panel scanlines relative p-5 h-[200px] bg-surface flex flex-col justify-center border border-line overflow-hidden">
                  <div className="dotgrid pointer-events-none absolute inset-0 opacity-20" />
                  <div className="relative z-10">
                    {i === 0 ? (
                      // Commit visual
                      <div className="font-mono text-[10px] text-muted-2 space-y-3">
                        <div className="flex items-center gap-2 text-green-400">
                          <span>+</span>
                          <span>[CUSTOMERS] Mike, 0901234567, NY</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400">
                          <span>+</span>
                          <span>[ORDERS] Mike - Shirt</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-line border-dashed text-foreground flex items-center gap-2">
                          <span className="text-muted-2 opacity-50">❯ mochi</span> commit -m "add Mike"
                        </div>
                        <div className="text-muted-2 text-[9px] mt-1 flex items-center gap-1.5">
                          <span className="text-green-400">✓</span> saved snapshot <span className="text-foreground">c3a9f2</span>
                        </div>
                      </div>
                    ) : (
                      // Rollback visual
                      <div className="font-mono text-[10px] text-muted-2 space-y-2">
                        <div className="text-foreground flex items-center gap-2">
                          <span className="text-muted-2 opacity-50">❯ mochi</span> log --oneline
                        </div>
                        <div className="pl-3 border-l border-line mt-2 space-y-1.5 py-1">
                          <div className="flex items-center gap-3">
                            <span className="text-foreground opacity-50">c3a9f2</span>
                            <span className="text-foreground">add Mike</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-foreground opacity-50">b8f1a4</span>
                            <span className="text-muted-2">update schema</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-foreground opacity-50">a1c09d</span>
                            <span className="text-muted-2">initial commit</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-2 text-foreground flex items-center gap-2">
                          <span className="text-muted-2 opacity-50">❯ mochi</span> rollback b8f1a4
                        </div>
                        <div className="text-red-400 text-[9px] mt-1 flex items-center gap-1.5">
                          <span>⎌</span> reverted to b8f1a4
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Frame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
