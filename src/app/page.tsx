const contact = {
  header: "I ain’t doing nothing.",
  firstName: "April",
  lastName: "Mantas",
  phone: "1.708.3416794",
  website: "https://kingsberrywafflehouse.com/",
  poweredBy: "Kingsberry Waffle House"
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 text-gray-50">
      <div className="w-full max-w-sm">
        <div className="relative rounded-[32px] bg-gradient-to-b from-white/40 to-transparent p-[1px]">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/5 to-transparent blur-xl" />
          <article className="relative rounded-[32px] border border-white/10 bg-[#1c2127] p-8 shadow-[0px_25px_60px_rgba(0,0,0,0.6)]">
            <header className="space-y-3">
              <h1 className="text-2xl font-semibold text-white">{contact.header}</h1>
            </header>

            <div className="mt-8 space-y-1">
              <p className="text-3xl font-semibold text-white">
                {contact.firstName}{" "}
                <span className="text-white/70">{contact.lastName}</span>
              </p>
            </div>

            <dl className="mt-6 space-y-4 text-sm text-white/70">
              <div className="flex justify-between rounded-2xl border border-white/5 bg-black/10 px-4 py-3">
                <dt className="tracking-[0.3em] text-[10px] uppercase text-white/40">
                  Phone
                </dt>
                <dd className="font-mono text-base text-white">{contact.phone}</dd>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-black/5 px-4 py-3">
                <dt className="text-[10px] uppercase tracking-[0.3em] text-white/40">Website</dt>
                <dd>
                  <a
                    href={contact.website}
                    className="font-semibold text-[var(--accent)] underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    kingsberrywafflehouse.com
                  </a>
                </dd>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">Powered by</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {contact.poweredBy} ⚡
                </p>
                <p className="text-xs text-white/60">
                  Crafting the crispiest waffles fueling every creative tap.
                </p>
              </div>
            </dl>

            <a
              href="/april-mantas.vcf"
              download
              className="mt-8 flex w-full items-center justify-between rounded-2xl border border-[#39ff14]/40 bg-[#39ff14] px-5 py-4 font-semibold text-black shadow-[0_15px_30px_rgba(57,255,20,0.35)] transition hover:translate-y-0.5 hover:shadow-[0_12px_25px_rgba(57,255,20,0.45)] animate-jiggle"
              aria-label="Save April Mantas to contacts"
            >
              <span>Save contact</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <p className="mt-6 text-center text-xs text-white/60">
              Powered by {contact.poweredBy}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
