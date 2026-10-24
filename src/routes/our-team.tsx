import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import CompanyPageShell from "@/components/CompanyPageShell";
import ceo from "@/assets/engr-muhammad-aun-niaz-profile.webp";
import site from "@/assets/structural-site-inspection-team.webp";
export const Route = createFileRoute("/our-team")({
  head: () =>
    pageHead({
      title: "Our Team | Dawud Niaz Engineers and Contractors",
      description:
        "Meet the technical, management and site-operation functions that deliver projects at Dawud Niaz Engineers and Contractors.",
      path: "/our-team",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Our Team", path: "/our-team" },
        ]),
      ],
    }),
  component: TeamPage,
});
const groups = [
  {
    title: "Management",
    desc: "CEO / Director Technical, Managing Director, commercial management and administration support.",
  },
  {
    title: "Engineering & Technical Team",
    desc: "Civil engineers, site engineers, architects, design professionals, quantity surveyors, planning personnel and QA/QC support.",
  },
  {
    title: "Site & Operational Workforce",
    desc: "Foremen, masons, carpenters, electricians, plumbers, equipment operators, labour and site support staff.",
  },
];
function TeamPage() {
  return (
    <CompanyPageShell
      eyebrow="Our Team · Team Strength"
      title={
        <>
          A coordinated team behind <span className="text-gold-gradient">every project.</span>
        </>
      }
      intro="The company profile describes management, engineering and technical roles, and site and operational workforce categories. This page presents those functions without inventing individual names for unlisted team members."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((g, i) => (
          <article key={g.title} className="border border-border bg-card">
            <img
              decoding="async"
              src={i === 0 ? ceo : site}
              alt={
                i === 0
                  ? "Company leadership portrait"
                  : "Construction site team, illustrative image"
              }
              className="h-52 w-full object-cover object-top"
              loading="lazy"
            />
            <div className="p-6">
              <p className="eyebrow">Team 0{i + 1}</p>
              <h2 className="mt-2 text-2xl">{g.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{g.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 bg-surface p-7">
        <h2 className="text-2xl">People, process, quality and trust</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
          The team structure and functions above follow the categories presented in the supplied
          company profile. Please confirm the current team composition before treating this as a
          staff directory.
        </p>
      </div>
    </CompanyPageShell>
  );
}
