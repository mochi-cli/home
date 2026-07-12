type MascotPose = "wave" | "happy" | "sleepy";

interface MascotProps {
  /** kept for API compatibility; the canonical face is always rendered */
  pose?: MascotPose;
  className?: string;
  uid?: string;
  /** true while "thinking" — eyes squint slightly */
  thinking?: boolean;
}

/**
 * Mochi — a monochrome cat-ghost blob, matched to the reference art:
 * rounded-square head with cat ears, a top→bottom grayscale gradient,
 * two large rounded-rectangle eyes, a small triangle nose, and a
 * scalloped ghost skirt at the bottom.
 */
export default function Mascot({ className = "", uid = "m", thinking = false }: MascotProps) {
  const grad = `g-${uid}`;
  const hl = `hl-${uid}`;

  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="Mochi, mascot mèo-mochi phong cách HUD đơn sắc"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="42%" stopColor="#6d6d6d" />
          <stop offset="100%" stopColor="#ededea" />
        </linearGradient>
        <radialGradient id={hl} cx="42%" cy="30%" r="58%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ears */}
      <path d="M58 64 L66 38 L88 60 Z" fill="#4a4a4a" />
      <path d="M142 64 L134 38 L112 60 Z" fill="#4a4a4a" />

      {/* body: rounded-square head, scalloped ghost bottom */}
      <path
        d="M40 112
           C40 74 58 52 100 52
           C142 52 160 74 160 112
           L160 168
           q-15 20 -30 0
           q-15 20 -30 0
           q-15 20 -30 0
           q-15 20 -30 0
           Z"
        fill={`url(#${grad})`}
        stroke="#3a3a3a"
        strokeWidth="1.5"
      />
      <ellipse cx="90" cy="86" rx="46" ry="34" fill={`url(#${hl})`} />

      {/* eyes + nose */}
      <g style={{ transformOrigin: "100px 104px", animation: "blinkeye 5s infinite" }}>
        {thinking ? (
          <>
            <rect x="74" y="100" width="15" height="9" rx="4.5" fill="#f0f0ee" />
            <rect x="111" y="100" width="15" height="9" rx="4.5" fill="#f0f0ee" />
          </>
        ) : (
          <>
            <rect x="74" y="88" width="15" height="32" rx="7.5" fill="#f0f0ee" />
            <rect x="111" y="88" width="15" height="32" rx="7.5" fill="#f0f0ee" />
          </>
        )}
      </g>
      <path d="M94 122 L106 122 L100 130 Z" fill="#f0f0ee" />
    </svg>
  );
}
