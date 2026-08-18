import { useState } from "react";
import { Cta } from "./cta";
import { MediaPlaceholder, Reveal, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "Barchasi",
  "AI Video",
  "Reklama",
  "Neyrofotosessiya",
  "Multfilm",
  "Shaxsiy brend",
  "Biznes kontenti",
] as const;

/* BU YERGA PORTFOLIO ISHLARINGIZNI QO‘SHING / TAHRIRLANG */
const ITEMS = [
  {
    title: "Namuna #01 — AI Video", // BU YERGA LOYIHA NOMINI YOZING
    category: "AI Video",
    description: "Cinematic AI video namunasi uchun tavsif.", // BU YERGA LOYIHA TAVSIFINI YOZING
    media: "video" as const,
    result: "Natijani shu yerga yozing (ixtiyoriy).",
    testimonial: "MIJOZ FIKRI SHU YERDA",
    span: "lg:row-span-2",
  },
  {
    title: "Namuna #02 — Reklama",
    category: "Reklama",
    description: "Mahsulot reklamasi uchun kreativ video namunasi.",
    media: "video" as const,
    result: "",
    testimonial: "",
    span: "",
  },
  {
    title: "Namuna #03 — Neyrofotosessiya",
    category: "Neyrofotosessiya",
    description: "Shaxsiy brend uchun AI portret to‘plami.",
    media: "image" as const,
    result: "",
    testimonial: "",
    span: "",
  },
  {
    title: "Namuna #04 — Biznes kontenti",
    category: "Biznes kontenti",
    description: "Biznes uchun oylik kontent to‘plami namunasi.",
    media: "image" as const,
    result: "",
    testimonial: "",
    span: "lg:row-span-2",
  },
  {
    title: "Namuna #05 — AI Multfilm",
    category: "Multfilm",
    description: "Personaj va hikoya asosidagi animatsion video.",
    media: "video" as const,
    result: "",
    testimonial: "",
    span: "",
  },
  {
    title: "Namuna #06 — Shaxsiy brend",
    category: "Shaxsiy brend",
    description: "Ekspert uchun vizual kontent namunasi.",
    media: "image" as const,
    result: "",
    testimonial: "",
    span: "",
  },
];

export function Portfolio() {
  const [active, setActive] = useState<string>("Barchasi");
  const list = ITEMS.filter((i) => active === "Barchasi" || i.category === active);

  return (
    <Section id="portfolio" className="border-y border-border/60 bg-obsidian/50">
      <SectionHeading
        eyebrow="Portfolio"
        subtitle="Har bir loyiha — g‘oya, kreativ yechim va vizual natijaning birlashmasi."
      />

      <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
              active === c
                ? "border-primary bg-primary/15 text-primary"
                : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <div className="mt-12 grid auto-rows-[minmax(0,auto)] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 90} className={item.span}>
            <article className="surface-card flex h-full flex-col gap-5 rounded-3xl p-6">
              {/* BU YERGA PORTFOLIO VIDEOSINI YOKI RASMINI QO‘YING (img / video controls / iframe) */}
              {item.media === "video" ? (
                <MediaPlaceholder
                  label="Video uchun bo‘sh joy"
                  hint="Bu yerga o‘z videongizni joylashtiring (MP4, YouTube yoki Instagram)."
                  className="min-h-56 flex-1"
                />
              ) : (
                <MediaPlaceholder
                  label="Rasm uchun bo‘sh joy"
                  hint="Bu yerga o‘z portfolio rasmingizni joylashtiring (JPG, PNG, WEBP)."
                  className="min-h-56 flex-1"
                />
              )}
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-primary uppercase">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.result ? (
                  <p className="mt-3 text-xs text-steel">Natija: {item.result}</p>
                ) : null}
                {item.testimonial ? (
                  <p className="mt-3 rounded-xl border border-dashed border-chrome/50 px-4 py-3 text-xs text-steel">
                    {item.testimonial}
                  </p>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Cta href="#aloqa">Loyihamni muhokama qilish →</Cta>
      </Reveal>
    </Section>
  );
}

export function CaseStudy() {
  const rows = [
    ["Loyiha", "PORTFOLIO ISHINGIZNI SHU YERGA QO‘SHING"],
    ["Mijozning muammosi", "Mijoz muammosini shu yerga yozing."],
    ["Yechim", "Taklif qilingan kreativ yechimni shu yerga yozing."],
    ["Nima yaratdik?", "Yaratilgan kontent ro‘yxatini shu yerga yozing."],
    ["Natija", "LOYIHA NATIJASI SHU YERDA"],
    ["Mijoz fikri", "MIJOZ FIKRI SHU YERDA"],
  ];

  return (
    <Section>
      <SectionHeading
        eyebrow="Case study"
        title="Loyiha qanday qurilgani — bosqichma-bosqich"
        subtitle="Har bir loyihani shu tuzilma asosida taqdim etamiz. Quyidagi maydonlar tahrirlanadi."
      />
      <Reveal className="mt-12">
        <div className="surface-card overflow-hidden rounded-3xl">
          <dl className="divide-y divide-border">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-2 p-6 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                <dt className="text-xs font-bold tracking-[0.22em] text-primary uppercase">{k}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-secondary/40 p-6">
            <p className="text-sm font-semibold">Shunga o‘xshash loyiha kerakmi?</p>
            <Cta href="#aloqa">Loyihamni muhokama qilish →</Cta>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}