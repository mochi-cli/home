"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

// ---------- inline icons (monochrome, currentColor) ----------
function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 20c.6-3.4 3.3-5.4 6.2-5.4S14.6 16.6 15.2 20" />
      <circle cx="17" cy="7.5" r="2.6" />
      <path d="M15.5 14.7c2.6.4 4.5 2.2 5 5.3" />
    </svg>
  );
}
function IconBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="12" cy="10" r="2.6" />
      <path d="M7.5 17.4c.9-2.2 2.6-3.4 4.5-3.4s3.6 1.2 4.5 3.4" />
    </svg>
  );
}
function IconBox() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 8l8-4 8 4-8 4-8-4z" />
      <path d="M4 8v8l8 4M20 8v8l-8 4M12 12v8" />
    </svg>
  );
}
function IconCheckList() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 9.5l1.6 1.6L13 8" />
      <path d="M8 15l1.6 1.6L13 13.5" />
      <path d="M15.5 10.5h2M15.5 16h2" />
    </svg>
  );
}

// ---------- pill tone helpers ----------
type Tone = "mint" | "sky" | "rose" | "muted" | "ink";
const toneCls: Record<Tone, string> = {
  mint:  "bg-highlight text-foreground",
  sky:   "bg-[#dbeafe] text-[#1e40af]",
  rose:  "bg-[#fee2e2] text-[#9f1239]",
  muted: "bg-surface-2 text-muted",
  ink:   "bg-foreground text-background",
};
function Pill({ tone = "muted", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${toneCls[tone]}`}>
      {children}
    </span>
  );
}

// ---------- per-template mock data ----------
type Cell = string | { label: string; tone: Tone };
interface TemplateSpec {
  key: string;
  label: string;
  desc: string;
  icon: ReactNode;
  workspace: string;
  view: string;
  cols: string[];
  rows: Cell[][];
}

const TEMPLATES: TemplateSpec[] = [
  {
    key: "crm",
    label: "CRM",
    desc: "Centralize customer interactions to close more deals",
    icon: <IconUsers />,
    workspace: "Sales CRM",
    view: "Opportunities / Default",
    cols: ["Deal", "Stage", "Contact", "Value"],
    rows: [
      ["VisionQuest RFQ",       { label: "Discovery",   tone: "sky"  }, "James Cooper",    "$14,300"],
      ["Acetube inquiry",       { label: "Negotiation", tone: "mint" }, "Charlotte King",  "$48,200"],
      ["LKS retainer",          { label: "Discovery",   tone: "sky"  }, "Benjamin Taylor", "$6,500"],
      ["Timbershadow expansion",{ label: "Closed won",  tone: "ink"  }, "Casey Park",      "$6,154"],
    ],
  },
  {
    key: "hrm",
    label: "HRM",
    desc: "Manage people, roles, and attendance in one workspace",
    icon: <IconBadge />,
    workspace: "People ops",
    view: "Employees / Active",
    cols: ["Name", "Role", "Team", "Joined"],
    rows: [
      ["Linh Nguyen",   "Senior engineer",     { label: "Platform", tone: "mint" }, "2024-03-01"],
      ["Marco Reyes",   "Product designer",    { label: "Design",   tone: "sky"  }, "2024-11-20"],
      ["Sara Hoffmann", "Ops manager",         { label: "Ops",      tone: "muted" }, "2023-08-14"],
      ["Kenji Tanaka",  "Data analyst",        { label: "Data",     tone: "rose" }, "2025-01-09"],
    ],
  },
  {
    key: "inventory",
    label: "Inventory",
    desc: "Track stock, warehouses, and in/out flow in real time",
    icon: <IconBox />,
    workspace: "Warehouse",
    view: "Products / Low stock",
    cols: ["SKU", "Product", "Stock", "Status"],
    rows: [
      ["SKU-001", "Ceramic mug — matte white",     "42",  { label: "In stock",    tone: "mint" }],
      ["SKU-014", "Notebook A5 — dot grid",        "8",   { label: "Low stock",   tone: "rose" }],
      ["SKU-027", "Cable tidy strap — pack of 5",  "0",   { label: "Backorder",   tone: "ink"  }],
      ["SKU-039", "Coffee dripper V60",            "126", { label: "In stock",    tone: "mint" }],
    ],
  },
  {
    key: "project",
    label: "Projects",
    desc: "Coordinate tasks and ship on time without pinging",
    icon: <IconCheckList />,
    workspace: "Delivery",
    view: "Sprint 12 / Kanban",
    cols: ["Task", "Owner", "Deadline", "Status"],
    rows: [
      ["Migrate auth to MCP",       "Linh",  "Tue 22",  { label: "In review",    tone: "mint" }],
      ["Draft billing schema",      "Marco", "Wed 23",  { label: "In progress",  tone: "sky"  }],
      ["Investigate p95 spike",     "Kenji", "Fri 25",  { label: "Blocked",      tone: "rose" }],
      ["Ship template gallery",     "Sara",  "Mon 28",  { label: "Todo",         tone: "muted" }],
    ],
  },
];

function renderCell(cell: Cell) {
  if (typeof cell === "string") return <span className="text-foreground">{cell}</span>;
  return <Pill tone={cell.tone}>{cell.label}</Pill>;
}

export default function Templates() {
  const { m } = useLang();
  const [active, setActive] = useState(TEMPLATES[0].key);
  const activeTpl = TEMPLATES.find((t) => t.key === active) ?? TEMPLATES[0];

  return (
    <section id="templates" className="relative border-b border-line-soft bg-surface">
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

        <Reveal>
          <div className="rounded-3xl border border-line-soft bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
            {/* Tab row */}
            <div
              role="tablist"
              aria-label="Templates"
              className="grid gap-4 border-b border-line-soft pb-2 sm:grid-cols-2 lg:grid-cols-4"
            >
              {TEMPLATES.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(t.key)}
                    className={`group relative flex flex-col items-start gap-2 rounded-xl p-4 text-left transition-colors ${
                      isActive ? "bg-surface-2/60" : "hover:bg-surface-2/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                          isActive
                            ? "border-foreground bg-foreground text-background"
                            : "border-line-soft bg-surface text-foreground"
                        }`}
                      >
                        {t.icon}
                      </span>
                      <span className="text-base font-semibold text-foreground">
                        {t.label}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-muted">{t.desc}</p>
                    <span
                      className={`absolute inset-x-4 -bottom-[10px] h-[3px] rounded-full transition-all ${
                        isActive ? "bg-highlight-strong opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>

            {/* Preview */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-line-soft bg-surface-2/40">
              {/* Toolbar */}
              <div className="flex items-center gap-3 border-b border-line-soft bg-surface px-4 py-2.5 text-xs text-muted">
                <span className="flex h-6 items-center gap-1.5 rounded-md bg-surface-2 px-2 font-medium text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-highlight-strong" />
                  {activeTpl.workspace}
                </span>
                <span className="text-muted-2">/</span>
                <span>{activeTpl.view}</span>
                <span className="ml-auto flex items-center gap-2 text-[11px] text-muted-2">
                  <span className="hidden sm:inline">Fields · Filter · Group · Sort</span>
                  <span className="pixel rounded-full border border-line-soft bg-surface px-2 py-0.5 text-[9px]">
                    MOCHI
                  </span>
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <thead>
                    <tr className="text-left text-[11px] uppercase tracking-wider text-muted-2">
                      {activeTpl.cols.map((c) => (
                        <th key={c} className="border-b border-line-soft px-4 py-2.5 font-medium">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {activeTpl.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-surface-2/40" : "bg-surface"}>
                        {row.map((cell, j) => (
                          <td key={j} className="border-b border-line-soft px-4 py-3 text-[13px]">
                            {renderCell(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
