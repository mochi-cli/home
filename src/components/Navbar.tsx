import Link from "next/link";
import Mascot from "./Mascot";
import LangSwitcher from "./LangSwitcher";

const links = [
  { href: "#workflow", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#templates", label: "Templates" },
  { href: "#pricing", label: "Pricing" },
  { href: "https://github.com/mochi-cli/mochi", label: "GitHub", external: true },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <Mascot pose="happy" uid="nav" className="h-8 w-8" />
          <span className="pixel text-base tracking-wide text-foreground">MOCHI</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <a href="#pricing" className="btn-primary text-sm">
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
