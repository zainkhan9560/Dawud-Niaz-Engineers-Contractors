import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Globe,
  Check,
  ArrowRight,
  Quote,
  ChevronDown,
} from "lucide-react";

import logo from "@/assets/dawud-niaz-company-logo.webp";
import logoMark from "@/assets/dawud-niaz-logo-mark.webp";
import ThemeToggle from "@/components/ThemeToggle";
import CostCalculator from "@/components/CostCalculator";
import SiteLinks from "@/components/SiteLinks";
import { services as servicePages, servicePath } from "@/content/services";
import { MAPS_EMBED_URL, REVIEW_LINK, SITE_NAME, businessLd, pageHead, websiteLd } from "@/lib/seo";
import hero from "@/assets/building-construction-hero.webp";
import ceo from "@/assets/engr-muhammad-aun-niaz-profile.webp";
import saqib from "@/assets/saqib-niaz.webp";
import shafqat from "@/assets/shafqat-niaz.webp";
import aliFaisal from "@/assets/ali-faisal-legal-advisor.webp";
import siteInspection1 from "@/assets/construction-site-review-team.webp";
import siteInspection2 from "@/assets/structural-site-inspection-team.webp";
import architectureStudio from "@/assets/architectural-drawing-workspace.webp";
import houseTransformation from "@/assets/residential-house-transformation.webp";
import svcResidential from "@/assets/residential-building-example.webp";
import svcCivil from "@/assets/structural-building-works.webp";
import svcDesign from "@/assets/architectural-design-example.webp";
import svcManagement from "@/assets/construction-planning-example.webp";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = pageHead({
      title: "Dawud Niaz Engineers and Contractors | Construction & Design in Lahore",
      description:
        "Architectural drawings, structural drawings, construction cost estimation and building construction in Lahore, Pakistan. Get a free quote from Dawud Niaz Engineers and Contractors.",
      path: "/",
      jsonLd: [
        businessLd(servicePages.map((x) => ({ name: x.title, path: servicePath(x.slug) }))),
        websiteLd(),
      ],
    });
    return {
      ...seo,
      links: [...seo.links, { rel: "preload", as: "image", href: hero, type: "image/webp" }],
      meta: [...seo.meta, { name: "robots", content: "index, follow, max-image-preview:large" }],
    };
  },
  component: Index,
});

const marqueeItems = [
  "Architectural Drawings",
  "Structural Drawings",
  "Cost Estimation",
  "Building Construction",
  "Residential",
  "Commercial",
  "Industrial",
  "Lahore, Pakistan",
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1600);
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const services = [
  {
    t: "Architectural Drawings",
    slug: "architectural-drawings-lahore",
    d: "Thoughtful floor plans, elevations, space planning and architectural drawing sets for houses, apartments and commercial buildings.",
    img: svcDesign,
  },
  {
    t: "Structural Drawings",
    slug: "structural-drawings-lahore",
    d: "Building structure drawing coordination for foundations, columns, beams, slabs and reinforced concrete elements, developed to project requirements.",
    img: svcCivil,
  },
  {
    t: "Construction Cost Estimation",
    slug: "construction-cost-estimation-lahore",
    d: "Preliminary quantities and cost estimates to help clients understand expected materials, labour and construction budgets before work begins.",
    img: svcManagement,
  },
  {
    t: "Building Construction",
    slug: "building-construction-lahore",
    d: "Planned construction for houses, apartments and commercial buildings, with attention to workmanship, coordination, site safety and quality.",
    img: svcResidential,
  },
];

const team = [
  {
    n: "Engr. Muhammad Aun Niaz",
    r: "CEO",
    img: ceo,
    imageAlt: "Engr. Muhammad Aun Niaz at his office",
    pos: "60% 20%",
  },
  {
    n: "Saqib Niaz",
    r: "Managing Director",
    img: saqib,
    imageAlt: "Saqib Niaz, Managing Director",
    pos: "55% 25%",
  },
  {
    n: "Shafqat Niaz",
    r: "Head of Marketing",
    img: shafqat,
    imageAlt: "Shafqat Niaz, Head of Marketing",
    pos: "50% 25%",
  },
  {
    n: "Ali Faisal Kalu",
    r: "Legal Advisor",
    img: aliFaisal,
    imageAlt: "Ali Faisal Kalu, Legal Advisor",
    pos: "60% 20%",
  },
];

const projectGallery = [
  {
    title: "Building Construction",
    detail: "Example visual: residential building structure and site progress",
    img: hero,
  },
  {
    title: "Architectural Planning",
    detail: "Example visual: architectural concepts and drawing coordination",
    img: architectureStudio,
  },
  {
    title: "Structural Works",
    detail: "Example visual: reinforced concrete and structural construction",
    img: svcCivil,
  },
  {
    title: "Residential Design",
    detail: "Example visual: house design and exterior planning",
    img: svcResidential,
  },
  {
    title: "House Transformation",
    detail: "Example visual: residential renovation and exterior improvement",
    img: houseTransformation,
  },
  {
    title: "Site Inspection",
    detail: "Example visual: site review and construction coordination",
    img: siteInspection1,
  },
];

