import { Cta, TelegramCta } from "./cta";
import { MediaPlaceholder, Reveal, Section, SectionHeading } from "./primitives";

const PROBLEMS = [
  {
    n: "01",
    title: "Oddiy kontentlar orasida yo‘qolib ketish",
    text: "Bir xil vizuallar va standart kontent brendingizni boshqalardan ajratib ko‘rsatishni qiyinlashtiradi.",
  },
  {
    n: "02",
    title: "An’anaviy videoproduksiya qimmat",
    text: "Studiyalar, lokatsiyalar, kamera, model va katta ishlab chiqarish jamoasi har bir kreativni qimmatlashtirishi mumkin.",
  },
  {
    n: "03",
    title: "Auditoriya e’tiborini jalb qilish qiyinlashmoqda",
    text: "Odamlar soniyasiga o‘nlab kontent ko‘radi. Sizning vizualingiz birinchi lahzadanoq e’tibor tortishi kerak.",
  },
];

const SERVICES = [
  {
    n: "01",
    title: "AI orqali realistik video",
    text: "Sun’iy intellekt yordamida real hayotga o‘xshash sahnalar, personajlar, mahsulotlar va cinematic videolar yaratish.",
    uses: ["reklama", "Reels", "mahsulot videosi", "storytelling", "shaxsiy brend"],
  },
  {
    n: "02",
    title: "Neyrofotosessiya",
    text: "AI yordamida fotosuratlar asosida professional, kreativ va turli konsepsiyadagi vizual obrazlar yaratish.",
    uses: ["shaxsiy brend", "Instagram", "reklama", "professional portret", "kreativ kampaniyalar"],
  },
  {
    n: "03",
    title: "AI multfilmlar va animatsiyalar",
    text: "AI yordamida personajlar, hikoyalar va qiziqarli animatsion videolar yaratish.",
    uses: ["personajlar", "hikoya", "animatsiya"],
  },
  {
    n: "04",
    title: "Biznes uchun kreativ kontent",
    text: "Biznesingiz uchun muntazam reklama, social media va vizual kontent ishlab chiqarish.",
    uses: ["muntazam kontent", "social media", "kampaniyalar"],
  },
  {
    n: "05",
    title: "Reklama videolari",
    text: "Mahsulot yoki xizmatni e’tibor tortadigan kreativ videoga aylantirish.",
    uses: ["mahsulot", "xizmat", "kreativ"],
  },
  {
    n: "06",
    title: "Shaxsiy brend kontenti",
    text: "Ekspertlar va tadbirkorlar uchun professional, zamonaviy va esda qoladigan vizual kontent.",
    uses: ["ekspert", "tadbirkor", "portret"],
  },
];

const PIPELINE = [
  "G‘oya",
  "Ssenariy",
  "Vizual konsepsiya",
  "AI orqali yaratish",
  "Montaj",
  "Tayyor video",
];

export function Problems() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Muammo"
        title="Kontentingiz bormi? Ammo u yetarlicha e’tibor jalb qilmayaptimi?"
        subtitle="Bugungi raqamli muhitda shunchaki kontent yetarli emas. Brend e’tibor tortishi, ishonch uyg‘otishi va esda qolishi kerak."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.n} delay={i * 90}>
            <article className="surface-card h-full rounded-3xl p-8">
              <span className="text-sm font-black tracking-[0.3em] text-primary">{p.n}</span>
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
  return (
    <Section id="xizmatlar">
      <SectionHeading
        eyebrow="Yechim"
        title="Brendingizni ajratib ko‘rsatish uchun kreativ yechimlar"
        subtitle="Har bir xizmat biznes maqsadingizga qarab tanlanadi va kreativ konsepsiya asosida ishlab chiqiladi."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} delay={(i % 3) * 90}>
            <article className="surface-card flex h-full flex-col rounded-3xl p-8">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <span aria-hidden className="block h-3 w-3 rotate-45 border-2 border-current" />
                </span>
                <span className="text-xs font-black tracking-[0.3em] text-chrome">{s.n}</span>
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
                Xizmatni ko‘rish →
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function AiVideoExplainer() {
  return (
    <Section className="border-y border-border/60 bg-obsidian/50">
      <SectionHeading
        eyebrow="Tushuntirish"
        title="AI orqali realistik video nima?"
        subtitle="AI orqali realistik video — sun’iy intellekt texnologiyalari yordamida real hayotga o‘xshash personajlar, muhitlar, mahsulotlar, kamera harakatlari va cinematic sahnalarni yaratish yoki mavjud materiallarni kreativ tarzda qayta ishlash usulidir."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="surface-card h-full rounded-3xl p-8">
            <h3 className="text-lg font-bold">Qanday holatlarda ishlatiladi?</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "realistik personajlar",
                "mahsulot reklamasi",
                "cinematic sahnalar",
                "virtual muhitlar",
                "storytelling",
                "Reels",
                "reklama kreativlari",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {x}
                </li>
              ))}
            </ul>
            <div className="chrome-rule my-7" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Natija — byudjetni tejagan holda, katta produksiyaga o‘xshash darajadagi vizual
              sifat.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="surface-card h-full rounded-3xl p-8">
            <h3 className="text-lg font-bold">Ishlab chiqarish bosqichlari</h3>
            <ol className="mt-6 space-y-3">
              {PIPELINE.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 px-5 py-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-sm font-black text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function NeuroPhoto() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Tushuntirish"
        title="Neyrofotosessiya nima?"
        subtitle="Neyrofotosessiya — AI texnologiyalari yordamida sizning fotosuratlaringiz asosida turli obrazlar, kiyimlar, lokatsiyalar va kreativ konsepsiyalarda professional vizuallar yaratish usuli."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="surface-card h-full rounded-3xl p-8">
            <h3 className="text-lg font-bold">Qayerda foydali?</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "shaxsiy brend",
                "Instagram",
                "reklama",
                "professional portretlar",
                "fashion",
                "kreativ kampaniyalar",
                "mahsulot kontenti",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl border border-border bg-secondary/40 p-5 text-xs leading-relaxed text-steel">
              Neyrofotosessiya — bu faqat AI yordamidagi kreativ vizual ishlab chiqarish usuli.
              Bu tibbiy yoki ilmiy xizmat emas.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="surface-card grid h-full gap-5 rounded-3xl p-8 sm:grid-cols-2">
            {/* BU YERGA "OLDIN" RASMINI QO‘YING */}
            <MediaPlaceholder
              label="Oldin"
              hint="Bu yerga mijozning original fotosuratini joylashtiring."
              className="min-h-64"
            />
            {/* BU YERGA "KEYIN" RASMINI QO‘YING */}
            <MediaPlaceholder
              label="Keyin"
              hint="Bu yerga AI orqali yaratilgan natija rasmini joylashtiring."
              className="min-h-64"
            />
            <div className="sm:col-span-2">
              <TelegramCta className="w-full" label="Neyrofotosessiya haqida savol berish →" />
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
        <Cta href="#portfolio" variant="ghost">
          Portfolio ko‘rish →
        </Cta>
        <Cta href="#aloqa" variant="primary">
          Maslahat olish →
        </Cta>
      </Reveal>
    </Section>
  );
}