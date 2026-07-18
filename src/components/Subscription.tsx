"use client";

import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

interface Plan {
  name: string;
  price: string;
  priceSuffix: string;
  credits: string;
  popular: boolean;
  ctaLabel: string;
  ctaHref: string | null;
}

const proProductId = process.env.NEXT_PUBLIC_POLAR_PRO_PRODUCT_ID;

const plans: Plan[] = [
  {
    name: "Free play",
    price: "$0",
    priceSuffix: "/mo",
    credits: "0 CR",
    popular: false,
    ctaLabel: "Soon",
    ctaHref: null,
  },
  {
    name: "Pro",
    price: "$19",
    priceSuffix: "/forever",
    credits: "12 CR",
    popular: true,
    ctaLabel: "Insert coin →",
    ctaHref: proProductId ? `/api/checkout?products=${proProductId}` : null,
  },
];

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Subscription() {
  const { m } = useLang();

  return (
    <section id="pricing" className="relative border-b border-line-soft bg-surface-2">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mb-12 text-center">
          <p className="tech">// PRICING</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {m.price.title}
          </h2>
          <p className="mt-3 text-base text-muted">{m.price.sub}</p>
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          {plans.map((plan, i) => {
            const data = m.price.plans[i];
            const hot = plan.popular;
            return (
              <Reveal key={plan.name} delay={i * 90}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-8 transition-shadow ${
                    hot
                      ? "border border-foreground bg-foreground text-background shadow-[var(--shadow-lift)]"
                      : "border border-line-soft bg-surface text-foreground"
                  }`}
                >
                  {hot && (
                    <span className="pixel absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-highlight px-3 py-1 text-[9px] text-foreground">
                      ★ {m.price.popular}
                    </span>
                  )}

                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${hot ? "text-background" : "text-foreground"}`}>
                      {plan.name}
                    </span>
                    <span className={`pixel text-[9px] ${hot ? "text-background/60" : "text-muted-2"}`}>
                      {plan.credits}
                    </span>
                  </div>

                  <div className="mt-6 flex items-end gap-1.5">
                    <span className="text-5xl font-semibold leading-none">{plan.price}</span>
                    <span className={`mb-1.5 text-sm ${hot ? "text-background/60" : "text-muted"}`}>
                      {plan.priceSuffix}
                    </span>
                  </div>
                  <p className={`mt-2 text-sm ${hot ? "text-background/75" : "text-muted"}`}>
                    {data.tagline}
                  </p>

                  <div className={`my-6 h-px w-full ${hot ? "bg-background/20" : "bg-line-soft"}`} />

                  <ul className="flex flex-1 flex-col gap-3">
                    {data.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-sm ${
                          hot ? "text-background/90" : "text-foreground"
                        }`}
                      >
                        <span className={hot ? "text-background" : "text-foreground"}>
                          <Check />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.ctaHref ? (
                    <a
                      href={plan.ctaHref}
                      {...(plan.ctaHref.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-medium transition-transform hover:-translate-y-px ${
                        hot
                          ? "bg-background text-foreground"
                          : "bg-foreground text-background"
                      }`}
                    >
                      {plan.ctaLabel}
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className={`mt-8 inline-flex h-11 w-full cursor-not-allowed items-center justify-center rounded-full border text-sm ${
                        hot
                          ? "border-background/40 bg-background/10 text-background/60"
                          : "border-line-soft bg-surface-2 text-muted-2"
                      }`}
                    >
                      {plan.ctaLabel}
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-2">{m.price.billed}</p>
      </div>
    </section>
  );
}
