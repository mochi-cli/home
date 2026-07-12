import Mascot from "./Mascot";
import Reveal from "./Reveal";

const traits = [
  "Không viết SQL tay",
  "Không commit file DB sống",
  "Luôn có lịch sử để rollback",
  "Không phụ thuộc ngoài",
];

export default function MascotIntro() {
  return (
    <section id="mochi" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">Nhân vật</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Gặp gỡ Mochi
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Một trợ lý nhỏ, tròn trịa và luôn vui vẻ — đứng giữa AI agent của
              bạn và cơ sở dữ liệu. Mochi không thay bạn quyết định, chỉ giúp mọi
              thao tác dữ liệu trở nên đơn giản, an toàn và dễ theo dõi.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {traits.map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="inline-flex h-4 w-4 flex-none items-center justify-center rounded-full accent-gradient text-[10px] text-white">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="dot-bg pointer-events-none absolute inset-0 -z-10 rounded-3xl [mask-image:radial-gradient(closest-side,#000,transparent)]" />
              <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] blur-2xl" />
              <Mascot pose="happy" uid="intro" className="animate-float h-52 w-52 sm:h-64 sm:w-64" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
