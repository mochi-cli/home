const lines: { prompt?: boolean; text: string; muted?: boolean }[] = [
  { prompt: true, text: "npm install -g mochikit" },
  { prompt: true, text: "mochikit init --template crm" },
  { text: "✓ Workspace 'crm' đã sẵn sàng với schema & dữ liệu mẫu", muted: true },
  { prompt: true, text: "mochikit deploy git --out ./mochikit-git" },
  { text: "✓ Đã xuất bundle JSON/Markdown vào nhánh workspace/crm", muted: true },
  { text: "" },
  { text: "Bạn: Hey Mochi, cho tôi xem khách hàng mới tuần này" },
  { text: "Mochi: Tìm thấy 12 khách hàng mới trong workspace 'crm' 🍡", muted: true },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ba lệnh để có một workspace agent-native
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Cài đặt, khởi tạo template, rồi để agent của bạn tự trò chuyện với
            dữ liệu.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-border bg-[#1c1a17] shadow-xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-white/40">mochi — zsh</span>
          </div>
          <div className="space-y-2 px-5 py-6 font-mono text-[13px] leading-relaxed">
            {lines.map((line, i) => (
              <div key={i} className={line.muted ? "text-white/45" : "text-white/90"}>
                {line.prompt && <span className="text-accent-mint">$ </span>}
                {line.text}
                {i === lines.length - 1 && (
                  <span className="animate-cursor ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-white/70" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
