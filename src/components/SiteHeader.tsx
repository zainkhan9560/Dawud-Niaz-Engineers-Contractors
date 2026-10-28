import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, FileDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import logoMark from "@/assets/dawud-niaz-logo-mark.webp";
import ThemeToggle from "@/components/ThemeToggle";
import { services as servicePages } from "@/content/services";

export const BROCHURE_URL = "/Dawud-Niaz-Company-Profile.pdf";

const companyMenu = [
  { label: "Leadership", to: "/leadership" },
  { label: "Our Team", to: "/our-team" },
  { label: "Equipment", to: "/equipment" },
] as const;

const resourcesMenu = [
  { label: "Cost Calculator", to: "/cost-calculator" },
  { label: "Blog & Guides", to: "/blog" },
] as const;

const desktopLink =
  "site-nav-link text-[0.9rem] font-medium text-muted-foreground transition-colors hover:text-gold focus-visible:text-gold";
const mobileLink =
  "block border-b border-border/60 py-3.5 text-base text-muted-foreground transition-colors hover:text-gold";
const dropdownPanel =
  "invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100";
const dropdownItem =
  "block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-gold focus-visible:bg-surface focus-visible:text-gold";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sub, setSub] = useState<"services" | "company" | "resources" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    setSub(null);
  };

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled || open ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      {/* Slim contact bar: collapses once the page is scrolled */}
      <div
        className={`hidden overflow-hidden border-b border-border/60 bg-surface text-xs text-muted-foreground transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            126 J Gulberg III, Lahore, Pakistan
          </p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+923338581087"
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              0333 858 1087
            </a>
            <a
              href="mailto:Info@Dawudniazassociates.com"
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5 text-gold" />
              Info@Dawudniazassociates.com
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Dawud Niaz Associates Engineers and Contractors, home"
        >
          <img
            decoding="async"
            src={logoMark}
            alt="Dawud Niaz Associates Engineers and Contractors company logo"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
          <div className="whitespace-nowrap leading-tight">
            <div className="font-display text-base tracking-wide sm:text-lg">
              DAWUD NIAZ ASSOCIATES
            </div>
            <div className="text-[0.55rem] tracking-[0.28em] text-gold sm:text-[0.6rem] sm:tracking-[0.32em]">
              ENGINEERS AND CONTRACTORS
            </div>
          </div>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center gap-5 min-[1200px]:flex xl:gap-8"
          aria-label="Main"
        >
          <div className="flex flex-1 items-center justify-center gap-5 xl:gap-8">
            <div className="group relative">
              <Link to="/services" className={`${desktopLink} gap-1`}>
                Services
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180" />
              </Link>
              <div className={dropdownPanel}>
                <div className="border border-border bg-card p-2 shadow-2xl">
                  {servicePages.map((x) => (
                    <Link
                      key={x.slug}
                      to="/services/$slug"
                      params={{ slug: x.slug }}
                      className={dropdownItem}
                    >
                      {x.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="mt-1 block border-t border-border px-4 py-2.5 text-sm font-semibold text-gold hover:underline"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/selected-projects" className={desktopLink}>
              Projects
            </Link>

            <Link to="/gallery" className={desktopLink}>
              Gallery
            </Link>

            <div className="group relative">
              <button type="button" className={`${desktopLink} gap-1`} aria-haspopup="true">
                Company
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180" />
              </button>
              <div className={dropdownPanel}>
                <div className="border border-border bg-card p-2 shadow-2xl">
                  {companyMenu.map((m) => (
                    <Link key={m.to} to={m.to} className={dropdownItem}>
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <button type="button" className={`${desktopLink} gap-1`} aria-haspopup="true">
                Resources
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180" />
              </button>
              <div className={dropdownPanel}>
                <div className="border border-border bg-card p-2 shadow-2xl">
                  {resourcesMenu.map((m) => (
                    <Link key={m.to} to={m.to} className={dropdownItem}>
                      {m.label}
                    </Link>
                  ))}
                  <a
                    href={BROCHURE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={dropdownItem}
                  >
                    Company Brochure (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side of the menu: About Us, then Contact Us as the last item */}
          <div className="flex shrink-0 items-center gap-5 xl:gap-8">
            <Link to="/about" className={desktopLink}>
              About Us
            </Link>
            <Link to="/" hash="contact" className={desktopLink}>
              Contact Us
            </Link>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-gold/60 px-4 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground min-[1400px]:inline-flex"
          >
            <FileDown className="h-4 w-4" />
            Brochure
          </a>
          <Link
            to="/"
            hash="contact"
            className="cta-shimmer hidden bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold min-[1200px]:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="header-accent-bar" aria-hidden="true">
        <span />
      </div>

      {/* Mobile and tablet menu */}
      {open && (
        <nav
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background px-6 pb-8 pt-2 min-[1200px]:hidden"
          aria-label="Mobile"
        >
          <div>
            <button
              type="button"
              onClick={() => setSub(sub === "services" ? null : "services")}
              aria-expanded={sub === "services"}
              className={`${mobileLink} flex w-full items-center justify-between text-left`}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${sub === "services" ? "rotate-180 text-gold" : ""}`}
              />
            </button>
            {sub === "services" && (
              <div className="border-b border-border/60 bg-surface/60 py-1 pl-4">
                {servicePages.map((x) => (
                  <Link
                    key={x.slug}
                    to="/services/$slug"
                    params={{ slug: x.slug }}
                    onClick={close}
                    className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {x.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={close}
                  className="block py-2.5 text-sm font-semibold text-gold"
                >
                  View all services →
                </Link>
              </div>
            )}
          </div>

          <Link to="/selected-projects" onClick={close} className={mobileLink}>
            Projects
          </Link>

          <Link to="/gallery" onClick={close} className={mobileLink}>
            Gallery
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setSub(sub === "company" ? null : "company")}
              aria-expanded={sub === "company"}
              className={`${mobileLink} flex w-full items-center justify-between text-left`}
            >
              Company
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${sub === "company" ? "rotate-180 text-gold" : ""}`}
              />
            </button>
            {sub === "company" && (
              <div className="border-b border-border/60 bg-surface/60 py-1 pl-4">
                {companyMenu.map((m) => (
                  <Link
                    key={m.to}
                    to={m.to}
                    onClick={close}
                    className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => setSub(sub === "resources" ? null : "resources")}
              aria-expanded={sub === "resources"}
              className={`${mobileLink} flex w-full items-center justify-between text-left`}
            >
              Resources
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${sub === "resources" ? "rotate-180 text-gold" : ""}`}
              />
            </button>
            {sub === "resources" && (
              <div className="border-b border-border/60 bg-surface/60 py-1 pl-4">
                {resourcesMenu.map((m) => (
                  <Link
                    key={m.to}
                    to={m.to}
                    onClick={close}
                    className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" onClick={close} className={mobileLink}>
            About Us
          </Link>

          <Link to="/" hash="contact" onClick={close} className={mobileLink}>
            Contact Us
          </Link>

          <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-6 flex items-center justify-center gap-2 border border-gold/60 px-5 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            <FileDown className="h-4 w-4" />
            Brochure
          </a>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link
              to="/"
              hash="contact"
              onClick={close}
              className="cta-shimmer flex items-center justify-center bg-gold-gradient px-5 py-3 font-semibold text-primary-foreground"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+923338581087"
              className="flex items-center justify-center gap-2 border border-gold/60 px-5 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              0333 858 1087
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
