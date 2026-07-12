import type { ReactNode } from "react";

/** Four corner brackets wrapping content — the signature HUD frame. */
export function Frame({
  children,
  className = "",
  size = 14,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  const c = "absolute h-[var(--s)] w-[var(--s)] border-foreground";
  const style = { "--s": `${size}px` } as React.CSSProperties;
  return (
    <div className={`relative ${className}`}>
      <span className={`${c} left-0 top-0 border-l border-t`} style={style} />
      <span className={`${c} right-0 top-0 border-r border-t`} style={style} />
      <span className={`${c} bottom-0 left-0 border-b border-l`} style={style} />
      <span className={`${c} bottom-0 right-0 border-b border-r`} style={style} />
      {children}
    </div>
  );
}

/** Small plus/registration crosshair mark. */
export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Boxed X registration mark. */
export function RegMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Pixel-art heart (filled or empty) — arcade lives. */
export function PixelHeart({ filled = true, className = "" }: { filled?: boolean; className?: string }) {
  // 8px grid heart
  const cells = [
    [1, 0], [2, 0], [5, 0], [6, 0],
    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1],
    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
    [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
    [2, 4], [3, 4], [4, 4], [5, 4],
    [3, 5], [4, 5],
  ];
  return (
    <svg viewBox="0 0 8 6" className={className} aria-hidden="true" shapeRendering="crispEdges">
      {filled ? (
        cells.map(([x, y], i) => <rect key={i} x={x} y={y} width="1" height="1" fill="currentColor" />)
      ) : (
        // outline-only heart
        <>
          {cells
            .filter(([x, y]) => {
              const has = (a: number, b: number) => cells.some(([cx, cy]) => cx === a && cy === b);
              return !(has(x - 1, y) && has(x + 1, y) && has(x, y - 1) && has(x, y + 1));
            })
            .map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="1" height="1" fill="currentColor" />
            ))}
        </>
      )}
    </svg>
  );
}

/** Concentric dashed rings — the targeting reticle behind the mascot. */
export function DashedRings({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <circle cx="200" cy="200" r="196" strokeWidth="1" strokeDasharray="2 6" className="animate-spin-slow" style={{ transformOrigin: "center" }} />
      <circle cx="200" cy="200" r="160" strokeWidth="1" strokeDasharray="10 8" className="animate-spin-rev" style={{ transformOrigin: "center" }} />
      <circle cx="200" cy="200" r="120" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M200 8v40M200 352v40M8 200h40M352 200h40" strokeWidth="1" />
    </svg>
  );
}

/** A row of tick marks / measurement rule. */
export function TickBar({ className = "", count = 40 }: { className?: string; count?: number }) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="w-px bg-foreground"
          style={{ height: i % 5 === 0 ? "9px" : "4px", opacity: i % 5 === 0 ? 0.7 : 0.35 }}
        />
      ))}
    </div>
  );
}

/** Decorative dotted grid square (poster corner blocks). */
export function DotBlock({ className = "" }: { className?: string }) {
  return <div className={`dotgrid-strong ${className}`} aria-hidden="true" />;
}

/** Tech caption block — the fake "lorem ipsum" technical readout. */
export function TechCaption({
  lines = ["MOCHIKIT.SYS // v1", "node:sqlite · MCP tools", "workspace bundle → git"],
  className = "",
}: {
  lines?: string[];
  className?: string;
}) {
  return (
    <div className={`mono text-[9px] leading-[1.5] tracking-wide text-muted-2 ${className}`} aria-hidden="true">
      {lines.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  );
}
