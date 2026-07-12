import Mascot from "./Mascot";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[-120px] -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--accent-soft)_0%,transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-mint" />
            Mã nguồn mở · Claude · Codex · OpenCode
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Trợ lý dữ liệu nhỏ,
            <br />
            tròn trịa và thân thiện
            <span className="text-accent-strong">.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted md:mx-0">
            Mochi biến SQLite thành một workspace agent-native: khởi tạo template
            trong một lệnh, để Claude, Codex hay OpenCode thao tác dữ liệu bằng
            ngôn ngữ tự nhiên, và commit lên Git một cách an toàn.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="https://github.com/mochi-cli/mochi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-white transition-colors hover:bg-foreground/85 sm:w-auto"
            >
              Bắt đầu với Mochi
            </a>
            <div className="flex h-12 w-full items-center justify-between gap-3 rounded-full border border-border bg-white px-5 font-mono text-sm text-foreground sm:w-auto">
              <span>npm install -g mochikit</span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-muted md:justify-start">
            <span>Không phụ thuộc ngoài</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Chạy trên Node.js 24+</span>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-accent-mint-soft blur-3xl" />
          <Mascot pose="wave" className="animate-float relative h-64 w-64 drop-shadow-xl sm:h-80 sm:w-80" />
        </div>
      </div>
    </section>
  );
}
