"use client";

import Mascot from "./Mascot";
import { useLang } from "./LanguageProvider";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "#workflow" },
      { label: "Features", href: "#features" },
      { label: "Templates", href: "#templates" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Developer",
    links: [
      { label: "GitHub — CLI", href: "https://github.com/mochi-cli/mochi", external: true },
      { label: "GitHub — Home", href: "https://github.com/mochi-cli/home", external: true },
      { label: "MCP integration", href: "#features" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Mochi", href: "#mochi" },
      { label: "Insert coin", href: "#pricing" },
    ],
  },
];

export default function Footer() {
  const { m } = useLang();
  return (
    <footer className="relative border-t border-line-soft bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Mascot pose="happy" uid="foot" className="h-8 w-8" />
              <span className="pixel text-base tracking-wide text-foreground">MOCHI</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {m.footer.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="tech">{col.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line-soft pt-6 sm:flex-row sm:items-center">
          <span className="text-xs text-muted-2">
            © {new Date().getFullYear()} Mochi. Data workspace for teams and agents.
          </span>
          <span className="pixel text-[9px] text-muted-2">
            HI-SCORE <span className="text-foreground">19009304</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
