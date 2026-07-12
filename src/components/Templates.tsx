import Reveal from "./Reveal";

const templates = [
  { name: "CRM", desc: "Khách hàng, cơ hội bán hàng, lịch sử tương tác", icon: "◒" },
  { name: "HRM", desc: "Nhân sự, phòng ban, chấm công, đánh giá", icon: "◔" },
  { name: "Kho vận", desc: "Sản phẩm, tồn kho, nhập xuất thời gian thực", icon: "◑" },
  { name: "Dự án", desc: "Task, tiến độ, thành viên, deadline", icon: "◕" },
];

export default function Templates() {
  return (
    <section id="templates" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Template</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Dựng sẵn, tùy biến khi cần
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Mỗi template đi kèm schema, quan hệ dữ liệu và bộ dữ liệu mẫu — đủ để
            agent bắt đầu ngay, đủ đơn giản để bạn chỉnh theo nhu cầu riêng.
          </p>
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Xem tất cả template
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {templates.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="card h-full p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-lg text-accent">
                  {t.icon}
                </div>
                <p className="mt-4 text-sm font-semibold tracking-tight">{t.name}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
