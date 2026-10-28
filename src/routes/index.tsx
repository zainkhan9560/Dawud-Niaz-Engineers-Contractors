import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Globe, Check, ArrowRight, Quote } from "lucide-react";

import logo from "@/assets/dawud-niaz-company-logo.webp";
import SiteHeader from "@/components/SiteHeader";
import CostCalculator from "@/components/CostCalculator";
import SiteLinks from "@/components/SiteLinks";
import MutedVideo from "@/components/MutedVideo";
import { siteVideos } from "@/content/videos";
import { services as servicePages, servicePath } from "@/content/services";
import { MAPS_EMBED_URL, REVIEW_LINK, SITE_NAME, businessLd, pageHead, websiteLd } from "@/lib/seo";
import hero from "@/assets/building-construction-hero.webp";
import ceo from "@/assets/ceo-aun-niaz-office.webp";
import saqib from "@/assets/saqib-niaz.webp";
import shafqat from "@/assets/shafqat-niaz.webp";
import aliFaisal from "@/assets/ali-faisal-legal-advisor.webp";
import siteInspection1 from "@/assets/construction-site-review-team.webp";
import siteInspection2 from "@/assets/structural-site-inspection-team.webp";
import architectureStudio from "@/assets/architectural-drawing-workspace.webp";
import houseTransformation from "@/assets/residential-house-transformation.webp";
import heroAnalysisModel from "@/assets/hero-structural-analysis-model.webp";
import heroColumnSite from "@/assets/hero-column-reinforcement-site.webp";
import renovationImg from "@/assets/house-renovation-before-after.webp";
import svcResidential from "@/assets/residential-building-example.webp";
import svcCivil from "@/assets/structural-building-works.webp";
import svcDesign from "@/assets/architectural-design-example.webp";
import svcManagement from "@/assets/construction-planning-example.webp";
import projectStructure from "@/assets/project-building-structure.webp";
import projectFoundation from "@/assets/project-site-foundation.webp";
import projectScaffolding from "@/assets/project-scaffolding-works.webp";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = pageHead({
      title: "Dawud Niaz Engineers & Contractors",
      description:
        "Construction company in Lahore: architects, structural engineers and building contractors. House map design, cost estimation, BOQ, grey structure and turnkey construction.",
      path: "/",
      jsonLd: [
        businessLd(servicePages.map((x) => ({ name: x.title, path: servicePath(x.slug) }))),
        websiteLd(),
      ],
    });
    return {
      ...seo,
      links: [
        ...seo.links,
        { rel: "preload", as: "image", href: projectStructure, type: "image/webp" },
      ],
      meta: [...seo.meta, { name: "robots", content: "index, follow, max-image-preview:large" }],
    };
  },
  component: Index,
});

const HERO_SLIDE_INTERVAL_MS = 3200;

const heroSlides = [
  {
    src: projectStructure,
    alt: "House construction in Lahore: multi-storey building with brick walls and concrete slabs",
    pos: "50% 45%",
  },
  {
    src: projectFoundation,
    alt: "Grey structure construction in Lahore: crew building brick foundation walls",
    pos: "50% 62%",
  },
  {
    src: projectScaffolding,
    alt: "Building contractor in Lahore: scaffolding on a multi-storey building",
    pos: "50% 55%",
  },
  {
    src: heroAnalysisModel,
    alt: "Structural engineer in Lahore: 3D structural analysis model of a multi-storey RCC frame",
    pos: "50% 50%",
  },
  {
    src: heroColumnSite,
    alt: "Grey structure in Lahore: column reinforcement and slab steel at a construction site",
    pos: "50% 55%",
  },
];

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let timer: number | undefined;
    const start = () => {
      stop();
      timer = window.setInterval(
        () => setActive((i) => (i + 1) % heroSlides.length),
        HERO_SLIDE_INTERVAL_MS,
      );
    };
    const stop = () => {
      if (timer !== undefined) window.clearInterval(timer);
      timer = undefined;
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="absolute inset-0" aria-roledescription="carousel" aria-label="Project photos">
      {heroSlides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== active}
          fetchPriority={i === 0 ? "high" : "auto"}
          decoding="async"
          style={{ objectPosition: slide.pos }}
          className={`animate-kenburns absolute inset-0 h-full w-full object-cover transition-opacity duration-[800ms] ease-in-out motion-reduce:transition-none ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

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
  {
    t: "Renovation & Upgradation",
    slug: "renovation-upgradation-lahore",
    d: "Planned house and building renovation: survey, civil modifications, plaster, flooring and finishing, carried out in phases with site supervision.",
    img: renovationImg,
  },
];

const team = [
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

const realProjectPhotos = [
  {
    title: "Building Structure",
    detail: "Brick and concrete structure under construction",
    img: projectStructure,
    pos: "50% 45%",
  },
  {
    title: "Site Foundation Works",
    detail: "Brickwork and materials at an active building site",
    img: projectFoundation,
    pos: "50% 62%",
  },
  {
    title: "Scaffolding Works",
    detail: "Scaffolding set up for multi-storey building work",
    img: projectScaffolding,
    pos: "50% 55%",
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
  center = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  center?: boolean;
}) {
  return (
    <div data-reveal className={`mb-8 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow mb-3 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-gold" />
        {eyebrow}
      </p>
      <h2 className="text-4xl leading-[1.05] md:text-6xl">
        {title} <span className="text-gold-gradient">{accent}</span>
      </h2>
    </div>
  );
}

