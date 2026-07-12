type MascotPose = "wave" | "happy" | "sleepy";

interface MascotProps {
  pose?: MascotPose;
  className?: string;
  /** unique id suffix so gradients don't collide when multiple render */
  uid?: string;
}

export default function Mascot({ pose = "wave", className = "", uid = "m" }: MascotProps) {
  const body = `body-${uid}`;
  const shine = `shine-${uid}`;
  const soft = `soft-${uid}`;

  const eyes =
    pose === "sleepy" ? (
      <>
        <path d="M69 105 q9 7 18 0" stroke="#2b2622" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M113 105 q9 7 18 0" stroke="#2b2622" strokeWidth="4" strokeLinecap="round" fill="none" />
      </>
    ) : pose === "happy" ? (
      <>
        <path d="M67 110 q11 -13 22 0" stroke="#2b2622" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M111 110 q11 -13 22 0" stroke="#2b2622" strokeWidth="4" strokeLinecap="round" fill="none" />
      </>
    ) : (
      <g style={{ transformOrigin: "center", animation: "blink 5.5s infinite" }}>
        <ellipse cx="78" cy="106" rx="6" ry="6.5" fill="#2b2622" />
        <ellipse cx="122" cy="106" rx="6" ry="6.5" fill="#2b2622" />
        <circle cx="80.5" cy="103" r="1.9" fill="#fff" />
        <circle cx="124.5" cy="103" r="1.9" fill="#fff" />
      </g>
    );

  const mouth =
    pose === "sleepy" ? (
      <path d="M93 123 q7 5 14 0" stroke="#2b2622" strokeWidth="3.4" strokeLinecap="round" fill="none" />
    ) : (
      <path d="M87 120 q13 13 26 0" stroke="#2b2622" strokeWidth="4" strokeLinecap="round" fill="none" />
    );

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Mochi, trợ lý AI hình chú bánh mochi tròn trịa"
    >
      <defs>
        <radialGradient id={body} cx="42%" cy="34%" r="72%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="62%" stopColor="#fdfbf7" />
          <stop offset="100%" stopColor="#f3ede2" />
        </radialGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={soft} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#2b2622" floodOpacity="0.10" />
        </filter>
      </defs>

      <ellipse cx="100" cy="182" rx="50" ry="8" fill="#2b2622" opacity="0.07" />

      {/* ears */}
      <ellipse cx="64" cy="50" rx="14" ry="23" fill="url(#body)" stroke="#ece4d8" strokeWidth="1.5" transform="rotate(-16 64 50)" />
      <ellipse cx="136" cy="50" rx="14" ry="23" fill="url(#body)" stroke="#ece4d8" strokeWidth="1.5" transform="rotate(16 136 50)" />
      <ellipse cx="64" cy="52" rx="6" ry="12" fill="#ffd5df" opacity="0.7" transform="rotate(-16 64 52)" />
      <ellipse cx="136" cy="52" rx="6" ry="12" fill="#ffd5df" opacity="0.7" transform="rotate(16 136 52)" />

      {/* sprout */}
      <g transform="translate(100 28)">
        <path d="M0 15 C -11 6, -11 -9, 0 -15 C 11 -9, 11 6, 0 15 Z" fill="#8fd9b6" />
        <path d="M0 13 L0 -11" stroke="#5aa982" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* right arm */}
      <ellipse cx="49" cy="138" rx="12" ry="17" fill="url(#body)" stroke="#ece4d8" strokeWidth="1.5" transform="rotate(-22 49 138)" filter={`url(#${soft})`} />

      {/* left arm (waves) */}
      {pose === "wave" ? (
        <g className="animate-wave">
          <ellipse cx="156" cy="112" rx="12" ry="19" fill="url(#body)" stroke="#ece4d8" strokeWidth="1.5" />
        </g>
      ) : (
        <ellipse cx="151" cy="138" rx="12" ry="17" fill="url(#body)" stroke="#ece4d8" strokeWidth="1.5" transform="rotate(22 151 138)" filter={`url(#${soft})`} />
      )}

      {/* body */}
      <ellipse cx="100" cy="116" rx="66" ry="61" fill="url(#body)" stroke="#ece4d8" strokeWidth="2" filter={`url(#${soft})`} />
      {/* top shine */}
      <ellipse cx="86" cy="78" rx="34" ry="20" fill="url(#shine)" />

      {/* cheeks */}
      <ellipse cx="62" cy="123" rx="11" ry="9" fill="#ffb3c6" opacity="0.75" />
      <ellipse cx="138" cy="123" rx="11" ry="9" fill="#ffb3c6" opacity="0.75" />

      {eyes}
      {mouth}

      {/* sparkle */}
      <g opacity="0.85">
        <path d="M150 92 l2.4 5.4 5.4 2.4 -5.4 2.4 -2.4 5.4 -2.4 -5.4 -5.4 -2.4 5.4 -2.4 Z" fill="#ffd27a" />
      </g>
    </svg>
  );
}
