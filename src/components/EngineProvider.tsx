"use client";

import React, { createContext, useContext, useState } from "react";

interface EngineContextType {
  selectedEngines: string[];
  toggleEngine: (engine: string) => void;
  kitValue: string;
}

const EngineContext = createContext<EngineContextType | undefined>(undefined);

export function EngineProvider({ children }: { children: React.ReactNode }) {
  const [selectedEngines, setSelectedEngines] = useState<string[]>(["CLAUDE", "CODEX", "OPENCODE"]);

  const toggleEngine = (engine: string) => {
    setSelectedEngines((prev) => 
      prev.includes(engine) 
        ? prev.filter((e) => e !== engine)
        : [...prev, engine]
    );
  };

  let kitValue = "all";
  if (selectedEngines.length === 1) {
    kitValue = selectedEngines[0].toLowerCase();
  } else if (selectedEngines.length === 2) {
    kitValue = "both";
  } else if (selectedEngines.length === 3 || selectedEngines.length === 0) {
    kitValue = "all";
  }

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
