"use client";

import React, { createContext, useContext, useState } from "react";

interface EngineContextType {
  selectedEngines: string[];
  toggleEngine: (engine: string) => void;
  kitValue: string;
}

const EngineContext = createContext<EngineContextType | undefined>(undefined);

export const ALL_ENGINES = [
  "CLAUDE",
  "CODEX",
  "OPENCODE",
  "HERMES-AGENT",
  "OPENCLAW",
] as const;

export function EngineProvider({ children }: { children: React.ReactNode }) {
  const [selectedEngines, setSelectedEngines] = useState<string[]>([...ALL_ENGINES]);

  const toggleEngine = (engine: string) => {
    setSelectedEngines((prev) =>
      prev.includes(engine)
        ? prev.filter((e) => e !== engine)
        : [...prev, engine]
    );
  };

  // Kit value: single-engine picks its own kit slug; anything else = "all".
  const kitValue =
    selectedEngines.length === 1
      ? selectedEngines[0].toLowerCase()
      : "all";

  return (
    <EngineContext.Provider value={{ selectedEngines, toggleEngine, kitValue }}>
      {children}
    </EngineContext.Provider>
  );
}

export function useEngine() {
  const context = useContext(EngineContext);
  if (context === undefined) {
    throw new Error("useEngine must be used within an EngineProvider");
  }
  return context;
}
