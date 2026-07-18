"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";
import MochiConsole from "./MochiConsole";

// ---------- icons ----------
function IconChat() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 6h13a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H10l-4 3v-3H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </svg>
  );
}
function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 3h8l4 4v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M15 3v4h4M9 12h6M9 16h6M9 8h2" />
    </svg>
  );
}
function IconRewind() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

// ---------- preview widgets (right panel body) ----------
function DiffPreview() {
  const lines = [
    { t: "diff", text: "crm/customers.md" },
    { t: "hunk", text: "@@ -8,6 +8,7 @@" },
    { t: "ctx",  text: "  id:    M-201" },
    { t: "ctx",  text: "  name:  Mike" },
    { t: "ctx",  text: "  phone: 0912345678" },
    { t: "add",  text: "+ source: twitter" },
    { t: "del",  text: "- notes:  added by Sarah" },
    { t: "add",  text: "+ notes:  added by AI agent" },
    { t: "ctx",  text: "  city:  NY" },
  ];
  const tone: Record<string, string> = {
    diff: "text-muted-2",
    hunk: "text-muted-2",
    ctx:  "text-foreground",
    add:  "text-emerald-700 bg-emerald-100/60",
    del:  "text-rose-700 bg-rose-100/60",
  };
  return (
    <div className="mono overflow-hidden rounded-xl border border-line-soft bg-surface text-[12.5px] leading-[1.7]">
      <div className="border-b border-line-soft bg-surface-2 px-3 py-2 text-[11px] text-muted">
        <span className="pixel text-foreground">MOCHI</span> · workspace / customers.md
      </div>
      <pre className="whitespace-pre p-3">
        {lines.map((l, i) => (
          <div key={i} className={`px-2 ${tone[l.t]}`}>{l.text}</div>
        ))}
      </pre>
    </div>
  );
}

function GitLogPreview() {
  const commits = [
    { sha: "04a501", msg: "feat(hrm): add dept HR",       who: "linh",  when: "1 hr",  head: true },
    { sha: "e1b3f5", msg: "fix(crm): correct email field", who: "marco", when: "3 hr",  head: false },
    { sha: "9b220a", msg: "chore: rename column ITEM → PRODUCT", who: "sara", when: "1 day", head: false },
    { sha: "f92c0a", msg: "init: workspace bootstrap",     who: "linh",  when: "1 day", head: false },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-line-soft bg-surface">
      <div className="flex items-center justify-between border-b border-line-soft bg-surface-2 px-3 py-2 text-[11px] text-muted">
        <span><span className="pixel text-foreground">GIT LOG</span> · workspace</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-highlight-strong" /> HEAD 04a501</span>
      </div>
      <ul className="divide-y divide-line-soft">
        {commits.map((c) => (
          <li key={c.sha} className="flex items-center gap-3 px-3 py-2.5 text-[12.5px]">
            <span className="mono w-14 truncate text-muted">{c.sha}</span>
            <span className="min-w-0 flex-1 truncate text-foreground">{c.msg}</span>
            <span className="mono hidden text-muted-2 sm:inline">{c.who}</span>
            <span className="mono text-muted-2">{c.when}</span>
            {c.head ? (
              <span className="pixel rounded-full bg-foreground px-2 py-0.5 text-[9px] text-background">HEAD</span>
            ) : (
              <button className="rounded-full border border-line-soft bg-surface px-2.5 py-0.5 text-[11px] text-foreground transition-colors hover:border-line">
                Restore
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- feature registry ----------
interface Feature {
  key: string;
  icon: ReactNode;
  label: string;
  descLine: string;
  panelTitle: string;
  panelSub: string;
  render: () => ReactNode;
}

function ConsolePreview({ script }: { script: unknown }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-soft">
      <MochiConsole customScript={script as never} heightClass="h-[300px]" />
    </div>
  );
}

interface Group {
  label: string;
  keys: string[];
}

export default function Features() {
  const { m } = useLang();

  const FEATURES: Feature[] = [
    {
      key: "chat",
      icon: <IconChat />,
      label: m.feat.items[0].title,
      descLine: m.feat.items[0].desc,
      panelTitle: m.feat.items[0].title,
      panelSub: m.feat.items[0].desc,
      render: () => <ConsolePreview script={m.scripts.chat} />,
    },
    {
      key: "template",
      icon: <IconGrid />,
      label: m.feat.items[1].title,
      descLine: m.feat.items[1].desc,
      panelTitle: m.feat.items[1].title,
      panelSub: m.feat.items[1].desc,
      render: () => <ConsolePreview script={m.scripts.template} />,
    },
    {
      key: "plain",
      icon: <IconDoc />,
      label: m.git.items[0].title,
      descLine: m.git.items[0].desc,
      panelTitle: m.git.items[0].title,
      panelSub: m.git.items[0].desc,
      render: () => <DiffPreview />,
    },
    {
      key: "undo",
      icon: <IconRewind />,
      label: m.git.items[1].title,
      descLine: m.git.items[1].desc,
      panelTitle: m.git.items[1].title,
      panelSub: m.git.items[1].desc,
      render: () => <GitLogPreview />,
    },
  ];

  const groups: Group[] = [
    { label: "AI & Templates",         keys: ["chat", "template"] },
    { label: "Version control (Git)",  keys: ["plain", "undo"] },
  ];

  const [active, setActive] = useState(FEATURES[0].key);
  const activeF = FEATURES.find((f) => f.key === active) ?? FEATURES[0];

  return (
    <section id="features" className="relative border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12">
          <p className="tech">// FEATURES</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {m.feat.title}
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
            {/* ---- left: grouped feature buttons ---- */}
            <div className="space-y-8">
              {groups.map((g) => (
                <div key={g.label}>
                  <p className="text-sm font-semibold text-foreground">{g.label}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {g.keys.map((key) => {
                      const f = FEATURES.find((x) => x.key === key)!;
                      const isActive = key === active;
                      return (
                        <button
                          key={key}
                          onClick={() => setActive(key)}
                          className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm transition-colors ${
                            isActive
                              ? "border-foreground bg-foreground text-background"
                              : "border-line-soft bg-surface text-foreground hover:border-line"
                          }`}
                        >
                          <span className={isActive ? "text-background" : "text-muted"}>
                            {f.icon}
                          </span>
                          <span className="max-w-[200px] truncate font-medium">{f.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* ---- right: preview panel ---- */}
            <div className="rounded-3xl bg-highlight/45 p-6 sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {activeF.panelTitle}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/75">
                {activeF.panelSub}
              </p>
              <div className="mt-8">{activeF.render()}</div>
              <div className="mt-6">
                <a
                  href="https://github.com/mochi-cli/mochi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-foreground/15 bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
