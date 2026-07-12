import Mascot from "./Mascot";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-14 sm:flex-row sm:items-center">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5">
            <Mascot pose="happy" uid="foot" className="h-8 w-8" />
            <span className="text-[15px] font-semibold tracking-tight">Mochi</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Trợ lý dữ liệu agent-native cho Claude, Codex và OpenCode.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <span className="eyebrow">Mã nguồn</span>
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-muted transition-colors hover:text-foreground"
          >
            github.com/mochi-cli/mochi
          </a>
          <a
            href="https://github.com/mochi-cli/home"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-muted transition-colors hover:text-foreground"
          >
            github.com/mochi-cli/home
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-2">
          © {new Date().getFullYear()} Mochi · Xây dựng với Next.js
        </div>
      </div>
    </footer>
  );
}
