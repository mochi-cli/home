import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { PixelHeart } from "./hud";

export default function CTASection() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="scanlines relative overflow-hidden border border-line bg-[#141414] px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative">
              <div className="mx-auto mb-6 flex w-fit items-center justify-center border border-white/25 p-3">
                <Mascot pose="happy" uid="cta" className="h-16 w-16" />
              </div>

              <div className="mb-4 flex items-center justify-center gap-1.5">
                {[true, true, true].map((_, i) => (
                  <PixelHeart key={i} className="h-4 w-5 text-white" />
                ))}
                <PixelHeart filled={false} className="h-4 w-5 text-white/40" />
              </div>

              <h2 className="pixel mx-auto max-w-xl text-lg leading-relaxed text-white sm:text-2xl">
                INSERT COIN TO CONTINUE
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/60">
                Cài đặt Mochi trong vài giây và bắt đầu với template đầu tiên của bạn.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://github.com/mochi-cli/mochi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel inline-flex h-12 w-full items-center justify-center border border-white bg-white px-7 text-[11px] text-[#141414] shadow-[4px_4px_0_0_rgba(255,255,255,0.35)] transition-transform hover:-translate-x-px hover:-translate-y-px sm:w-auto"
                >
                  PRESS START ►
                </a>
                <div className="mono inline-flex h-12 items-center gap-3 border border-white/25 bg-white/5 px-5 text-sm text-white/90">
                  <span className="text-white/40">$</span> npm i -g mochikit
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
