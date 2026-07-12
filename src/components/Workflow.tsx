import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    cmd: "mochikit init --template crm",
    title: "Khởi tạo workspace",
    desc: "Chọn một template dựng sẵn. Mochi tạo schema, quan hệ và dữ liệu mẫu trong vài giây.",
  },
  {
    n: "02",
    cmd: "“Hey Mochi…”",
    title: "Trò chuyện với agent",
    desc: "Claude, Codex hay OpenCode thao tác dữ liệu qua các tool có kiểu — không cần viết SQL.",
  },
  {
    n: "03",
    cmd: "mochikit deploy git",
    title: "Commit lên Git",
    desc: "Xuất bundle text-based dễ review và diff. Mỗi workspace một nhánh riêng.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Cách hoạt động</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Ba bước tới một workspace agent-native
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="group h-full bg-white p-8 transition-colors hover:bg-surface-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-muted-2">{s.n}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-border-strong group-hover:text-foreground">
                    →
                  </span>
                </div>
                <div className="mt-6 inline-block rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[12px] text-foreground">
                  {s.cmd}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
