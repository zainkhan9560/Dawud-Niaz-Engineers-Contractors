import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MapPin, Phone, Mail, Globe, Check, ArrowRight, Quote, Calculator } from "lucide-react";

import logo from "@/assets/logo.png";
import logoMark from "@/assets/logo-mark.png";
import hero from "@/assets/hero.jpg";
import ceo from "@/assets/aun-niaz-profile.jpg";
import siteInspection1 from "@/assets/site-inspection-1.jpeg";
import siteInspection2 from "@/assets/site-inspection-2.jpeg";
import architectureStudio from "@/assets/architecture-studio.jpeg";
import houseTransformation from "@/assets/house-transformation.jpeg";
import svcCommercial from "@/assets/svc-commercial.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";
import svcResidential from "@/assets/svc-residential.jpg";
import svcCivil from "@/assets/svc-civil.jpg";
import svcDesign from "@/assets/svc-design.jpg";
import svcInfra from "@/assets/svc-infrastructure.jpg";
import svcRenovation from "@/assets/svc-renovation.jpg";
import svcManagement from "@/assets/svc-management.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dawud Niaz Associates — Construction & Design Solutions" },
      {
        name: "description",
        content:
          "Commercial, industrial and residential construction, engineering and architecture in Lahore, Pakistan.",
      },
      { property: "og:title", content: "Dawud Niaz Associates — Engineering Ideas. Building with Purpose." },
      {
        property: "og:description",
        content: "Integrated construction, engineering and design solutions from groundwork to completion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Leadership", "#leadership"],
  ["Projects", "#projects"],
  ["Cost Calculator", "#cost-calculator"],
  ["Contact", "#contact"],
];

const services = [
  { t: "Commercial Construction", d: "Offices, retail developments, commercial buildings, institutional facilities and corporate spaces.", img: svcCommercial },
  { t: "Industrial Construction", d: "Industrial buildings, warehouses, foundations, utility structures and supporting infrastructure.", img: svcIndustrial },
  { t: "Residential Construction", d: "Homes, villas, apartments and complete residential development works.", img: svcResidential },
  { t: "Civil & Structural Works", d: "RCC structures, foundations, masonry, concrete works and structural construction.", img: svcCivil },
  { t: "Design & Architecture", d: "Architectural planning, space planning, concept development and project-specific design solutions.", img: svcDesign },
  { t: "Infrastructure Development", d: "Earthworks, roads, drainage, site preparation and external development.", img: svcInfra },
  { t: "Renovation & Upgradation", d: "Modification, rehabilitation and improvement of existing properties.", img: svcRenovation },
  { t: "Project Management", d: "Planning, coordination, site supervision and execution control.", img: svcManagement },
];

const team = [
  { n: "Engr. Muhammad Aun Niaz", r: "CEO", img: ceo, imageAlt: "Engr. Muhammad Aun Niaz at his office" },
  { n: "Saqib Niaz", r: "Managing Director", img: siteInspection1, imageAlt: "Construction site team reviewing project plans" },
  { n: "Shafqat Niaz", r: "Head of Marketing", img: siteInspection2, imageAlt: "Construction site inspection" },
  { n: "Ali Faisal Kalu", r: "Legal Advisor", img: architectureStudio, imageAlt: "Architectural planning workspace" },
];

const projectGallery = [
  { title: "On-Site Engineering Review", detail: "Technical coordination and construction supervision", img: siteInspection1 },
  { title: "Structural Site Inspection", detail: "Reviewing plans and progress on site", img: siteInspection2 },
  { title: "Architectural Planning", detail: "Design development and drawing coordination", img: architectureStudio },
  { title: "Residential Transformation", detail: "From an existing structure to a modern home", img: houseTransformation },
];

const projects = [
  ["Meezan Bank Branch Development", "Civil Works, Interior Finishing & MEP Coordination", "3 Months", "PKR 32M"],
  ["Bank Alfalah Branch Renovation", "Renovation, Flooring, Ceiling & Finishing Works", "2.5 Months", "PKR 24M"],
  ["MCB Bank Commercial Branch Works", "Civil Modification, Interior & External Works", "3 Months", "PKR 28M"],
  ["HBL Office & Branch Upgradation", "Renovation, Civil Works & Finishing", "3 Months", "PKR 35M"],
  ["Industrial Warehouse Development", "Earthworks, RCC Structure & Flooring", "7 Months", "PKR 145M"],
  ["Commercial Plaza Development", "Structure, Masonry, Finishing & External Works", "10 Months", "PKR 190M"],
  ["Corporate Office Development", "Civil, Interior & Architectural Execution", "5 Months", "PKR 68M"],
  ["Residential Villa Project", "Complete Turnkey Construction", "9 Months", "PKR 85M"],
];

