import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/dawud-niaz-logo-mark.webp";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Leadership", "/leadership"],
  ["Selected Projects", "/selected-projects"],
  ["Gallery", "/gallery"],
  ["Equipment", "/equipment"],
  ["Our Team", "/our-team"],
  ["About", "/about"],
] as const;
export default function CompanyPageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              decoding="async"
              src={logoMark}
              alt="Dawud Niaz company mark"
              className="h-12 w-auto"
            />
            <span className="leading-tight">
              <strong className="block font-display text-lg">DAWUD NIAZ</strong>
              <span className="text-[0.62rem] tracking-[0.2em] text-gold">
                ENGINEERS & CONTRACTORS
              </span>
            </span>
          </Link>
          <nav className="hidden flex-wrap justify-end gap-x-5 gap-y-2 lg:flex">
            {links.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="site-nav-link text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/#contact"
              className="bg-gold-gradient px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Get a Quote
            </a>
          </div>
        </div>
        <div className="header-accent-bar" aria-hidden="true">
          <span />
        </div>
        <nav className="flex gap-4 overflow-x-auto border-t border-border px-5 py-2 lg:hidden">
          {links.map(([label, to]) => (
            <Link key={to} to={to} className="shrink-0 text-xs text-muted-foreground">
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <section className="page-hero relative overflow-hidden bg-surface border-b border-border">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-5 py-14 md:py-20">
            <p className="eyebrow animate-rise mb-4">{eyebrow}</p>
            <h1 className="animate-rise max-w-5xl text-4xl leading-tight [animation-delay:120ms] md:text-6xl">
              {title}
            </h1>
            <p className="animate-rise mt-5 max-w-3xl text-base leading-7 text-muted-foreground [animation-delay:240ms] md:text-lg">
              {intro}
            </p>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">{children}</div>
      </main>
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">Dawud Niaz Engineers and Contractors</p>
          <p className="text-sm text-muted-foreground">
            126 J Gulberg III, Lahore · 0333 858 1087 · Info@Dawudniazassociates.com
          </p>
          <Link to="/" className="text-sm text-gold">
            Back to home ↑
          </Link>
        </div>
      </footer>
    </div>
  );
}
