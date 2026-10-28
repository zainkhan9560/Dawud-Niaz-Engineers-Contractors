import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteLinks from "@/components/SiteLinks";

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
      <SiteHeader />
      <div className="h-[5.25rem] lg:h-[7.75rem]" aria-hidden="true" />
      <main id="main-content" tabIndex={-1} className="outline-none">
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
        <SiteLinks />
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">Dawud Niaz Associates Engineers and Contractors</p>
          <p className="text-sm text-muted-foreground">
            126 J Gulberg III, Lahore · 0333 858 1087 · Info@Dawudniazassociates.com
          </p>
          <div className="flex items-center gap-5 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-gold">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-gold">
              Terms
            </Link>
            <Link to="/" className="text-gold">
              Back to home ↑
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
