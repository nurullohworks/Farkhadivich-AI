import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const TELEGRAM_URL = "https://t.me/farkhadivichai";
export const TELEGRAM_HANDLE = "@farkhadivichai";
export const PHONE_1 = "+998 93 760 77 27";
export const PHONE_2 = "+998 94 996 77 60";
export const PHONE_1_HREF = "tel:+998937607727";
export const PHONE_2_HREF = "tel:+998949967760";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";

const styles = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_14px_40px_-16px_var(--primary)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_20px_54px_-16px_var(--primary)]",
  ghost:
    "border border-border bg-secondary/50 text-foreground hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary",
  chrome:
    "border border-chrome/70 bg-graphite text-foreground hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_18px_44px_-22px_var(--primary)]",
} as const;

export function Cta({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </a>
  );
}

export function TelegramCta({
  variant = "chrome",
  className,
  label = "Telegram orqali bog‘lanish →",
}: {
  variant?: keyof typeof styles;
  className?: string;
  label?: string;
}) {
  return (
    <Cta href={TELEGRAM_URL} external variant={variant} className={className}>
      {label}
    </Cta>
  );
}