import Reveal from "./Reveal";

function ChatVisual() {
  return (
    <div className="mt-6 space-y-2.5">
      <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md border border-border bg-surface px-3.5 py-2 text-[13px] text-foreground">
        Thêm khách hàng “Acme” vào workspace crm
      </div>
      <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md accent-gradient px-3.5 py-2 text-[13px] text-white shadow-sm">
        Đã tạo bản ghi #A-102 · Acme Inc 🍡
      </div>
      <div className="flex items-center gap-1.5 pl-1 pt-0.5 text-muted-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-2" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-2 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-2 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

function TemplateVisual() {
  const t = ["CRM", "HRM", "Kho", "Dự án"];
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {t.map((x, i) => (
        <span
          key={x}
          className={`rounded-lg border px-2.5 py-1 font-mono text-[12px] ${
            i === 0
              ? "border-transparent accent-gradient text-white"
              : "border-border bg-surface text-muted"
          }`}
        >
          {x}
        </span>
      ))}
    </div>
  );
}

function GitVisual() {
  return (
    <div className="mt-6 font-mono text-[12px] leading-relaxed">
      <div className="text-muted-2">workspace/crm</div>
      <div className="mt-1 rounded-md border border-border bg-surface px-2.5 py-1.5">
        <span className="text-emerald-600">+ </span>records/a-102.json
      </div>
      <div className="mt-1 rounded-md border border-border bg-surface px-2.5 py-1.5">
        <span className="text-emerald-600">+ </span>records/a-103.md
      </div>
    </div>
  );
}

function HistoryVisual() {
  const rows = [
    { t: "patchRecord", d: "cập nhật #A-102", ok: true },
    { t: "createProfile", d: "workspace inventory", ok: true },
    { t: "rollback", d: "về commit trước đó", ok: false },
  ];
  return (
    <div className="mt-6 space-y-2">
      {rows.map((r) => (
        <div
          key={r.t}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${r.ok ? "bg-emerald-500" : "bg-accent"}`}
          />
          <span className="font-mono text-[12px] text-foreground">{r.t}</span>
          <span className="text-[12px] text-muted-2">{r.d}</span>
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    span: "lg:col-span-3",
    eyebrow: "01 · Agent",
    title: "Tương tác tự nhiên với Claude, Codex & OpenCode",
    desc: "Nói chuyện trực tiếp bằng ngôn ngữ tự nhiên. Mochi hiểu ngữ cảnh workspace và thao tác dữ liệu thay bạn qua các tool có kiểu.",
    visual: <ChatVisual />,
  },
  {
    span: "lg:col-span-2",
    eyebrow: "02 · Template",
    title: "Tạo template trong một lệnh",
    desc: "Schema dựng sẵn cho CRM, HRM, kho vận, dự án — kèm dữ liệu mẫu.",
    visual: <TemplateVisual />,
  },
  {
    span: "lg:col-span-2",
    eyebrow: "03 · Git",
    title: "Commit dữ liệu an toàn lên Git",
    desc: "Không commit file SQLite sống. Xuất bundle JSON/Markdown dễ diff, theo nhánh.",
    visual: <GitVisual />,
  },
  {
    span: "lg:col-span-3",
    eyebrow: "04 · Kiểm soát",
    title: "Lịch sử ghi & rollback bất kỳ lúc nào",
    desc: "Mọi thay đổi của agent đều được theo dõi. Xem lại và hoàn tác về trạng thái trước đó chỉ với một lệnh.",
    visual: <HistoryVisual />,
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Tính năng</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Mọi thứ agent cần để làm việc với dữ liệu
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Không cần cài SQLite riêng, không viết SQL tay. Mochi lo phần nền tảng.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-5">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 80} className={f.span}>
            <div className="card flex h-full flex-col p-7">
              <p className="eyebrow">{f.eyebrow}</p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              <div className="mt-auto">{f.visual}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
