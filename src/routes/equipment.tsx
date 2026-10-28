import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import CompanyPageShell from "@/components/CompanyPageShell";
import buildingSite from "@/assets/equipment-building-site.webp";
import earthmoving from "@/assets/equipment-earthmoving-machinery.webp";
import largeSite from "@/assets/equipment-large-construction-site.webp";
import residential from "@/assets/residential-building-example.webp";

export const Route = createFileRoute("/equipment")({
  head: () =>
    pageHead({
      title: "Equipment & Resources | Dawud Niaz Associates Engineers and Contractors",
      description:
        "Construction equipment, machinery and site resource capabilities of Dawud Niaz Associates Engineers and Contractors in Lahore.",
      path: "/equipment",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Equipment", path: "/equipment" },
        ]),
      ],
    }),
  component: EquipmentPage,
});

const rows = [
  {
    name: "Building Construction Equipment",
    detail:
      "On-site construction activity for residential building projects, with teams coordinating finishing work and site operations.",
    img: buildingSite,
    position: "object-center",
  },
  {
    name: "Earthmoving Machinery",
    detail:
      "Excavators, dump trucks and earthmoving machinery used in ground preparation and construction-site material handling. Image illustrates equipment types and is not an inventory confirmation.",
    img: earthmoving,
    position: "object-center",
  },
  {
    name: "Large-Scale Site Operations",
    detail:
      "Heavy machinery, concrete operations and site logistics coordinated around the requirements and scale of each project.",
    img: largeSite,
    position: "object-center",
  },
  {
    name: "Building Execution",
    detail:
      "Resources and construction activities coordinated for residential and industrial building work.",
    img: residential,
    position: "object-center",
  },
];

function EquipmentPage() {
  return (
    <CompanyPageShell
      eyebrow="Equipment · Resources"
      title={
        <>
          Resources that support <span className="text-gold-gradient">project execution.</span>
        </>
      }
      intro="Explore representative visuals of construction sites, earthmoving machinery and project operations. Images illustrate equipment and work types; they do not confirm ownership of specific machinery."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {rows.map((r, i) => (
          <article
            key={r.name}
            className="equipment-card group overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="relative aspect-[2/1] overflow-hidden bg-surface">
              <img
                decoding="async"
                src={r.img}
                alt={`${r.name} representative construction image`}
                className={`h-full w-full ${r.position} object-cover transition-transform duration-700 group-hover:scale-[1.04]`}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gold-gradient" />
              <span className="absolute left-3 top-3 bg-background/85 px-3 py-1 text-xs font-semibold tracking-widest text-gold backdrop-blur">
                0{i + 1}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h2 className="text-xl md:text-2xl">{r.name}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Before publishing claims about ownership, availability or capacity, confirm the current
        equipment inventory with the company.
      </p>
    </CompanyPageShell>
  );
}
