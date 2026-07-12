import Mascot from "./Mascot";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border-strong bg-[#141312] px-8 py-20 text-center sm:px-16">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.15]" />
          <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--accent-glow),transparent)] blur-2xl" />

          <div className="relative">
            <Mascot pose="happy" uid="cta" className="mx-auto h-16 w-16" />
            <h2 className="mx-auto mt-6 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Sẵn sàng để agent trò chuyện với dữ liệu?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
              Cài đặt Mochi trong vài giây và bắt đầu với template đầu tiên của bạn.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://github.com/mochi-cli/mochi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Bắt đầu ngay
                <span aria-hidden>→</span>
              </a>
              <div className="inline-flex h-11 items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 font-mono text-sm text-white/90">
                <span className="text-white/40">$</span> npm i -g mochikit
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
