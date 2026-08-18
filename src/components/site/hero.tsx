import logo from "@/assets/logo.asset.json";
import { Cta, TelegramCta } from "./cta";

const TRUST = [
  "AI kreativ ishlab chiqarish",
  "Biznes kontenti",
  "Shaxsiy brend",
  "Uzoq muddatli hamkorlik",
];

export function Hero() {
  return (
    <section id="bosh" className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 md:pt-44 md:pb-28">
      <div aria-hidden className="beam animate-glow absolute inset-x-0 top-0 h-[560px]" />
      <div aria-hidden className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
            AI Creative Studio
          </span>
          <h1
            className="animate-rise mt-6 text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl md:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            <span className="text-chrome">G‘oyangizni kelajak vizualiga aylantiramiz.</span>
          </h1>
          <p
            className="animate-rise mt-5 text-lg font-bold text-primary sm:text-xl"
            style={{ animationDelay: "220ms" }}
          >
            Kelajakni kutmang. Uni yarating.
          </p>
          <p
            className="animate-rise mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            FARKHADIVICH AI — bizneslar, brendlar va ijodkorlar uchun realistik AI videolar,
            neyrofotosessiya, kreativ animatsiyalar va zamonaviy vizual kontent yaratadi.
          </p>
          <div
            className="animate-rise mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "380ms" }}
          >
            <Cta href="#aloqa">Loyiham uchun taklif olish →</Cta>
            <TelegramCta />
          </div>
          <ul
            className="animate-rise mt-10 flex flex-wrap gap-x-6 gap-y-3"
            style={{ animationDelay: "460ms" }}
          >
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-steel">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-[0_0_12px_var(--cyan-glow)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise relative" style={{ animationDelay: "200ms" }}>
          <div
            aria-hidden
            className="animate-glow absolute -inset-10 rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_65%)] opacity-30 blur-2xl"
          />
          <div className="relative rounded-[28px] border border-chrome/40 bg-obsidian/80 p-4 shadow-[var(--shadow-premium)]">
            <div aria-hidden className="grid-bg absolute inset-0 rounded-[28px] opacity-30" />
            <img
              src={logo.url}
              alt="FARKHADIVICH AI — metall va elektr ko‘k rangdagi futuristik logotip"
              className="relative w-full rounded-2xl object-cover"
              width={640}
              height={640}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-10 -bottom-1 h-24 bg-[radial-gradient(60%_100%_at_50%_100%,var(--primary),transparent_70%)] opacity-50 blur-xl"
            />
          </div>
          <div className="chrome-rule mt-6 w-full" />
        </div>
      </div>
    </section>
  );
}