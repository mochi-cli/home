import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { Frame, DashedRings, Crosshair, TechCaption } from "./hud";

const stats = [
  { label: "SIMPLE", val: 5 },
  { label: "SAFE", val: 5 },
  { label: "TRACEABLE", val: 4 },
  { label: "ZERO-DEP", val: 5 },
];

export default function MascotIntro() {
  return (
    <section id="mochi" className="scanlines relative border-b border-line bg-surface-2">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* character card */}
          <Reveal className="order-1 flex justify-center">
            <div className="relative">
              <DashedRings className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 [color:var(--line-soft)]" />
              <Crosshair className="absolute -left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" />
              <Crosshair className="absolute -right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" />
              <Frame size={16} className="bg-background/60 p-8 backdrop-blur-sm">
                <span className="pixel absolute -top-2 left-1/2 -translate-x-1/2 bg-surface-2 px-2 text-[9px] text-muted">
                  PLAYER 01
                </span>
                <Mascot pose="happy" uid="intro" className="animate-float h-44 w-44 sm:h-52 sm:w-52" />
              </Frame>
              <TechCaption className="absolute -bottom-2 right-2" lines={["ID: MOCHI-001", "CLASS: ASSISTANT"]} />
            </div>
          </Reveal>

          <Reveal className="order-2" delay={100}>
            <p className="tech">{"// CHARACTER"}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Gặp gỡ Mochi</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Một trợ lý nhỏ, tròn trịa và luôn sẵn sàng — đứng giữa AI agent của
              bạn và cơ sở dữ liệu. Mochi không thay bạn quyết định, chỉ giúp mọi
              thao tác dữ liệu trở nên đơn giản, an toàn và dễ theo dõi.
            </p>

            <div className="mt-7 space-y-3">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="pixel w-24 flex-none text-[9px] text-muted">{s.label}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-3 w-5 border border-line ${i < s.val ? "bg-foreground" : "bg-transparent"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