function Index() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader />

      {/* HERO: compact text block so the slideshow photos stay visible */}
      <section
        id="top"
        className="relative flex min-h-[100svh] items-end pt-24 lg:pt-28"
        aria-labelledby="hero-heading"
      >
        <HeroSlider />
        {/* light shade only behind the text corner and the bottom strip */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background/85 via-background/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-background/55 via-background/10 to-transparent md:w-3/5" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-36 sm:px-6 md:pb-28">
          <div className="max-w-md sm:max-w-lg [text-shadow:0_1px_14px_var(--background)]">
            <p className="eyebrow animate-rise mb-3 flex items-center gap-3 text-[0.65rem]">
              <span className="h-px w-8 bg-gold" />
              Architect · Structural Engineer · Contractor
            </p>
            <h1
              id="hero-heading"
              className="animate-rise text-3xl leading-[1.05] [animation-delay:120ms] sm:text-4xl lg:text-5xl"
            >
              We Don't Just Build Structures, We Build Futures in{" "}
              <span className="text-gold-gradient">Lahore</span>
            </h1>
            <p className="animate-rise mt-3 max-w-sm text-sm text-foreground/85 [animation-delay:220ms] sm:text-base">
              Engineering ideas. Building with purpose: design, estimation and construction for
              houses and commercial buildings.
            </p>
            <div className="animate-rise mt-5 flex flex-wrap gap-3 [animation-delay:320ms]">
              <a
                href="#services"
                className="cta-shimmer group inline-flex items-center gap-2 bg-gold-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold"
              >
                Our Services{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#site-videos"
                className="inline-flex items-center border border-foreground/40 bg-background/40 px-5 py-3 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
              >
                Watch Site Videos
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/60 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {["Commercial", "Industrial", "Residential", "Design & Architecture"].map((s, i) => (
              <div
                key={s}
                className="flex items-center gap-2 border-l border-border px-4 py-3 first:border-l-0 sm:gap-3 sm:px-6"
              >
                <span className="font-display text-xl text-gold">0{i + 1}</span>
                <span className="text-xs tracking-wide text-muted-foreground sm:text-sm">{s}</span>
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

      {/* SERVICES */}
      <section id="services" className="bg-surface py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Our Services"
            title="Building design &"
            accent="construction services."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s, i) => (
              <article
                key={s.t}
                className="group relative overflow-hidden rounded-md border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    decoding="async"
                    src={s.img}
                    alt={`${s.t} in Lahore`}
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
          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="text-2xl md:text-3xl">Construction services in Lahore</h2>
              <p className="mt-3 text-muted-foreground">
                From the first house map to the final handover, our architects, structural engineers
                and civil engineers support homeowners, developers and businesses with design, cost
                planning and building work across Lahore.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {servicePages.map((x) => (
                <li key={x.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: x.slug }}
                    className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gold" />
                    {x.title.replace(/^./, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section id="leadership" className="relative py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-10 px-6 lg:grid-cols-2">
          <div className="relative" data-reveal="left">
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold/50" />
            <img
              src={ceo}
              alt="Engr. Muhammad Aun Niaz, CEO"
              loading="lazy"
              decoding="async"
              style={{ objectPosition: "68% 25%" }}
              className="relative aspect-[4/5] w-full object-cover shadow-md"
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
                At Dawud Niaz Associates Engineers and Contractors our objective is to combine
                engineering knowledge with disciplined project execution.
              </p>
              <p className="text-lg font-sans leading-relaxed text-muted-foreground">
                We focus on understanding each project's technical requirements and delivering
                solutions that create lasting value. Our commitment remains centred on quality
                construction, responsible engineering and relationships built on professional trust.
              </p>
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-[0.3em] text-gold">
              {["ENGINEERING", "PLANNING", "CONSTRUCTION", "LASTING VALUE"].map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-surface py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Our Leadership"
            title="Experienced professionals."
            accent="Building with clarity."
            center
          />
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((m) => (
              <div
                key={m.n}
                className="group relative w-full overflow-hidden border border-border bg-card sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
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
                <div className="flex items-center justify-center border-t-2 border-gold p-5 text-center">
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
      <section id="projects" className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <SectionHead
          eyebrow="Project Gallery"
          title="Building expertise across"
          accent="residential & commercial projects."
        />
        <p className="-mt-3 mb-6 max-w-3xl text-sm text-muted-foreground">
          Explore examples of building types and construction activities. Before publication,
          replace illustrative images with approved photographs of completed projects carried out by
          Dawud Niaz Associates Engineers and Contractors.
        </p>
        <h3 className="mb-5 text-sm uppercase tracking-[0.25em] text-gold">From Our Sites</h3>
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {realProjectPhotos.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  decoding="async"
                  src={item.img}
                  alt={`${item.title}: ${item.detail}`}
                  loading="lazy"
                  style={{ objectPosition: item.pos }}
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
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* SITE VIDEOS */}
      <section id="site-videos" className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHead
            eyebrow="From Our Sites"
            title="Construction work in progress"
            accent="across Pakistan."
          />
          <p className="-mt-3 mb-6 max-w-3xl text-muted-foreground">
            Short, silent clips from active building sites: earthworks, slab reinforcement,
            brickwork and material delivery for house construction and grey structure work.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
            {siteVideos.map((v) => (
              <figure key={v.src} className="min-w-0">
                <MutedVideo
                  src={v.src}
                  poster={v.poster}
                  title={v.title}
                  label={v.caption}
                  className="aspect-[9/16] w-full"
                />
                <figcaption className="mt-2 text-xs text-muted-foreground sm:text-sm">
                  {v.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS + WHY */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
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

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
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
      <section id="cost-calculator" className="bg-surface py-12 md:py-16">
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

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="About Us" title="Building with" accent="engineering precision." />
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>
                Dawud Niaz Associates Engineers and Contractors is a construction company in Lahore
                providing focused building services for homeowners, property developers and
                businesses in Lahore and across Pakistan.
              </p>
              <p>
                Our core services include architectural design, structural engineering, house map
                design, construction cost estimation and BOQ services, grey structure and turnkey
                construction, with civil engineers and construction consultants available to review
                your plans before you build.
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
                [5, "", "Core Services"],
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

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-surface py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:gap-10 px-6 lg:grid-cols-2">
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
            <p className="mt-6 text-xs tracking-[0.3em] text-muted-foreground">
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
                aria-label={p}
                autoComplete={n === "name" ? "name" : "tel"}
                type={n === "phone" ? "tel" : "text"}
                placeholder={p}
                className="w-full border-b border-input bg-transparent py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
              />
            ))}
            <textarea
              name="message"
              required
              aria-label="Tell us about your project"
              rows={4}
              placeholder="Tell us about your project"
              className="w-full resize-none border-b border-input bg-transparent py-3 outline-none placeholder:text-muted-foreground focus:border-gold"
            />
            <button
              type="submit"
              className="w-full bg-gold-gradient py-4 font-semibold text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
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
            alt="Dawud Niaz Associates Engineers and Contractors"
            className="h-20 w-auto"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dawud Niaz Associates Engineers and Contractors. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
