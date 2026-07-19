"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Mascot from "@/components/Mascot";
import { useLang } from "@/components/LanguageProvider";

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-8 w-8 flex-none" fill="none" stroke="#047857" strokeWidth="2" aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SuccessContent() {
  const { m } = useLang();
  const searchParams = useSearchParams();
  const checkoutId = searchParams.get("checkout_id");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-mesh-bright px-6 py-20">
      <div className="relative mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface shadow-[var(--shadow-card)]">
          <Mascot pose="happy" uid="success" className="h-14 w-14" />
        </div>

        <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#d1fbe8]">
          <Check />
        </div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {m.success.title}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
          {m.success.sub}
        </p>

        {checkoutId && (
          <p className="mono mt-4 text-xs text-muted-2">
            {m.success.order} {checkoutId}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary h-12 w-full whitespace-nowrap text-sm sm:w-auto"
          >
            {m.success.cta} →
          </a>
          <Link href="/" className="btn-ghost h-12 w-full whitespace-nowrap text-sm sm:w-auto">
            {m.success.back}
          </Link>
        </div>

        <div className="mono mt-8 inline-flex h-11 max-w-full items-center gap-3 overflow-x-auto whitespace-nowrap rounded-full border border-line-soft bg-surface px-5 text-sm text-foreground/90">
          <span className="text-muted-2">$</span> npx @mochi-cli/mochi init --kit all
        </div>

        <p className="mt-8 text-xs text-muted-2">{m.success.note}</p>
      </div>
    </section>
  );
}

export default function SuccessClient() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  );
}
