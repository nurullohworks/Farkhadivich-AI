import { useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.asset.json";
import {
  Cta,
  PHONE_1,
  PHONE_1_HREF,
  PHONE_2,
  PHONE_2_HREF,
  TELEGRAM_HANDLE,
  TELEGRAM_URL,
  TelegramCta,
} from "./cta";
import { Reveal, Section, SectionHeading } from "./primitives";

const FAQ = [
  {
    q: "AI orqali realistik video nima?",
    a: "Bu — sun’iy intellekt yordamida real hayotga o‘xshash personajlar, muhitlar, mahsulotlar va cinematic sahnalarni yaratish yoki mavjud materiallarni kreativ qayta ishlash usuli.",
  },
  {
    q: "Neyrofotosessiya qanday ishlaydi?",
    a: "Siz fotosuratlaringizni yuborasiz, biz esa AI yordamida turli obraz, kiyim, lokatsiya va konsepsiyalarda professional vizuallar tayyorlaymiz.",
  },
  {
    q: "Bizneslar bilan shartnoma asosida ishlaysizmi?",
    a: "Ha. Uzoq muddatli hamkorlik doirasida biznesingiz uchun muntazam kreativ kontent ishlab chiqamiz. Shartlar loyiha hajmiga qarab kelishiladi.",
  },
  {
    q: "Bir martalik buyurtma berish mumkinmi?",
    a: "Albatta. Bitta video yoki bitta vizual to‘plam uchun ham murojaat qilishingiz mumkin.",
  },
  {
    q: "Video tayyorlash qancha vaqt oladi?",
    a: "Muddat loyihaning murakkabligi, sahnalar soni va tasdiqlash bosqichlariga bog‘liq. Aniq muddatni brif asosida aytamiz.",
  },
  {
    q: "Qanday turdagi reklama videolarini yaratasiz?",
    a: "Mahsulot reklamasi, xizmat taqdimoti, Reels formatidagi kreativlar, storytelling videolar va imij roliklari.",
  },
  {
    q: "Kurs kimlar uchun?",
    a: "Ijodkorlar, frilanserlar, tadbirkorlar va o‘z brendi uchun kontent yaratmoqchi bo‘lganlar uchun.",
  },
  {
    q: "Kursni AI bo‘yicha tajribasi yo‘q odam ham o‘rganishi mumkinmi?",
    a: "Ha. Kurs 0 dan boshlanadi va har bir bosqich amaliy mashqlar bilan tushuntiriladi.",
  },
  {
    q: "Oyiga $1000 daromad kafolatlanadimi?",
    a: "Yo‘q. Bu kafolatlangan daromad emas. Natija sizning ko‘nikmalaringiz, xizmat sifatingiz, narxlash va mijoz topish amaliyotingizga bog‘liq.",
  },
  {
    q: "Instagram akkauntini qadoqlash bonusi nima?",
    a: "Bio, avatar, highlights va xizmatlarni to‘g‘ri ko‘rsatish orqali profilni potensial mijoz uchun tushunarli qilishga qaratilgan qo‘shimcha dars.",
  },
  {
    q: "Qanday ro‘yxatdan o‘taman?",
    a: "Quyidagi shaklni to‘ldiring yoki Telegram orqali yozing — biz siz bilan bog‘lanamiz.",
  },
  {
    q: "Telegram orqali bog‘lanish mumkinmi?",
    a: `Ha, ${TELEGRAM_HANDLE} manzili orqali istalgan vaqtda yozishingiz mumkin.`,
  },
];

export function Faq() {
  return (
    <Section id="savol-javob" className="border-y border-border/60 bg-obsidian/50">
      <SectionHeading
        eyebrow="Savol-javob"
        title="Ko‘p beriladigan savollar"
        subtitle="Savolingizga javob topolmadingizmi? Telegram orqali yozing — tez javob beramiz."
      />
      <Reveal className="mx-auto mt-12 max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="mb-3 overflow-hidden rounded-2xl border border-border bg-secondary/40 px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
      <Reveal className="mt-10 flex justify-center">
        <TelegramCta label="Telegram orqali savol berish →" />
      </Reveal>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section className="relative overflow-hidden">
      <div aria-hidden className="beam animate-glow absolute inset-x-0 top-0 h-96" />
      <div aria-hidden className="grid-bg absolute inset-0 opacity-25" />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="text-sm font-black tracking-[0.3em] text-primary uppercase">
          Kelajakni kutmang. Uni yarating.
        </p>
        <h2 className="mt-6 text-3xl leading-[1.1] font-extrabold text-balance sm:text-5xl">
          <span className="text-chrome">G‘oyangizni birga vizual haqiqatga aylantiramiz.</span>
        </h2>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Nima yaratmoqchi ekaningizni yozing. Biz sizga mos kreativ yechimni taklif qilamiz.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Cta href="#aloqa">Loyiha boshlash →</Cta>
          <TelegramCta />
          <Cta href="#aloqa" variant="ghost">
            Kursga ro‘yxatdan o‘tish →
          </Cta>
        </div>
      </Reveal>
    </Section>
  );
}

const SERVICE_OPTIONS = [
  "AI realistik video",
  "Neyrofotosessiya",
  "AI multfilm",
  "Reklama video",
  "Biznes bilan uzoq muddatli hamkorlik",
  "Kurs",
  "Boshqa",
];

const field =
  "w-full rounded-xl border border-input bg-obsidian/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="aloqa" className="border-t border-border/60">
      <SectionHeading
        eyebrow="Aloqa"
        title="Loyihangizni boshlaymizmi?"
        subtitle="Quyidagi shaklni to‘ldiring — sizga mos kreativ yechim va taklifni tayyorlaymiz."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="surface-card rounded-3xl p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="ism" className="mb-2 block text-sm font-semibold">
                  Ismingiz
                </label>
                <input id="ism" name="ism" required className={field} placeholder="Ismingiz" />
              </div>
              <div>
                <label htmlFor="tel" className="mb-2 block text-sm font-semibold">
                  Telefon raqamingiz
                </label>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  required
                  className={field}
                  placeholder="+998 __ ___ __ __"
                />
              </div>
              <div>
                <label htmlFor="tg" className="mb-2 block text-sm font-semibold">
                  Telegram username
                </label>
                <input id="tg" name="tg" className={field} placeholder="@username" />
              </div>
              <div>
                <label htmlFor="xizmat" className="mb-2 block text-sm font-semibold">
                  Sizga qaysi xizmat kerak?
                </label>
                <select id="xizmat" name="xizmat" className={field} defaultValue="">
                  <option value="" disabled>
                    Tanlang
                  </option>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="tavsif" className="mb-2 block text-sm font-semibold">
                  Loyiha haqida qisqacha yozing
                </label>
                <textarea
                  id="tavsif"
                  name="tavsif"
                  rows={4}
                  className={field}
                  placeholder="Qanday natija kutayotganingizni yozing"
                />
              </div>
              <div>
                <label htmlFor="budjet" className="mb-2 block text-sm font-semibold">
                  Taxminiy budjet
                </label>
                <input id="budjet" name="budjet" className={field} placeholder="Masalan: $300" />
              </div>
              <div>
                <label htmlFor="muddat" className="mb-2 block text-sm font-semibold">
                  Loyihani qachongacha tayyorlash kerak?
                </label>
                <input id="muddat" name="muddat" className={field} placeholder="Masalan: 2 hafta" />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_14px_40px_-16px_var(--primary)] transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
            >
              So‘rov yuborish →
            </button>

            <p aria-live="polite" className="mt-4 text-center text-sm font-semibold text-cyan-glow">
              {sent ? "So‘rovingiz qabul qilindi. Tez orada siz bilan bog‘lanamiz." : ""}
            </p>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card flex h-full flex-col gap-6 rounded-3xl p-8">
            <img
              src={logo.url}
              alt="FARKHADIVICH AI logotipi"
              className="h-16 w-16 rounded-xl object-cover"
              width={64}
              height={64}
              loading="lazy"
            />
            <div>
              <h3 className="text-lg font-bold">To‘g‘ridan-to‘g‘ri bog‘laning</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Eng tezkor javob — Telegram orqali.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Telegram <span className="text-steel">{TELEGRAM_HANDLE}</span>
              </a>
              <a
                href={PHONE_1_HREF}
                className="flex items-center justify-between rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Telefon <span className="text-steel">{PHONE_1}</span>
              </a>
              <a
                href={PHONE_2_HREF}
                className="flex items-center justify-between rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Telefon <span className="text-steel">{PHONE_2}</span>
              </a>
            </div>
            <div className="chrome-rule" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Hali tayyor emasmisiz? Portfolio bilan tanishing yoki xizmatlar bo‘limini ko‘rib
              chiqing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Cta href="#portfolio" variant="ghost" className="px-4 py-2.5 text-xs">
                Portfolio ko‘rish
              </Cta>
              <Cta href="#xizmatlar" variant="ghost" className="px-4 py-2.5 text-xs">
                Xizmatlarni ko‘rish
              </Cta>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}