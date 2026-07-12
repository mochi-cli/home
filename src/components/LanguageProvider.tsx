"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, messages, type LocaleCode, type Messages } from "@/lib/i18n";

const STORAGE_KEY = "mochi-lang";

interface LangValue {
  locale: LocaleCode;
  setLocale: (l: LocaleCode) => void;
  m: Messages;
}

const LangContext = createContext<LangValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  m: messages[DEFAULT_LOCALE],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(DEFAULT_LOCALE);

  // Hydrate the saved locale from localStorage on mount. We intentionally start
  // from DEFAULT_LOCALE on the server + first client render to avoid a hydration
  // mismatch, then sync to the stored preference.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
    if (saved && saved in messages && saved !== DEFAULT_LOCALE) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from external store (localStorage)
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (l: LocaleCode) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ locale, setLocale, m: messages[locale] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
