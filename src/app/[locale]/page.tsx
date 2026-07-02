import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Starfield from "@/components/Starfield";

export default async function TeaserPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "teaser" });

  return (
    <main className="cosmic-bg relative flex min-h-screen flex-col overflow-hidden">
      {/* starfield + faint dotted texture */}
      <Starfield />
      <div aria-hidden className="bg-stars pointer-events-none absolute inset-0 opacity-60" />

      {/* language switcher, top-end */}
      <header className="relative z-20 flex justify-end p-5 sm:p-7">
        <LanguageSwitcher />
      </header>

      {/* hero */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
        {/* card back with halo */}
        <div className="rise rise-1 relative mb-10 flex items-center justify-center">
          <span
            aria-hidden
            className="animate-halo absolute left-1/2 top-1/2 h-[22rem] w-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(106,63,208,0.55), rgba(245,185,66,0.14) 45%, transparent 70%)",
            }}
          />
          <div className="animate-float logo-glow relative">
            <Image
              src="/catsu-card-back.png"
              alt="Catsu"
              width={300}
              height={425}
              priority
              className="h-auto w-52 rounded-2xl ring-1 ring-[var(--hairline)] sm:w-60"
              style={{
                boxShadow:
                  "0 30px 60px -18px rgba(0,0,0,0.7), 0 0 40px rgba(106,63,208,0.25)",
              }}
            />
          </div>
        </div>

        {/* eyebrow */}
        <p className="rise rise-2 mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)] sm:text-sm">
          {t("badge")}
        </p>

        {/* headline — pb + roomy line-height so descenders (g, y) aren't clipped by background-clip:text */}
        <h1 className="rise rise-2 gold-text text-glow-gold max-w-4xl text-balance pb-[0.18em] text-4xl font-extrabold leading-[1.18] sm:text-6xl md:text-7xl">
          {t("title")}
        </h1>

        {/* divider */}
        <div className="rise rise-3 divider-fade my-8 w-40 sm:w-56" />

        {/* mysterious tagline */}
        <p className="rise rise-3 max-w-xl text-balance text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {t("tagline")}
        </p>

        {/* coming soon pill */}
        <div className="rise rise-4 mt-10">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--hairline)] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold tracking-wide text-[var(--gold-light)] backdrop-blur">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-[var(--gold)]" />
            {t("comingSoon")}
          </span>
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10 pb-7 text-center text-xs text-[var(--muted)]/70">
        © 2026 iCat Studios
      </footer>
    </main>
  );
}
