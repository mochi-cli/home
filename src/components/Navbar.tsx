import Link from "next/link";
import Mascot from "./Mascot";

const links = [
  { href: "#features", label: "Tính năng" },
  { href: "#workflow", label: "Cách hoạt động" },
  { href: "#templates", label: "Template" },
  { href: "#mochi", label: "Mochi" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="group flex items-center gap-2.5">
          <Mascot pose="happy" uid="nav" className="h-8 w-8 transition-transform group-hover:scale-110" />
          <span className="text-[15px] font-semibold tracking-tight">Mochi</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.61.56.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.68.08-.68 1.12.08 1.72 1.15 1.72 1.15 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.15.89-.25 1.84-.37 2.79-.37s1.9.12 2.79.37c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.12 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.77.54 4.45-1.48 7.64-5.67 7.64-10.61C23.02 5.24 18.27.5 12 .5Z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Bắt đầu
          </a>
        </div>
      </nav>
    </header>
  );
}
