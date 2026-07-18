export interface Tone {
  bg: string;
  fg: string;
  dot: string;
}

// Soft-pastel / strong-foreground pairs — reused anywhere the UI needs a
// splash of color instead of plain black/white (engine chips, step numbers,
// template tabs, stat bars, branch badges).
export const TONES: Tone[] = [
  { bg: "#d1fbe8", fg: "#047857", dot: "#10b981" }, // mint
  { bg: "#dbeafe", fg: "#1d4ed8", dot: "#3b82f6" }, // blue
  { bg: "#ede9fe", fg: "#6d28d9", dot: "#8b5cf6" }, // purple
  { bg: "#ffedd5", fg: "#c2410c", dot: "#f97316" }, // orange
  { bg: "#fce7f3", fg: "#be185d", dot: "#ec4899" }, // pink
];

export function toneAt(i: number): Tone {
  return TONES[i % TONES.length];
}
