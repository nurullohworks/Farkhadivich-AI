import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Scroll reveal wrapper (cinematik fade + up) */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 text-3xl leading-[1.1] font-extrabold text-balance sm:text-4xl md:text-5xl">
        <span className="text-chrome">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 px-5 py-20 sm:px-8 md:py-28", className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

/** Metallic diagonal accent inspired by the logo */
export function DiagonalAccent({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-60",
        className,
      )}
    >
      <div className="absolute top-1/4 -left-24 h-px w-[46%] rotate-[-18deg] bg-gradient-to-r from-transparent via-chrome to-transparent" />
      <div className="absolute right-0 bottom-1/3 h-px w-[38%] rotate-[16deg] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
    </div>
  );
}

/** Editable media placeholder — egasi bu yerga o'z media faylini qo'yadi */
export function MediaPlaceholder({
  label,
  hint,
  className,
}: {
  label: string;
  hint: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group/media relative flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-chrome/60 bg-obsidian/70 p-8 text-center transition-colors hover:border-primary/70",
        className,
      )}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 rounded-2xl opacity-40" />
      <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/50 text-2xl leading-none text-primary shadow-[0_0_30px_-8px_var(--primary)]">
        +
      </span>
      <p className="relative text-xs font-bold tracking-[0.2em] text-steel uppercase">
        {label}
      </p>
      <p className="relative max-w-xs text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}