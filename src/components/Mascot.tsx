type MascotPose = "wave" | "happy" | "sleepy";

interface MascotProps {
  pose?: MascotPose;
  className?: string;
  uid?: string;
}

/**
 * Mochi — a monochrome cat-ghost blob in a retro-HUD style.
 * Grayscale gradient body, cat ears, scalloped ghost bottom,
 * rounded-rectangle eyes and a tiny triangle nose.
 */
export default function Mascot({ pose = "wave", className = "", uid = "m" }: MascotProps) {
  const grad = `g-${uid}`;
  const glow = `gl-${uid}`;

  const eyeFill = "#f4f4f2";

  const eyes =
    pose === "sleepy" ? (
      <>
        <rect x="72" y="104" width="16" height="4" rx="2" fill={eyeFill} />
        <rect x="112" y="104" width="16" height="4" rx="2" fill={eyeFill} />
      </>
    ) : (
      <g style={{ transformOrigin: "center", animation: pose === "wave" ? "blinkeye 5s infinite" : "none" }}>
        <rect x="74" y="92" width="13" height="28" rx="6.5" fill={eyeFill} />
        <rect x="113" y="92" width="13" height="28" rx="6.5" fill={eyeFill} />
        {pose === "happy" && (
          <>
            <rect x="74" y="92" width="13" height="9" fill={`url(#${grad})`} />
            <rect x="113" y="92" width="13" height="9" fill={`url(#${grad})`} />
          </>
        )}
      </g>
    );

  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="Mochi, mascot mèo-mochi phong cách HUD đơn sắc"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="45%" stopColor="#6f6f6f" />
          <stop offset="100%" stopColor="#e4e4e1" />
        </linearGradient>
        <radialGradient id={glow} cx="50%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ears */}
      <path d="M50 66 L58 30 L84 56 Z" fill="#3a3a3a" />
      <path d="M150 66 L142 30 L116 56 Z" fill="#3a3a3a" />

      {/* body: domed top, scalloped ghost bottom */}
      <path
        d="M38 104
           C38 60 66 40 100 40
           C134 40 162 60 162 104
           L162 170
           q-12 20 -24 0
           q-12 20 -24 0
           q-12 20 -24 0
           q-12 20 -24 0
           q-12 20 -24 0
           Z"
        fill={`url(#${grad})`}
        stroke="#2b2b2b"
        strokeWidth="1.5"
      />
      {/* top light */}
      <ellipse cx="100" cy="86" rx="58" ry="46" fill={`url(#${glow})`} />

      {eyes}

      {/* nose */}
      <path d="M100 118 l5 8 -10 0 Z" fill="#f4f4f2" />

      {/* waving hand (little nub) */}
      {pose === "wave" && (
        <g className="origin-[160px_130px]" style={{ transformOrigin: "160px 130px", animation: "float 2.6s ease-in-out infinite" }}>
          <circle cx="166" cy="120" r="10" fill="#5a5a5a" stroke="#2b2b2b" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}
