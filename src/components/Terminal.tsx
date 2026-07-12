const lines: { kind: "cmd" | "out" | "you" | "mochi" | "blank"; text: string }[] = [
  { kind: "cmd", text: "npm i -g mochikit" },
  { kind: "cmd", text: "mochikit init --template crm" },
  { kind: "out", text: "✓ Workspace 'crm' sẵn sàng — schema + dữ liệu mẫu" },
  { kind: "cmd", text: "mochikit deploy git --out ./mochikit-git" },
  { kind: "out", text: "✓ Đã xuất bundle JSON/Markdown → nhánh workspace/crm" },
  { kind: "blank", text: "" },
  { kind: "you", text: "Hey Mochi, cho tôi xem khách hàng mới tuần này" },
  { kind: "mochi", text: "Tìm thấy 12 khách hàng mới trong workspace 'crm' 🍡" },
];

export default function Terminal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-[#141312] shadow-[0_30px_80px_-40px_rgba(11,10,9,0.6)]">
      <div className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/40">mochi — zsh</span>
      </div>
      <div className="space-y-2.5 px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((line, i) => {
          if (line.kind === "blank") return <div key={i} className="h-1.5" />;
          if (line.kind === "cmd")
            return (
              <div key={i} className="text-white/90">
                <span className="text-emerald-400">$</span> {line.text}
              </div>
            );
          if (line.kind === "out")
            return (
              <div key={i} className="text-white/40">
                {line.text}
              </div>
            );
          if (line.kind === "you")
            return (
              <div key={i} className="text-white/80">
                <span className="text-sky-400">you</span>
                <span className="text-white/30"> › </span>
                {line.text}
              </div>
            );
          return (
            <div key={i} className="text-white/90">
              <span className="text-pink-400">mochi</span>
              <span className="text-white/30"> › </span>
              {line.text}
              <span className="animate-cursor ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-white/70 align-middle" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
