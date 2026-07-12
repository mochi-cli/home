import Link from "next/link";
import Mascot from "./Mascot";

const links = [
  { href: "#features", label: "SYS.01" },
  { href: "#workflow", label: "SYS.02" },
  { href: "#templates", label: "SYS.03" },
  { href: "#mochi", label: "P1" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center border border-line bg-surface">
            <Mascot pose="happy" uid="nav" className="h-6 w-6" />
          </span>
          <span className="pixel text-sm text-foreground">MOCHI</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="pixel px-3 py-1.5 text-[9px] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/mochi-cli/mochi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hard pixel inline-flex h-9 items-center px-4 text-[9px]"
        >
          START ►
        </a>
      </nav>
    </header>
  );
}
