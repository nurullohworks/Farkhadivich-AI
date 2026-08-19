import { Cta, TelegramCta } from "./cta";
import { Reveal, Section, SectionHeading } from "./primitives";
import neuroBefore from "@/assets/neuro-before.jpg.asset.json";
import neuroAfter from "@/assets/neuro-after.jpg.asset.json";
import { useT } from "@/i18n/lang";

export function Problems() {
  const t = useT();

  return (
    <Section>
      <SectionHeading
        eyebrow={t.problems.eyebrow}
        title={t.problems.title}
        subtitle={t.problems.subtitle}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {t.problems.items.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="surface-card h-full rounded-3xl p-8">
              <span className="text-sm font-black tracking-[0.3em] text-primary">
                {`0${i + 1}`}
              </span>
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  const t = useT();

  return (
    <Section id="xizmatlar">
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {t.services.items.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 90}>
            <article className="surface-card flex h-full flex-col rounded-3xl p-8">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <span aria-hidden className="block h-3 w-3 rotate-45 border-2 border-current" />
                </span>
                <span className="text-xs font-black tracking-[0.3em] text-chrome">
                  {`0${i + 1}`}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.uses.map((u) => (
                  <li
                    key={u}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-steel"
                  >
                    {u}
                  </li>
                ))}
              </ul>
              <a
                href="#aloqa"
                className="mt-7 inline-flex text-sm font-bold text-primary transition-transform hover:translate-x-1"
              >
                {t.services.link}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function NeuroPhoto() {
  const t = useT();

  return (
    <Section>
      <SectionHeading
        eyebrow="AI"
        title={t.services.items[1]?.title || "Neyrofotosessiya"}
        subtitle={t.services.items[1]?.text}
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="surface-card h-full rounded-3xl p-8">
            <h3 className="text-lg font-bold">Use cases</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {(t.services.items[1]?.uses || []).map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="surface-card grid h-full gap-5 rounded-3xl p-8 sm:grid-cols-2">
            <figure className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src={neuroBefore.url}
                alt="Before"
                loading="lazy"
                className="h-full min-h-64 w-full object-cover"
              />
            </figure>
            <figure className="relative overflow-hidden rounded-2xl border border-primary/40">
              <img
                src={neuroAfter.url}
                alt="After"
                loading="lazy"
                className="h-full min-h-64 w-full object-cover"
              />
            </figure>
            <div className="sm:col-span-2">
              <TelegramCta className="w-full" label={t.common.telegramCta} />
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
        <Cta href="#aloqa" variant="primary">
          {t.common.startProject}
        </Cta>
      </Reveal>
    </Section>
  );
}