const clients = ["Meezan Bank", "HBL", "Bank Alfalah", "MCB", "Allied Bank", "Bank of Punjab", "Jazz", "Zong", "Coca-Cola", "Pepsi", "Nestlé", "Lucky Cement", "Packages Limited", "Engro", "Fauji Cement", "Bahria Town", "DHA", "Metro", "Imtiaz", "McDonald's", "KFC", "Beaconhouse", "The City School"];

const steps = [
  ["Understand", "Project requirements and site conditions."],
  ["Plan", "Design, resources and execution strategy."],
  ["Mobilize", "Team, machinery and materials."],
  ["Execute", "Construction under professional supervision."],
  ["Inspect", "Quality and safety checks throughout the works."],
  ["Deliver", "Completion according to agreed project requirements."],
];

const why = ["Engineering Led Management", "Commercial, Industrial & Residential Capability", "Design & Construction Expertise", "Own Equipment Resources", "46,000 Sq. Ft. Formwork Capacity", "Skilled Technical Workforce", "Quality Focused Execution", "Safety Conscious Operations", "Practical Project Management", "Client Focused Approach"];

function SectionHead({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-10 bg-gold" />{eyebrow}</p>
      <h2 className="text-4xl leading-[1.05] md:text-6xl">
        {title} <span className="text-gold-gradient">{accent}</span>
      </h2>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [area, setArea] = useState("1000");
  const [rate, setRate] = useState("4500");
  const [floors, setFloors] = useState("1");
  const [contingency, setContingency] = useState(true);
  const areaValue = Math.max(0, Number(area) || 0);
  const floorValue = Math.max(1, Number(floors) || 1);
  const baseCost = areaValue * floorValue * (Number(rate) || 0);
  const estimatedCost = Math.round(baseCost * (contingency ? 1.1 : 1));
  const formatPKR = (amount: number) => new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR", maximumFractionDigits: 0 }).format(amount);
  return (
    <div className="overflow-x-hidden">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoMark} alt="Dawud Niaz Associates logo" className="h-11 w-auto" />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide">DAWUD NIAZ</div>
              <div className="text-[0.6rem] tracking-[0.35em] text-gold">ASSOCIATES</div>
            </div>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-gold">{l}</a>
            ))}
            <a href="#contact" className="bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Get a Quote</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground">{l}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center pt-20">
        <img src={hero} alt="Construction site at sunset" className="absolute inset-0 h-full w-full object-cover" />
        <div className="bg-fade absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow mb-6 flex items-center gap-3"><span className="h-px w-10 bg-gold" />Construction & Design Solutions</p>
            <h1 className="text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
              Engineering Ideas.<br /><span className="text-gold-gradient">Building with Purpose.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Integrated construction, engineering and architectural solutions for commercial, industrial and residential developments — from groundwork to completion.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="group inline-flex items-center gap-2 bg-gold-gradient px-7 py-4 font-semibold text-primary-foreground shadow-gold">
                Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#projects" className="inline-flex items-center border border-foreground/30 px-7 py-4 font-semibold transition-colors hover:border-gold hover:text-gold">View Projects</a>
            </div>
          </div>
          <div className="hidden justify-end lg:flex animate-rise [animation-delay:200ms]">
            <img src={logo} alt="Dawud Niaz Associates" className="w-full max-w-md drop-shadow-2xl" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {["Commercial", "Industrial", "Residential", "Design & Architecture"].map((s, i) => (
              <div key={s} className="flex items-center gap-3 border-l border-border px-6 py-5 first:border-l-0">
                <span className="font-display text-2xl text-gold">0{i + 1}</span>
                <span className="text-sm tracking-wide text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="About Us" title="Building with" accent="engineering precision." />
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>Dawud Niaz Associates is a construction and engineering company providing integrated solutions for commercial, industrial and residential developments.</p>
              <p>Our capabilities extend from architectural planning and engineering coordination to civil construction, structural works, infrastructure development and complete project execution.</p>
              <p>With experienced professionals, skilled manpower and an expanding fleet of construction equipment, we focus on practical planning, controlled execution and dependable delivery.</p>
            </div>
          </div>
          <div className="grid content-start gap-px bg-border sm:grid-cols-2">
            {[
              ["Our Mission", "To deliver reliable construction and engineering solutions through professional planning, quality workmanship and responsible execution."],
              ["Our Vision", "To become a trusted construction and engineering partner known for quality, efficiency and long term project value."],
            ].map(([t, d]) => (
              <div key={t} className="bg-surface p-8">
                <h3 className="mb-4 text-2xl text-gold">{t}</h3>
                <p className="text-muted-foreground">{d}</p>
              </div>
            ))}
            <div className="bg-surface p-8 sm:col-span-2">
              <h3 className="mb-5 text-2xl">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {["Integrity", "Quality", "Safety", "Accountability", "Professionalism", "Teamwork", "Client Commitment"].map((v) => (
                  <span key={v} className="border border-gold/40 px-4 py-2 text-sm text-gold-soft">{v}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 bg-surface sm:col-span-2">
              {[["46K", "Sq. Ft. Formwork"], ["8+", "Service Lines"], ["4", "Sectors Served"]].map(([n, l]) => (
                <div key={l} className="border-l border-border p-6 text-center first:border-l-0">
                  <div className="font-display text-4xl text-gold-gradient">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Our Services" title="Complete construction &" accent="development solutions." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.t} className="group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-2xl leading-tight">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </div>
                <span className="bg-gold-gradient absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section id="leadership" className="relative py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold/50" />
            <img src={ceo} alt="Engr. Muhammad Aun Niaz, CEO" className="relative w-full object-cover shadow-gold" />
          </div>
          <div>
            <p className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-10 bg-gold" />Leadership with technical vision</p>
            <h2 className="text-4xl md:text-6xl">Engr. Muhammad <span className="text-gold-gradient">Aun Niaz</span></h2>
            <p className="mt-3 tracking-widest text-muted-foreground uppercase text-sm">CEO / Director Technical</p>
            <Quote className="mt-10 h-10 w-10 text-gold" />
            <blockquote className="mt-4 space-y-4 font-display text-2xl leading-snug text-foreground/90">
              <p>At Dawud Niaz Associates our objective is to combine engineering knowledge with disciplined project execution.</p>
              <p className="text-lg font-sans leading-relaxed text-muted-foreground">We focus on understanding each project's technical requirements and delivering solutions that create lasting value. Our commitment remains centred on quality construction, responsible engineering and relationships built on professional trust.</p>
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-[0.3em] text-gold">
              {["ENGINEERING", "PLANNING", "CONSTRUCTION", "LASTING VALUE"].map((w) => <span key={w}>{w}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Our Leadership" title="Visionary leaders." accent="Strong foundations." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.n} className="group relative overflow-hidden border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={m.img} alt={m.imageAlt} loading="lazy" className="h-full w-full object-cover object-top grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
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
        <SectionHead eyebrow="Selected Projects" title="Proven execution across" accent="multiple sectors." />
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectGallery.map((item) => (
            <article key={item.title} className="overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="divide-y divide-border border-y border-border">
          {projects.map(([n, s, d, v]) => (
            <div key={n} className="group grid gap-2 py-6 transition-colors hover:bg-surface md:grid-cols-[2fr_2fr_1fr_1fr] md:items-center md:px-4">
              <h3 className="text-xl transition-colors group-hover:text-gold">{n}</h3>
              <p className="text-sm text-muted-foreground">{s}</p>
              <p className="text-sm text-muted-foreground">{d}</p>
              <p className="font-display text-2xl text-gold md:text-right">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-border py-12">
        <p className="eyebrow mb-8 text-center">Trusted by leading organisations</p>
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-16 pr-16">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="whitespace-nowrap font-display text-3xl text-muted-foreground/60">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS + WHY */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHead eyebrow="How We Work" title="A structured approach" accent="from start to finish." />
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
            <h2 className="text-4xl md:text-5xl">Building safer, better <span className="text-gold-gradient">& stronger.</span></h2>
            <p className="mt-6 text-muted-foreground">People · Process · Quality · Trust. Strong equipment availability — dumpers, excavators, spider crane, land levellers and concrete mixers — supports faster mobilization and better site control.</p>
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
            <p className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-10 bg-gold" />Plan Your Budget</p>
            <h2 className="text-4xl md:text-6xl">Construction cost <span className="text-gold-gradient">calculator.</span></h2>
            <p className="mt-6 max-w-xl text-muted-foreground">Get a quick preliminary estimate based on covered area, number of floors and finishing level. Actual costs vary with design, materials, location and site conditions.</p>
            <p className="mt-4 text-sm text-muted-foreground">This estimate is for budgeting only and is not a formal quotation.</p>
          </div>
          <div className="border border-border bg-card p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3"><Calculator className="h-6 w-6 text-gold" /><h3 className="text-2xl">Estimate your project</h3></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-muted-foreground">Covered area per floor (sq. ft.)
                <input type="number" min="1" value={area} onChange={(e) => setArea(e.target.value)} className="mt-2 w-full border border-input bg-transparent px-3 py-3 text-foreground outline-none focus:border-gold" />
              </label>
              <label className="block text-sm text-muted-foreground">Number of floors
                <select value={floors} onChange={(e) => setFloors(e.target.value)} className="mt-2 w-full border border-input bg-background px-3 py-3 text-foreground outline-none focus:border-gold"><option value="1">1 floor</option><option value="2">2 floors</option><option value="3">3 floors</option><option value="4">4 floors</option><option value="5">5 floors</option></select>
              </label>
              <label className="block text-sm text-muted-foreground sm:col-span-2">Construction standard
                <select value={rate} onChange={(e) => setRate(e.target.value)} className="mt-2 w-full border border-input bg-background px-3 py-3 text-foreground outline-none focus:border-gold"><option value="3000">Grey structure — PKR 3,000 / sq. ft.</option><option value="4500">Standard finishing — PKR 4,500 / sq. ft.</option><option value="6000">Premium finishing — PKR 6,000 / sq. ft.</option></select>
              </label>
            </div>
            <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-muted-foreground"><input type="checkbox" checked={contingency} onChange={(e) => setContingency(e.target.checked)} className="h-4 w-4 accent-yellow-600" />Include 10% contingency allowance</label>
            <div className="mt-7 border-t border-border pt-6">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Estimated construction budget</p>
              <p className="mt-2 break-words font-display text-3xl text-gold-gradient md:text-4xl">{formatPKR(estimatedCost)}</p>
              <p className="mt-2 text-xs text-muted-foreground">Total covered area: {(areaValue * floorValue).toLocaleString("en-PK")} sq. ft.</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 bg-gold-gradient px-6 py-3 font-semibold text-primary-foreground">Request an accurate quote <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
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
                [Globe, "www.DawudNiazassociates.com", "https://www.dawudniazassociates.com"],
              ].map(([Icon, t, href]) => {
                const I = Icon as typeof MapPin;
                return (
                  <a key={t as string} href={(href as string) ?? undefined} className="flex items-center gap-5 text-lg transition-colors hover:text-gold">
                    <span className="flex h-12 w-12 items-center justify-center border border-gold/50 text-gold"><I className="h-5 w-5" /></span>
                    {t as string}
                  </a>
                );
              })}
            </div>
            <p className="mt-10 text-xs tracking-[0.3em] text-muted-foreground">REGISTERED WITH FBR PAKISTAN</p>
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
            {[["name", "Full name"], ["phone", "Phone number"]].map(([n, p]) => (
              <input key={n} name={n} required placeholder={p} className="w-full border-b border-input bg-transparent py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-gold" />
            ))}
            <textarea name="message" required rows={4} placeholder="Tell us about your project" className="w-full resize-none border-b border-input bg-transparent py-3 outline-none placeholder:text-muted-foreground focus:border-gold" />
            <button className="w-full bg-gold-gradient py-4 font-semibold text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5">Send Enquiry</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <img src={logo} alt="Dawud Niaz Associates" className="h-20 w-auto" />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Dawud Niaz Associates. All rights reserved.</p>
        </div>
      </footer>
      <a href="https://wa.me/923338581087" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp" className="whatsapp-float fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300" >
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current"><path d="M16.04 3C8.9 3 3.1 8.78 3.1 15.9c0 2.27.6 4.49 1.74 6.45L3 29l6.83-1.79a13 13 0 0 0 6.2 1.57h.01c7.13 0 12.94-5.79 12.94-12.91 0-3.45-1.35-6.69-3.79-9.12A12.85 12.85 0 0 0 16.04 3Zm0 23.57h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.05 1.06 1.08-3.95-.25-.41a10.67 10.67 0 0 1-1.64-5.65c0-5.9 4.81-10.7 10.72-10.7 2.86 0 5.55 1.12 7.57 3.14a10.63 10.63 0 0 1 3.13 7.57c0 5.9-4.81 10.66-10.71 10.66Zm5.88-8.01c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37Z" /></svg>
        <span className="whatsapp-tooltip pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-card px-3 py-2 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity">Chat with us on WhatsApp</span>
      </a>
    </div>
  );
}
