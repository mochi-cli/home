import Mascot from "./Mascot";
import Terminal from "./Terminal";

const agents = ["Claude", "Codex", "OpenCode"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* backgrounds */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-[-160px] -z-10 h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] blur-2xl opacity-70 animate-drift" />

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center md:pt-28">
        {/* mascot */}
        <div className="relative mx-auto mb-8 w-fit">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] blur-xl" />
          <Mascot pose="wave" uid="hero" className="animate-float h-28 w-28 sm:h-32 sm:w-32" />
        </div>

        <a
          href="https://github.com/mochi-cli/mochi"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur transition-colors hover:border-border-strong hover:text-foreground"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full accent-gradient" />
          Mã nguồn mở · agent-native SQLite
          <span className="text-muted-2">→</span>
        </a>

        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Để AI agent trò chuyện
          <br className="hidden sm:block" /> với <span className="text-gradient">dữ liệu của bạn</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          Mochi biến SQLite thành workspace agent-native: tạo template trong một
          lệnh, thao tác dữ liệu bằng ngôn ngữ tự nhiên, và commit an toàn lên Git.
        </p>

        {/* agents row */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
          <span className="text-muted-2">Hoạt động với</span>
          {agents.map((a) => (
            <span
              key={a}
              className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[12px] text-foreground"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Bắt đầu với Mochi
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <div className="inline-flex h-11 items-center gap-3 rounded-full border border-border bg-white px-5 font-mono text-sm text-foreground">
            <span className="text-muted-2">$</span>
            <span>npm i -g mochikit</span>
          </div>
        </div>
      </div>

      {/* product shot */}
      <div className="relative mx-auto max-w-3xl px-6 pb-24">
        <div className="pointer-events-none absolute inset-x-8 -top-6 bottom-8 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] blur-2xl opacity-60" />
        <Terminal />
      </div>
    </section>
  );
}
