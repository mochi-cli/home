"use client";

import { useState } from "react";
import { locales } from "@/lib/i18n";
import { useLang } from "./LanguageProvider";

export default function LangSwitcher() {
  const { locale, setLocale } = useLang();
  const [open, setOpen] = useState(false);
  const current = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="pixel flex h-9 items-center gap-1.5 border border-line bg-surface px-2.5 text-[9px] text-foreground transition-colors hover:bg-surface-2"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <circle cx="8" cy="8" r="6.5" />
          <path d="M1.5 8h13M8 1.5c2 2 2 11 0 13M8 1.5c-2 2-2 11 0 13" />
        </svg>
        {current.short}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close language menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />
          <ul
            role="listbox"
            className="absolute right-0 z-50 mt-1.5 w-40 border border-line bg-surface shadow-[4px_4px_0_0_var(--line)]"
          >
            {locales.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === locale}
                  onClick={() => {
                    setLocale(l.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-[13px] transition-colors hover:bg-surface-2 ${
                    l.code === locale ? "text-foreground" : "text-muted"
                  }`}
                >
                  <span>{l.label}</span>
                  <span className="pixel text-[8px] text-muted-2">{l.short}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
