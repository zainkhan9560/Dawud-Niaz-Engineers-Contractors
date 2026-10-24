import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import CompanyPageShell from "@/components/CompanyPageShell";
import architecture from "@/assets/architectural-drawing-workspace.webp";
import structural from "@/assets/structural-building-works.webp";
import planning from "@/assets/construction-planning-example.webp";
import residential from "@/assets/residential-building-example.webp";
import inspection from "@/assets/construction-site-review-team.webp";
import house from "@/assets/residential-house-transformation.webp";
export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Construction & Design Services in Lahore | Dawud Niaz",
      description:
        "Architectural drawings, structural drawings, cost estimation, house and building construction and renovation in Lahore by Dawud Niaz Engineers and Contractors.",
      path: "/services",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    }),
  component: ServicesPage,
});
const featured = [
  {
    title: "Architectural Drawings",
    slug: "architectural-drawings-lahore",
    desc: "Architectural concepts, floor plans, elevations, working drawings, space planning and design coordination for houses, apartments and commercial buildings.",
    img: architecture,
    alt: "Architectural drawings and design workspace",
  },
  {
    title: "Structural Drawings",
    slug: "structural-drawings-lahore",
    desc: "Building structure drawings and coordination for foundations, columns, beams, slabs, reinforced concrete elements and structural construction requirements.",
    img: structural,
    alt: "Structural building works and concrete structure",
  },
  {
    title: "Construction Cost Estimation",
    slug: "construction-cost-estimation-lahore",
    desc: "Quantity take-offs and preliminary budgeting to help plan materials, labour, finishing and project costs before construction starts.",
    img: planning,
    alt: "Construction planning and estimation documents",
  },
  {
    title: "Building Construction",
    slug: "building-construction-lahore",
    desc: "Residential, apartment and commercial building execution with project coordination, site supervision, quality checks and practical resource planning.",
    img: residential,
    alt: "Residential building construction example",
  },
];
const capabilities = [
  [
    "Civil & Structural Works",
    "Site preparation and earthworks, RCC and concrete works, structural construction, foundations and footings, brickwork and masonry, waterproofing, drainage and external works.",
  ],
  [
    "Design & Architecture",
    "Architectural concepts, planning and layout, residential planning, commercial space planning, industrial layout coordination, working drawings, design coordination and material selection.",
  ],
  [
    "Project Execution & Management",
    "Construction planning, financial coordination, resource planning, equipment deployment, site management, contractor coordination, progress monitoring and quality inspections.",
  ],
  [
    "Renovation & Upgradation",
    "Renovation, refurbishment, flooring, ceiling and finishing works, building improvements and coordinated interior and external works.",
  ],
  [
    "Residential & Commercial Buildings",
    "Planning and construction support for houses, villas, apartments, commercial buildings, offices and plazas.",
  ],
  [
    "Industrial Facilities",
    "Building and facility works including earthworks, RCC structures, flooring, masonry, finishing and related site coordination.",
  ],
];
function ServicesPage() {
  return (
    <CompanyPageShell
      eyebrow="Services · Built around your project"
      title={
        <>
          Engineering services for <span className="text-gold-gradient">buildings that last.</span>
        </>
      }
      intro="Our company profile describes a broad range of design, construction and project-delivery capabilities. The four core services are featured first, followed by supporting services and capabilities."
    >
      <div className="grid gap-7 md:grid-cols-2">
        {featured.map((s, i) => (
          <article
            key={s.title}
            className="group overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                decoding="async"
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow">Core service 0{i + 1}</p>
              <h2 className="mt-2 text-2xl md:text-3xl">{s.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex font-semibold text-gold hover:underline"
                >
                  Learn more →
                </Link>
                <a
                  href="/#contact"
                  className="inline-flex font-semibold text-muted-foreground hover:text-gold"
                >
                  Discuss this service
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-muted-foreground">
        Also see:{" "}
        <Link
          to="/services/$slug"
          params={{ slug: "house-construction-lahore" }}
          className="text-gold hover:underline"
        >
          House construction in Lahore
        </Link>
        {" · "}
        <Link
          to="/services/$slug"
          params={{ slug: "renovation-upgradation-lahore" }}
          className="text-gold hover:underline"
        >
          Renovation and upgradation
        </Link>
        {" · "}
        <Link to="/cost-calculator" className="text-gold hover:underline">
          Cost calculator
        </Link>
      </p>
      <section className="mt-20">
        <p className="eyebrow mb-3">Additional capabilities from the company profile</p>
        <h2 className="max-w-3xl text-3xl md:text-5xl">
          Support at every stage of the{" "}
          <span className="text-gold-gradient">building process.</span>
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([title, desc], i) => (
            <article
              key={title}
              className="border border-border bg-surface p-6 transition-colors hover:bg-card"
            >
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Road and highway projects are intentionally excluded from this service offering, as
          requested.
        </p>
      </section>
      <section className="mt-16 flex flex-col gap-4 bg-surface p-7 md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <h2 className="text-2xl md:text-3xl">Have drawings or a site ready?</h2>
          <p className="mt-2 text-muted-foreground">
            Tell us about your property, covered area and intended scope.
          </p>
        </div>
        <a
          href="/#contact"
          className="inline-flex w-fit bg-gold-gradient px-6 py-3 font-semibold text-primary-foreground"
        >
          Request a consultation
        </a>
      </section>
    </CompanyPageShell>
  );
}
