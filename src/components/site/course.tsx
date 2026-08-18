import { Cta, TelegramCta } from "./cta";
import { Reveal, Section, SectionHeading } from "./primitives";

const MODULES = [
  {
    n: "Modul 01",
    title: "AI orqali realistik videolar",
    items: [
      "AI video nima",
      "g‘oya yaratish",
      "ssenariy",
      "promptlar",
      "sahna yaratish",
      "personajlar",
      "mahsulotlar",
      "cinematic sahnalar",
      "montaj",
      "yakuniy video",
    ],
  },
  {
    n: "Modul 02",
    title: "Neyrofotosessiya",
    items: [
      "fotosuratni tayyorlash",
      "obraz yaratish",
      "lokatsiya",
      "kiyim",
      "professional portret",
      "shaxsiy brend vizuallari",
      "kreativ konsepsiyalar",
    ],
  },
  {
    n: "Modul 03",
    title: "AI multfilmlar va storytelling",
    items: ["personaj yaratish", "syujet", "sahnalar", "vizual uslub", "ovoz", "animatsiya", "yakuniy video"],
  },
  {
    n: "Modul 04",
    title: "Portfolio yaratish",
    items: ["portfolio nima", "qanday ishlarni qo‘shish", "ishni qanday taqdim qilish", "case study", "ishonch yaratish"],
  },
  {
    n: "Modul 05",
    title: "Xizmatni paketlash va mijoz topish",
    items: [
      "xizmatni paketlash",
      "taklif yaratish",
      "narxlash asoslari",
      "potensial mijoz topish",
      "mijoz bilan muloqot",
      "qayta buyurtma olish",
    ],
  },
  {
    n: "Modul 06",
    title: "Instagramni rivojlantirish",
    items: ["profil pozitsiyalash", "bio", "kontent yo‘nalishlari", "Reels", "auditoriya", "muntazam kontent"],
  },
];

const COURSE_BONUSES = [
  {
    n: "Bonus 01",
    title: "Instagram akkauntini to‘g‘ri qadoqlash",
    text: "Bio, avatar, highlights, xizmatlarni ko‘rsatish va profilni potensial mijoz uchun tushunarli qilish.",
  },
  {
    n: "Bonus 02",
    title: "Instagramni rivojlantirish sirlari",
    text: "Kontent ustunlari, Reels g‘oyalari, auditoriya bilan aloqa va muntazam rivojlanish bo‘yicha qo‘shimcha dars.",
  },
  {
    n: "Bonus 03",
    title: "Portfolio yaratish bo‘yicha qo‘shimcha dars",
    text: "Birinchi ishlaringizni ishonch uyg‘otadigan portfolioga aylantirish bo‘yicha amaliy dars.",
  },
];

export function Course() {
  return (
    <Section id="kurs" className="border-y border-border/60 bg-obsidian/50">
      <SectionHeading
        eyebrow="Kurs"
        title="AI yordamida kreativ kontent yaratishni o‘rganing."
        subtitle="0 dan boshlab AI video, neyrofotosessiya, multfilm va kreativ kontent yaratishgacha."
      />
      <Reveal className="mx-auto mt-8 max-w-3xl text-center">
        <p className="rounded-2xl border border-border bg-secondary/40 p-6 text-sm leading-relaxed text-muted-foreground">
          Bu kurs faqat AI vositalaridan foydalanishni emas, o‘rgangan ko‘nikmalaringizni portfolio
          va xizmatga aylantirishni ham o‘rgatishga qaratilgan.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {MODULES.map((m, i) => (
          <Reveal key={m.n} delay={(i % 3) * 90}>
            <article className="surface-card h-full rounded-3xl p-7">
              <span className="text-[11px] font-black tracking-[0.28em] text-primary uppercase">
                {m.n}
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
        <SectionHeading eyebrow="Bonuslar" title="Kursga qo‘shimcha BONUSLAR" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {COURSE_BONUSES.map((b, i) => (
            <Reveal key={b.n} delay={i * 90}>
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
        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Cta href="#aloqa">Kursga ro‘yxatdan o‘tish →</Cta>
          <TelegramCta label="Kurs haqida batafsil →" />
        </Reveal>
      </div>
    </Section>
  );
}

export function Income() {
  const math = [
    { a: "4 ta loyiha", b: "$250", total: "$1000" },
    { a: "2 ta loyiha", b: "$500", total: "$1000" },
    { a: "5 ta loyiha", b: "$200", total: "$1000" },
  ];

  return (
    <Section>
      <SectionHeading
        eyebrow="Maqsad"
        title="Oyiga $1000 daromad — maqsad sifatida."
        subtitle="AI ko‘nikmalarini o‘rganib, ularni xizmat sifatida taklif qilish orqali daromad olish mumkin."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {math.map((m, i) => (
          <Reveal key={m.a} delay={i * 90}>
            <div className="surface-card rounded-3xl p-8 text-center">
              <p className="text-sm text-muted-foreground">{m.a}</p>
              <p className="mt-2 text-sm text-steel">×</p>
              <p className="text-2xl font-extrabold text-foreground">{m.b}</p>
              <div className="chrome-rule my-5" />
              <p className="text-3xl font-black text-primary">{m.total}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-10 max-w-3xl">
        <div className="rounded-3xl border border-border bg-secondary/40 p-7 text-center">
          <p className="text-base font-bold">Bu kafolatlangan daromad emas.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Natija sizning bilim va ko‘nikmalaringiz, xizmat sifatingiz, narxlashingiz, mijoz topish
            qobiliyatingiz, bozor va amaliyotingizga bog‘liq.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}