import { Cta, TelegramCta } from "./cta";
import { Reveal, Section, SectionHeading } from "./primitives";
import { useT } from "@/i18n/lang";

export function Business() {
  const t = useT();

  return (
    <Section id="biznes" className="border-y border-border/60 bg-obsidian/50">
      <SectionHeading
        eyebrow={t.business.eyebrow}
        title={t.business.title}
        subtitle={t.business.subtitle}
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="surface-card h-full rounded-3xl p-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.business.intro}
            </p>
            <div className="chrome-rule my-7" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {t.business.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="surface-card relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8">
            <div aria-hidden className="beam absolute inset-x-0 top-0 h-40 opacity-70" />
            <div className="relative">
              <span className="text-[11px] font-black tracking-[0.28em] text-primary uppercase">
                {t.business.packageEyebrow}
              </span>
              <h3 className="mt-5 text-2xl font-extrabold">
                <span className="text-chrome">{t.business.packageTitle}</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.business.packageText}
              </p>
            </div>
            <div className="relative mt-8 flex flex-col gap-3">
              <Cta href="#aloqa">{t.business.packageCta}</Cta>
              <TelegramCta label={t.common.telegramCta} />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow={t.business.bonusEyebrow}
          title={t.business.bonusTitle}
          subtitle={t.business.bonusSubtitle}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.business.bonuses.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 90}>
              <article className="surface-card h-full rounded-3xl p-7">
                <span className="text-[11px] font-black tracking-[0.28em] text-cyan-glow uppercase">
                  {`${t.business.bonusLabel} 0${i + 1}`}
                </span>
                <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Process() {
  const t = useT();

  return (
    <Section>
      <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent lg:block"
        />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} as="li">
              <div className="surface-card h-full rounded-3xl p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/40 bg-primary/10 text-sm font-black text-primary">
                  {`0${i + 1}`}
                </span>
                <h3 className="mt-5 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}