import Mascot from "./Mascot";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-foreground px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,143,163,0.25)_0%,transparent_70%)]" />

        <Mascot pose="sleepy" className="mx-auto h-16 w-16" />

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Sẵn sàng để agent của bạn nói chuyện với dữ liệu?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
          Cài đặt Mochi trong vài giây và bắt đầu với template đầu tiên của
          bạn ngay hôm nay.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="flex h-12 w-full items-center justify-center rounded-full bg-white/10 px-6 font-mono text-sm text-white sm:w-auto">
            npm install -g mochikit
          </div>
          <a
            href="https://github.com/mochi-cli/mochi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/90 sm:w-auto"
          >
            Xem trên GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
