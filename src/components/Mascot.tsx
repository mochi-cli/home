type MascotPose = "wave" | "happy" | "sleepy";

interface MascotProps {
  pose?: MascotPose;
  className?: string;
}

export default function Mascot({ pose = "wave", className = "" }: MascotProps) {
  const eyes =
    pose === "sleepy" ? (
      <>
        <path d="M70 104 q8 6 16 0" stroke="#241C15" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M114 104 q8 6 16 0" stroke="#241C15" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </>
    ) : pose === "happy" ? (
      <>
        <path d="M68 108 q10 -12 20 0" stroke="#241C15" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M112 108 q10 -12 20 0" stroke="#241C15" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </>
    ) : (
      <>
        <circle cx="78" cy="105" r="5.5" fill="#241C15" />
        <circle cx="122" cy="105" r="5.5" fill="#241C15" />
        <circle cx="80" cy="102.5" r="1.6" fill="#fff" />
        <circle cx="124" cy="102.5" r="1.6" fill="#fff" />
      </>
    );

  const mouth =
    pose === "sleepy" ? (
      <path d="M92 122 q8 5 16 0" stroke="#241C15" strokeWidth="3" strokeLinecap="round" fill="none" />
    ) : (
      <path d="M88 118 q12 12 24 0" stroke="#241C15" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    );

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Mochi, trợ lý AI hình chú bánh mochi tròn trịa"
    >
      <ellipse cx="100" cy="178" rx="52" ry="10" fill="#241C15" opacity="0.06" />

      {/* ears */}
      <ellipse cx="63" cy="52" rx="15" ry="24" fill="#FFFCF7" stroke="#ECE4D8" strokeWidth="2" transform="rotate(-18 63 52)" />
      <ellipse cx="137" cy="52" rx="15" ry="24" fill="#FFFCF7" stroke="#ECE4D8" strokeWidth="2" transform="rotate(18 137 52)" />

      {/* sprout */}
      <g transform="translate(100 30)">
        <path d="M0 14 C -10 6, -10 -8, 0 -14 C 10 -8, 10 6, 0 14 Z" fill="#8FD9B6" opacity="0.9" />
        <path d="M0 12 L0 -10" stroke="#5FAE84" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* left arm */}
      {pose === "wave" ? (
        <g className="animate-wave">
          <ellipse cx="156" cy="118" rx="12" ry="20" fill="#FFFCF7" stroke="#ECE4D8" strokeWidth="2" />
        </g>
      ) : (
        <ellipse cx="150" cy="140" rx="12" ry="18" fill="#FFFCF7" stroke="#ECE4D8" strokeWidth="2" transform="rotate(20 150 140)" />
      )}

      {/* right arm */}
      <ellipse cx="50" cy="140" rx="12" ry="18" fill="#FFFCF7" stroke="#ECE4D8" strokeWidth="2" transform="rotate(-20 50 140)" />

      {/* body */}
      <ellipse cx="100" cy="115" rx="68" ry="63" fill="#FFFCF7" stroke="#ECE4D8" strokeWidth="2.5" />
      <ellipse cx="80" cy="80" rx="26" ry="16" fill="#ffffff" opacity="0.5" />

      {/* cheeks */}
      <circle cx="63" cy="122" r="11" fill="#FFC9D6" opacity="0.8" />
      <circle cx="137" cy="122" r="11" fill="#FFC9D6" opacity="0.8" />

      {eyes}
      {mouth}
    </svg>
  );
}
