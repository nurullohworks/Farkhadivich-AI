import { useEffect, useState } from "react";
import logo from "@/assets/logo.asset.json";
import { Cta, TELEGRAM_URL } from "./cta";
import { cn } from "@/lib/utils";

/* BU YERGA NAVIGATSIYA BO‘LIMLARINI TAHRIRLANG */
const NAV = [
  { label: "Bosh sahifa", href: "#bosh" },
  { label: "Xizmatlar", href: "#xizmatlar" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Biznes uchun", href: "#biznes" },
  { label: "Kurs", href: "#kurs" },
  { label: "Savol-javob", href: "#savol-javob" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-obsidian/85 py-2 backdrop-blur-xl"
          : "border-b border-transparent py-4",
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <a href="#bosh" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="FARKHADIVICH AI logotipi"
            className={cn(
              "shrink-0 rounded-lg object-cover transition-all duration-500",
              scrolled ? "h-9 w-9" : "h-11 w-11",
            )}
            width={44}
            height={44}
          />
          <span className="truncate text-sm font-extrabold tracking-[0.16em] whitespace-nowrap sm:text-base xl:overflow-visible">
            <span className="text-chrome">FARKHADIVICH</span>{" "}
            <span className="text-primary">AI</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Asosiy menyu">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-chrome/70 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-foreground transition-colors hover:border-primary hover:text-primary 2xl:inline-flex"
          >
            Telegram orqali bog‘lanish
          </a>
          <Cta href="#aloqa" className="hidden px-5 py-2.5 sm:inline-flex">
            Loyiha boshlash →
          </Cta>
          <button
            type="button"
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border text-foreground xl:hidden"
          >
            <span className="sr-only">Menyu</span>
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-transform",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn("block h-0.5 w-5 bg-current transition-opacity", open && "opacity-0")}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-transform",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="mx-5 mt-3 rounded-2xl border border-border bg-obsidian/95 p-3 backdrop-blur-xl sm:mx-8 xl:hidden"
          aria-label="Mobil menyu"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Cta href="#aloqa" className="mt-2 w-full">
            Loyiha boshlash →
          </Cta>
        </nav>
      ) : null}
    </header>
  );
}