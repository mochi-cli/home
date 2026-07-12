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
    cmd: '"Hey Mochi…"',
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
    <section id="workflow" className="scanlines relative border-b border-line bg-surface-2">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12">
          <p className="tech">{"// GAME LOOP"}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Ba bước tới một workspace agent-native
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="card-hud group relative h-full border border-line bg-background p-7">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <span className="pixel text-3xl text-foreground">{s.n}</span>
                  <span className="pixel text-[9px] text-muted-2">LEVEL</span>
                </div>
                <div className="mono mt-5 inline-block border border-line bg-surface px-2.5 py-1 text-[12px] text-foreground">
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
