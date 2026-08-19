import { Cta, TelegramCta } from "./cta";
import { Reveal, Section, SectionHeading } from "./primitives";
import { useT } from "@/i18n/lang";

export function Course() {
  const t = useT();

  return (
    <Section id="kurs" className="border-y border-border/60 bg-obsidian/50">
      <SectionHeading
        eyebrow={t.course.eyebrow}
        title={t.course.title}
        subtitle={t.course.subtitle}
      />
      <Reveal className="mx-auto mt-8 max-w-3xl text-center">
        <p className="rounded-2xl border border-border bg-secondary/40 p-6 text-sm leading-relaxed text-muted-foreground">
          {t.course.note}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {t.course.modules.map((m, i) => (
          <Reveal key={m.title} delay={(i % 3) * 90}>
            <article className="surface-card h-full rounded-3xl p-7">
              <span className="text-[11px] font-black tracking-[0.28em] text-primary uppercase">
                {`${t.course.moduleLabel} 0${i + 1}`}
              </span>
              <h3 className="mt-4 text-lg font-bold">{m.title}</h3>
              <ul className="mt-5 space-y-2">
                {m.items.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow={t.course.bonusEyebrow} title={t.course.bonusTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.course.bonuses.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <article className="surface-card h-full rounded-3xl p-7">
                <span className="text-[11px] font-black tracking-[0.28em] text-cyan-glow uppercase">
                  {`${t.course.bonusLabel} 0${i + 1}`}
                </span>
                <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Cta href="#aloqa">{t.course.enroll}</Cta>
          <TelegramCta label={t.course.more} />
        </Reveal>
      </div>
    </Section>
  );
}

export function Income() {
  const t = useT();
  const math = [
    { a: t.income.projects(4), b: "$250", total: "$1000" },
    { a: t.income.projects(2), b: "$500", total: "$1000" },
    { a: t.income.projects(5), b: "$200", total: "$1000" },
  ];

  return (
    <Section>
      <SectionHeading
        eyebrow={t.income.eyebrow}
        title={t.income.title}
        subtitle={t.income.subtitle}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {math.map((m, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="surface-card rounded-3xl p-8 text-center">
              <p className="text-sm text-muted-foreground">{m.a}</p>
              <p className="mt-2 text-sm text-steel">Г—</p>
              <p className="text-2xl font-extrabold text-foreground">{m.b}</p>
              <div className="chrome-rule my-5" />
              <p className="text-3xl font-black text-primary">{m.total}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-10 max-w-3xl">
        <div className="rounded-3xl border border-border bg-secondary/40 p-7 text-center">
          <p className="text-base font-bold">{t.income.disclaimerTitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t.income.disclaimerText}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}