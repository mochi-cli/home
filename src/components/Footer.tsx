"use client";

import Mascot from "./Mascot";
import { TickBar } from "./hud";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { m } = useLang();
  return (
    <footer className="scanlines relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-line py-12 sm:flex-row sm:items-center">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center border border-line bg-surface">
                <Mascot pose="happy" uid="foot" className="h-6 w-6" />
              </span>
              <span className="pixel text-sm text-foreground">MOCHI</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {m.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:items-end">
            <span className="tech">{"// SOURCE"}</span>
            <a
              href="https://github.com/mochi-cli/mochi"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-sm text-muted transition-colors hover:text-foreground"
            >
              github.com/mochi-cli/mochi
            </a>
            <a
              href="https://github.com/mochi-cli/home"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-sm text-muted transition-colors hover:text-foreground"
            >
              github.com/mochi-cli/home
            </a>
          </div>
        </div>

        {/* hi-score bottom bar */}
        <div className="flex items-center justify-between gap-4 py-5">
          <span className="pixel text-[9px] text-muted-2">
            © {new Date().getFullYear()} MOCHI
          </span>
          <TickBar count={24} className="hidden sm:flex" />
          <span className="pixel text-[9px] text-foreground">
            HI-SCORE <span className="text-muted-2">19009304</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
