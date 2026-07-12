import Mascot from "./Mascot";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <Mascot pose="happy" className="h-7 w-7" />
          <span className="text-sm font-semibold">Mochi</span>
          <span className="text-sm text-muted">
            · trợ lý dữ liệu thân thiện cho AI agent
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            mochi-cli/mochi
          </a>
          <a
            href="https://github.com/mochi-cli/home"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            mochi-cli/home
          </a>
        </div>
      </div>
    </footer>
  );
}
