import logo from "@/assets/logo.asset.json";
import {
  PHONE_1,
  PHONE_1_HREF,
  PHONE_2,
  PHONE_2_HREF,
  TELEGRAM_HANDLE,
  TELEGRAM_URL,
} from "./cta";

const LINKS = [
  { label: "Bosh sahifa", href: "#bosh" },
  { label: "Xizmatlar", href: "#xizmatlar" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Biznes uchun", href: "#biznes" },
  { label: "Kurs", href: "#kurs" },
  { label: "Savol-javob", href: "#savol-javob" },
  { label: "Kontaktlar", href: "#aloqa" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-obsidian px-5 pt-16 pb-32 sm:px-8 lg:pb-16">
      <div aria-hidden className="grid-bg absolute inset-0 opacity-20" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="FARKHADIVICH AI logotipi"
              className="h-12 w-12 rounded-xl object-cover"
              width={48}
              height={48}
              loading="lazy"
            />
            <span className="text-sm font-extrabold tracking-[0.16em]">
              <span className="text-chrome">FARKHADIVICH</span>{" "}
              <span className="text-primary">AI</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            G‘oyangizni kelajak vizualiga aylantiramiz.
          </p>
          <p className="mt-3 text-sm font-bold text-primary">Kelajakni kutmang. Uni yarating.</p>
        </div>

        <nav aria-label="Pastki menyu">
          <h2 className="text-xs font-bold tracking-[0.25em] text-steel uppercase">Bo‘limlar</h2>
          <ul className="mt-5 space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-[0.25em] text-steel uppercase">Aloqa</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Telegram: {TELEGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={PHONE_1_HREF}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {PHONE_1}
              </a>
            </li>
            <li>
              <a
                href={PHONE_2_HREF}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {PHONE_2}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-7xl">
        <div className="chrome-rule" />
        <p className="mt-6 text-center text-xs text-steel">
          © FARKHADIVICH AI. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-obsidian/95 p-3 backdrop-blur-xl lg:hidden">
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl border border-chrome/70 px-4 py-3 text-sm font-bold"
      >
        Telegram
      </a>
      <a
        href="#aloqa"
        className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
      >
        Buyurtma
      </a>
    </div>
  );
}