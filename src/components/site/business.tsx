import { Cta, TelegramCta } from "./cta";
import { MediaPlaceholder, Reveal, Section, SectionHeading } from "./primitives";

const BENEFITS = [
  "Har oy muntazam kontent",
  "Reklama videolari",
  "AI orqali kreativ videolar",
  "Mahsulot vizuallari",
  "Instagram uchun kontent",
  "Shaxsiy brend kontenti",
  "Kreativ g‘oyalar",
  "Uzoq muddatli hamkorlik",
];

const BONUSES = [
  {
    n: "Bonus 01",
    title: "Professional reklama videosi",
    text: "Uzoq muddatli hamkorlik doirasida biznesingiz uchun qo‘shimcha professional reklama videosi.",
  },
  {
    n: "Bonus 02",
    title: "Kreativ kontent g‘oyalari",
    text: "Brendingiz yo‘nalishiga mos kreativ g‘oyalar to‘plami.",
  },
  {
    n: "Bonus 03",
    title: "Kontent yo‘nalishi bo‘yicha tavsiyalar",
    text: "Qaysi formatlar biznesingiz uchun samaraliroq bo‘lishi bo‘yicha tavsiyalar.",
  },
  {
    n: "Bonus 04",
    title: "Vizual brend bo‘yicha tavsiyalar",
    text: "Rang, uslub va vizual til bo‘yicha amaliy tavsiyalar.",
  },
  {
    n: "Bonus 05",
    title: "Ustuvor aloqa",
    text: "Doimiy hamkorlar uchun tezkor javob va ustuvor navbat.",
  },
];

const STEPS = [
  { n: "01", title: "Siz bog‘lanasiz", text: "Telegram yoki telefon orqali murojaat qilasiz." },
  { n: "02", title: "Loyihangizni tushunamiz", text: "Maqsad, auditoriya va vazifani aniqlaymiz." },
  { n: "03", title: "Kreativ konsepsiya ishlab chiqamiz", text: "G‘oya, ssenariy va vizual yo‘nalishni tayyorlaymiz." },
  { n: "04", title: "Kontentni yaratamiz", text: "AI va montaj orqali yakuniy vizualni ishlab chiqamiz." },
  { n: "05", title: "Tayyor natijani topshiramiz", text: "Formatlarga moslab, foydalanishga tayyor holda beramiz." },
];

export function Business() {
  return (
    <Section id="biznes" className="border-y border-border/60 bg-obsidian/50">
      <SectionHeading
        eyebrow="Biznes uchun"
        title="Har hafta yangi ijodkor izlamang. Biznesingiz uchun doimiy kreativ hamkor toping."
        subtitle="FARKHADIVICH AI bilan shartnoma asosida uzoq muddatli hamkorlik qiling va biznesingiz uchun muntazam kreativ kontent ishlab chiqing."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="surface-card h-full rounded-3xl p-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Biznesingizning kontent ehtiyojlarini bir martalik buyurtma sifatida emas, uzoq
              muddatli kreativ hamkorlik sifatida yo‘lga qo‘yishimiz mumkin.
            </p>
            <div className="chrome-rule my-7" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((b) => (
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
                Uzoq muddatli kreativ hamkorlik
              </span>
              <h3 className="mt-5 text-2xl font-extrabold">
                <span className="text-chrome">Oylik kreativ produksiya paketi</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Kontent rejasi, ishlab chiqarish va muntazam yetkazib berish — barchasi bitta
                jamoada. Shartlar biznesingiz hajmiga qarab kelishiladi.
              </p>
            </div>
            <div className="relative mt-8 flex flex-col gap-3">
              <Cta href="#aloqa">Hamkorlikni muhokama qilish →</Cta>
              <TelegramCta />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Bonuslar"
          title="Doimiy hamkorlarimiz uchun qo‘shimcha bonuslar"
          subtitle="Bonuslar hamkorlik shartlariga muvofiq taqdim etiladi."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BONUSES.map((b, i) => (
            <Reveal key={b.n} delay={(i % 3) * 90}>
              <article className="surface-card h-full rounded-3xl p-7">
                <span className="text-[11px] font-black tracking-[0.28em] text-cyan-glow uppercase">
                  {b.n}
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
  return (
    <Section>
      <SectionHeading eyebrow="Jarayon" title="Qanday ishlaymiz?" />
      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent lg:block"
        />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} as="li">
              <div className="surface-card h-full rounded-3xl p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/40 bg-primary/10 text-sm font-black text-primary">
                  {s.n}
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

export function SocialProof() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Ishonch"
        title="Mijozlar fikri va loyiha natijalari"
        subtitle="Quyidagi joylar tahrirlanadi — real fikr, skrinshot va natijalarni shu yerga qo‘shing."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { label: "Mijoz fikri shu yerda", hint: "Bu yerga mijozning haqiqiy fikrini yozing." },
          { label: "Loyiha natijasi shu yerda", hint: "Bu yerga loyihaning o‘lchanadigan natijasini yozing." },
          { label: "Screenshot shu yerda", hint: "Bu yerga statistika yoki yozishmalar skrinshotini joylashtiring." },
        ].map((p, i) => (
          <Reveal key={p.label} delay={i * 90}>
            <MediaPlaceholder label={p.label} hint={p.hint} className="min-h-56" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}