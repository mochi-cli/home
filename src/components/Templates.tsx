const templates = [
  { name: "CRM", desc: "Khách hàng, cơ hội bán hàng, lịch sử tương tác" },
  { name: "HRM", desc: "Nhân sự, phòng ban, chấm công, đánh giá" },
  { name: "Kho vận", desc: "Sản phẩm, tồn kho, nhập xuất theo thời gian thực" },
  { name: "Dự án", desc: "Task, tiến độ, thành viên, deadline" },
];

export default function Templates() {
  return (
    <section id="templates" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Template dựng sẵn, tùy biến khi cần
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Mỗi template đi kèm schema, quan hệ dữ liệu và bộ dữ liệu mẫu — đủ
            để agent bắt đầu làm việc ngay, và đủ đơn giản để bạn chỉnh sửa
            theo nhu cầu riêng.
          </p>
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:underline"
          >
            Xem tất cả template trên GitHub
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {templates.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-white p-5">
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
