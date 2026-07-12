const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </svg>
    ),
    title: "Tạo template chỉ trong một lệnh",
    description:
      "Khởi tạo workspace với template dựng sẵn cho CRM, HRM, quản lý kho hay quản lý dự án — có schema, dữ liệu mẫu và sẵn sàng dùng ngay.",
    tint: "bg-accent-soft",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 9h8M8 13h5" strokeLinecap="round" />
        <path d="M4 5h16v11H9l-4 4V5Z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Tương tác tự nhiên với AI agent",
    description:
      "Nói chuyện trực tiếp với Claude, Codex và OpenCode. Mochi hiểu ngữ cảnh workspace, gợi ý bước tiếp theo và thao tác dữ liệu thay bạn.",
    tint: "bg-accent-mint-soft",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
        <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Commit dữ liệu an toàn lên Git",
    description:
      "Không bao giờ commit file SQLite sống. Mochi xuất dữ liệu thành bundle JSON/Markdown dễ review, diff theo dòng và làm việc theo nhánh.",
    tint: "bg-accent-soft",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Lịch sử ghi & rollback",
    description:
      "Mọi thay đổi đều được theo dõi rõ ràng. Xem lại lịch sử thao tác của agent và hoàn tác về trạng thái trước đó bất kỳ lúc nào.",
    tint: "bg-accent-mint-soft",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Mọi thứ agent AI cần để làm việc với dữ liệu
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Không cần cài đặt SQLite riêng, không cần viết SQL tay. Mochi lo phần
          nền tảng, bạn chỉ cần trò chuyện.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-3xl border border-border bg-white p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(36,28,21,0.15)]"
          >
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${feature.tint} text-foreground`}>
              {feature.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
