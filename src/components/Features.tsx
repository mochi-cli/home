import Reveal from "./Reveal";
import { Frame } from "./hud";

function ChatVisual() {
  return (
    <div className="mt-6 space-y-2">
      <div className="mono ml-auto w-fit max-w-[85%] border border-line bg-surface px-3 py-1.5 text-[12px] text-foreground">
        &gt; thêm khách hàng “Acme” vào crm
      </div>
      <div className="mono w-fit max-w-[85%] border border-line bg-foreground px-3 py-1.5 text-[12px] text-background">
        ✓ bản ghi #A-102 · Acme Inc
      </div>
      <div className="flex items-center gap-1.5 pl-1">
        <span className="h-1.5 w-1.5 animate-pulse bg-muted-2" />
        <span className="h-1.5 w-1.5 animate-pulse bg-muted-2 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse bg-muted-2 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

function TemplateVisual() {
  const t = ["CRM", "HRM", "KHO", "DU_AN"];
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {t.map((x, i) => (
        <span
          key={x}
          className={`pixel border border-line px-2 py-1 text-[8px] ${
            i === 0 ? "bg-foreground text-background" : "bg-surface text-muted"
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
    <div className="mono mt-6 text-[12px] leading-relaxed">
      <div className="text-muted-2">▸ workspace/crm</div>
      <div className="mt-1 border border-line bg-surface px-2.5 py-1.5">
        <span className="text-foreground">[+]</span> records/a-102.json
      </div>
      <div className="mt-1 border border-line bg-surface px-2.5 py-1.5">
        <span className="text-foreground">[+]</span> records/a-103.md
      </div>
    </div>
  );
}

function HistoryVisual() {
  const rows = [
    { t: "patchRecord", d: "#A-102", ok: true },
    { t: "createProfile", d: "inventory", ok: true },
    { t: "rollback", d: "prev commit", ok: false },
  ];
  return (
    <div className="mt-6 space-y-2">
      {rows.map((r) => (
        <div key={r.t} className="flex items-center gap-3 border border-line bg-surface px-3 py-2">
          <span className={`h-2 w-2 ${r.ok ? "bg-foreground" : "border border-line bg-transparent"}`} />
          <span className="mono text-[12px] text-foreground">{r.t}</span>
          <span className="mono text-[11px] text-muted-2">{r.d}</span>
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    span: "lg:col-span-3",
    tag: "SYS.01 · AGENT",
    title: "Tương tác tự nhiên với Claude, Codex & OpenCode",
    desc: "Nói chuyện trực tiếp bằng ngôn ngữ tự nhiên. Mochi hiểu ngữ cảnh workspace và thao tác dữ liệu thay bạn qua các tool có kiểu.",
    visual: <ChatVisual />,
  },
  {
    span: "lg:col-span-2",
    tag: "SYS.02 · TEMPLATE",
    title: "Tạo template trong một lệnh",
    desc: "Schema dựng sẵn cho CRM, HRM, kho vận, dự án — kèm dữ liệu mẫu.",
    visual: <TemplateVisual />,
  },
  {
    span: "lg:col-span-2",
    tag: "SYS.03 · GIT",
    title: "Commit dữ liệu an toàn lên Git",
    desc: "Không commit file SQLite sống. Xuất bundle JSON/Markdown dễ diff, theo nhánh.",
    visual: <GitVisual />,
  },
  {
    span: "lg:col-span-3",
    tag: "SYS.04 · CONTROL",
    title: "Lịch sử ghi & rollback bất kỳ lúc nào",
    desc: "Mọi thay đổi của agent đều được theo dõi. Xem lại và hoàn tác về trạng thái trước đó chỉ với một lệnh.",
    visual: <HistoryVisual />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="tech">{"// FEATURE SELECT"}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Mọi thứ agent cần để làm việc với dữ liệu
            </h2>
          </div>
          <span className="pixel hidden whitespace-nowrap text-[9px] text-muted-2 sm:block">04 MODULES</span>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className={f.span}>
              <Frame size={12} className="card-hud h-full border border-line bg-surface p-7">
                <p className="pixel text-[9px] text-muted">{f.tag}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                {f.visual}
              </Frame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