const steps = [
  ["Understand", "Project requirements and site conditions."],
  ["Plan", "Design, resources and execution strategy."],
  ["Mobilize", "Team, machinery and materials."],
  ["Execute", "Construction under professional supervision."],
  ["Inspect", "Quality and safety checks throughout the works."],
  ["Deliver", "Completion according to agreed project requirements."],
];

const why = [
  "Engineering Led Management",
  "Residential & Commercial Building Capability",
  "Design & Construction Expertise",
  "Project-Specific Resource Planning",
  "Clear Planning & Cost Visibility",
  "Skilled Technical Workforce",
  "Quality Focused Execution",
  "Safety Conscious Operations",
  "Practical Project Management",
  "Client Focused Approach",
];

function SectionHead({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <div data-reveal className="mb-14 max-w-3xl">
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span className="h-px w-10 bg-gold" />
        {eyebrow}
      </p>
      <h2 className="text-4xl leading-[1.05] md:text-6xl">
        {title} <span className="text-gold-gradient">{accent}</span>
      </h2>
    </div>
  );
}

const companyMenu = [
  { label: "About Us", to: "/about" },
  { label: "Leadership", to: "/leadership" },
  { label: "Our Team", to: "/our-team" },
  { label: "Equipment", to: "/equipment" },
  { label: "Gallery", to: "/gallery" },
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

function LandingHeader() {
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
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3"
          aria-label="Dawud Niaz Engineers and Contractors, back to top"
        >
          <img
            decoding="async"
            src={logoMark}
            alt="Dawud Niaz Engineers and Contractors company logo"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
          <div className="whitespace-nowrap leading-tight">
            <div className="font-display text-lg tracking-wide">DAWUD NIAZ</div>
            <div className="text-[0.6rem] tracking-[0.35em] text-gold">ENGINEERS & CONTRACTORS</div>
          </div>
        </a>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-5 min-[1100px]:flex xl:gap-9"
          aria-label="Main"
        >
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
              </div>
            </div>
          </div>

          <a href="#contact" className={desktopLink}>
            Contact
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="cta-shimmer hidden bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a Quote
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold min-[1100px]:hidden"
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
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background px-6 pb-8 pt-2 min-[1100px]:hidden"
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

          <a href="#contact" onClick={close} className={mobileLink}>
            Contact
          </a>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="#contact"
              onClick={close}
              className="cta-shimmer flex items-center justify-center bg-gold-gradient px-5 py-3 font-semibold text-primary-foreground"
            >
              Get a Quote
            </a>
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

function Index() {
  return (
    <div className="overflow-x-hidden">
      <LandingHeader />

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center pt-28 lg:pt-32">
        <img
          src={hero}
          alt="Building construction site with reinforced concrete structure"
          fetchPriority="high"
          decoding="async"
          className="animate-kenburns absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-fade absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow animate-rise mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              Engineering, Drawings & Construction
            </p>
            <h1 className="animate-rise text-5xl leading-[0.98] [animation-delay:150ms] md:text-7xl lg:text-8xl">
              Engineering Ideas.
              <br />
              <span className="text-gold-gradient">Building with Purpose.</span>
            </h1>
            <p className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground [animation-delay:300ms]">
              Architectural drawings, structural design coordination, practical construction cost
              estimates and building construction for houses, apartments and commercial properties.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap gap-4 [animation-delay:450ms]">
              <a
                href="#services"
                className="cta-shimmer group inline-flex items-center gap-2 bg-gold-gradient px-7 py-4 font-semibold text-primary-foreground shadow-gold"
              >
                Our Services{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center border border-foreground/30 px-7 py-4 font-semibold transition-colors hover:border-gold hover:text-gold"
              >
                View Gallery
              </a>
            </div>
          </div>
          <div className="hidden justify-end lg:flex animate-rise [animation-delay:200ms]">
            <img
              decoding="async"
              src={logo}
              alt="Dawud Niaz Engineers and Contractors"
              className="animate-float w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
        <a
          href="#about"
          aria-label="Scroll down"
          className="scroll-cue absolute bottom-24 left-1/2 z-10 hidden md:flex"
        >
          <span />
        </a>
        <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {["Commercial", "Industrial", "Residential", "Design & Architecture"].map((s, i) => (
              <div
                key={s}
                className="flex items-center gap-3 border-l border-border px-6 py-5 first:border-l-0"
              >
                <span className="font-display text-2xl text-gold">0{i + 1}</span>
                <span className="text-sm tracking-wide text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div
        className="marquee overflow-hidden border-b border-border bg-surface py-4"
        aria-hidden="true"
      >
        <div className="animate-marquee flex w-max">
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-12 whitespace-nowrap pr-12 text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              {t}
              <span className="text-gold">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="About Us" title="Building with" accent="engineering precision." />
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>
                Dawud Niaz Engineers and Contractors provides focused building services for
                homeowners, property developers and businesses in Lahore and across Pakistan.
              </p>
              <p>
                Our core services include architectural drawings, structural drawings for buildings,
                houses and apartments, construction cost estimation, and construction.
              </p>
              <p>
                We work to turn project requirements into clear drawings, realistic budgets and
                carefully managed construction work.
              </p>
            </div>
          </div>
          <div className="grid content-start gap-px bg-border sm:grid-cols-2">
            {[
              [
                "Our Mission",
                "To deliver reliable construction and engineering solutions through professional planning, quality workmanship and responsible execution.",
              ],
              [
                "Our Vision",
                "To become a trusted construction and engineering partner known for quality, efficiency and long term project value.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="bg-surface p-8">
                <h3 className="mb-4 text-2xl text-gold">{t}</h3>
                <p className="text-muted-foreground">{d}</p>
              </div>
            ))}
            <div className="bg-surface p-8 sm:col-span-2">
              <h3 className="mb-5 text-2xl">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Integrity",
                  "Quality",
                  "Safety",
                  "Accountability",
                  "Professionalism",
                  "Teamwork",
                  "Client Commitment",
                ].map((v) => (
                  <span key={v} className="border border-gold/40 px-4 py-2 text-sm text-gold-soft">
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 bg-surface sm:col-span-2">
              {[
                [46, "K", "Sq. Ft. Formwork"],
                [4, "", "Core Services"],
                [3, "", "Building Types"],
              ].map(([n, sfx, l]) => (
                <div key={l} className="border-l border-border p-6 text-center first:border-l-0">
                  <div className="font-display text-4xl text-gold-gradient">
                    <CountUp to={n as number} suffix={sfx as string} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Our Services"
            title="Building design &"
            accent="construction services."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article
                key={s.t}
                className="group relative overflow-hidden rounded-md border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    decoding="async"
                    src={s.img}
                    alt={s.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="font-display text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-2xl leading-tight">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="transition-colors after:absolute after:inset-0 hover:text-gold"
                    >
                      {s.t}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </div>
                <span className="bg-gold-gradient absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            More services:{" "}
            {servicePages
              .filter((x) =>
                ["house-construction-lahore", "renovation-upgradation-lahore"].includes(x.slug),
              )
              .map((x, i) => (
                <span key={x.slug}>
                  {i > 0 && " · "}
                  <Link
                    to="/services/$slug"
                    params={{ slug: x.slug }}
                    className="text-gold hover:underline"
                  >
                    {x.name}
                  </Link>
                </span>
              ))}
            {" · "}
            <Link to="/services" className="text-gold hover:underline">
              All services →
            </Link>
          </p>
        </div>
      </section>

      {/* CEO */}
      <section id="leadership" className="relative py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div className="relative" data-reveal="left">
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold/50" />
            <img
              src={ceo}
              alt="Engr. Muhammad Aun Niaz, CEO"
              loading="lazy"
              decoding="async"
              className="relative aspect-[4/5] w-full object-cover object-top shadow-md"
            />
          </div>
          <div data-reveal="right">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              Leadership & project delivery
            </p>
            <h2 className="text-4xl md:text-6xl">
              Engr. Muhammad <span className="text-gold-gradient">Aun Niaz</span>
            </h2>
            <p className="mt-3 tracking-widest text-muted-foreground uppercase text-sm">
              Chief Executive Officer
            </p>
            <Quote className="mt-10 h-10 w-10 text-gold" />
            <blockquote className="mt-4 space-y-4 font-display text-2xl leading-snug text-foreground/90">
              <p>
                At Dawud Niaz Engineers and Contractors our objective is to combine engineering
                knowledge with disciplined project execution.
              </p>
              <p className="text-lg font-sans leading-relaxed text-muted-foreground">
                We focus on understanding each project's technical requirements and delivering
                solutions that create lasting value. Our commitment remains centred on quality
                construction, responsible engineering and relationships built on professional trust.
              </p>
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-[0.3em] text-gold">
              {["ENGINEERING", "PLANNING", "CONSTRUCTION", "LASTING VALUE"].map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Our Leadership"
            title="Experienced professionals."
            accent="Building with clarity."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div
                key={m.n}
                className="group relative overflow-hidden border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {m.img ? (
                    <img
                      decoding="async"
                      src={m.img}
                      alt={m.imageAlt}
                      loading="lazy"
                      style={{ objectPosition: m.pos }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted-foreground">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 bg-background font-display text-3xl text-gold">
                        {m.n
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <span className="text-xs uppercase tracking-widest">
                        Portrait to be supplied
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between border-t-2 border-gold p-6">
                  <div>
                    <p className="eyebrow text-[0.65rem]">{m.r}</p>
                    <h3 className="mt-2 text-2xl">{m.n}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
        <SectionHead
          eyebrow="Project Gallery"
          title="Building expertise across"
          accent="residential & commercial projects."
        />
        <p className="-mt-7 mb-10 max-w-3xl text-sm text-muted-foreground">
          Explore examples of building types and construction activities. Before publication,
          replace illustrative images with approved photographs of completed projects carried out by
          Dawud Niaz Engineers and Contractors.
        </p>
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectGallery.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  decoding="async"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 border-l-4 border-gold bg-card p-6 md:p-8">
          <h3 className="text-2xl">Have a project in mind?</h3>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Share your drawings, covered area or project requirements with our team. We can discuss
            the right service, estimated scope and next steps for your building project.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-gold hover:gap-3 transition-all"
          >
            Discuss your project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* PROCESS + WHY */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHead
          eyebrow="How We Work"
          title="A structured approach"
          accent="from start to finish."
        />
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([t, d], i) => (
            <div key={t} className="group bg-background p-8 transition-colors hover:bg-surface">
              <div className="font-display text-5xl text-gold-gradient">0{i + 1}</div>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl">
              Building safer, better <span className="text-gold-gradient">& stronger.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              People · Planning · Quality · Trust. We focus on clear documentation, practical cost
              planning and well-coordinated building work.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {why.map((w) => (
              <li key={w} className="flex items-start gap-3 border-b border-border pb-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONSTRUCTION COST CALCULATOR */}
      <section id="cost-calculator" className="bg-surface py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              Plan Your Budget
            </p>
            <h2 className="text-4xl md:text-6xl">
              Construction cost <span className="text-gold-gradient">calculator.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Get a quick preliminary estimate based on covered area, number of floors and finishing
              level. Actual costs vary with design, materials, location and site conditions.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Illustrative budgeting only. Final rates depend on current material prices, location,
              design and site conditions; request a formal quotation before making decisions.
            </p>
            <Link
              to="/cost-calculator"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold hover:underline"
            >
              How this estimate works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-surface py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Contact Us" title="Let's build your" accent="next project." />
            <div className="space-y-6">
              {[
                [MapPin, "126 J Gulberg III, Lahore", null],
                [Phone, "0333 858 1087", "tel:+923338581087"],
                [Mail, "Info@Dawudniazassociates.com", "mailto:Info@Dawudniazassociates.com"],
                [Globe, "www.DawudNiazassociates.com", "https://www.DawudNiazassociates.com"],
              ].map(([Icon, t, href]) => {
                const I = Icon as typeof MapPin;
                return (
                  <a
                    key={t as string}
                    href={(href as string) ?? undefined}
                    className="flex items-center gap-5 text-lg transition-colors hover:text-gold"
                  >
                    <span className="flex h-12 w-12 items-center justify-center border border-gold/50 text-gold">
                      <I className="h-5 w-5" />
                    </span>
                    {t as string}
                  </a>
                );
              })}
            </div>
            <p className="mt-10 text-xs tracking-[0.3em] text-muted-foreground">
              REGISTERED WITH FBR PAKISTAN
            </p>
            <div className="mt-8 overflow-hidden border border-border">
              <iframe
                src={MAPS_EMBED_URL}
                title={`${SITE_NAME} on Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </div>
            <a
              href={REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-gold/60 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Review us on Google <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              window.location.href = `mailto:Info@Dawudniazassociates.com?subject=${encodeURIComponent("Project enquiry from " + f.get("name"))}&body=${encodeURIComponent(String(f.get("message")) + "\n\nPhone: " + f.get("phone"))}`;
            }}
            className="space-y-5 border border-border bg-card p-8 md:p-10"
          >
            <h3 className="text-3xl">Request a Quote</h3>
            {[
              ["name", "Full name"],
              ["phone", "Phone number"],
            ].map(([n, p]) => (
              <input
                key={n}
                name={n}
                required
                placeholder={p}
                className="w-full border-b border-input bg-transparent py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
              />
            ))}
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project"
              className="w-full resize-none border-b border-input bg-transparent py-3 outline-none placeholder:text-muted-foreground focus:border-gold"
            />
            <button className="w-full bg-gold-gradient py-4 font-semibold text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <SiteLinks />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
          <img
            decoding="async"
            loading="lazy"
            src={logo}
            alt="Dawud Niaz Engineers and Contractors"
            className="h-20 w-auto"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dawud Niaz Engineers and Contractors. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}