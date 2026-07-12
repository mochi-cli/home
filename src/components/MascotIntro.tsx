import Mascot from "./Mascot";

export default function MascotIntro() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <Mascot pose="happy" className="h-28 w-28" />
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Gặp gỡ Mochi
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Một trợ lý nhỏ, tròn trịa và luôn vui vẻ — đứng giữa AI agent của bạn
          và cơ sở dữ liệu. Mochi không thay bạn quyết định, chỉ giúp mọi thao
          tác dữ liệu trở nên đơn giản, an toàn và dễ theo dõi hơn.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted">
            Không viết SQL
          </span>
          <span className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted">
            Không commit file DB sống
          </span>
          <span className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted">
            Luôn có lịch sử để rollback
          </span>
        </div>
      </div>
    </section>
  );
}
