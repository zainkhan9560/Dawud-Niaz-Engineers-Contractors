import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import CompanyPageShell from "@/components/CompanyPageShell";
import hero from "@/assets/building-construction-hero.webp";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Us | Construction Company in Lahore | Dawud Niaz",
      description:
        "About Dawud Niaz Associates Engineers and Contractors, a construction company in Lahore: civil engineers, architects and construction consultants delivering design, estimation and building work.",
      path: "/about",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]),
      ],
    }),
  component: AboutPage,
});
const values = [
  ["Integrity", "Professional conduct and clear communication."],
  ["Quality", "Attention to workmanship, documentation and inspection."],
  ["Safety", "Safety-aware planning and responsible site practices."],
  ["Accountability", "Coordination, progress visibility and ownership of tasks."],
  ["Teamwork", "Collaboration across management, technical and site functions."],
  ["Client Commitment", "Understanding project requirements and agreed scope."],
];
function AboutPage() {
  return (
    <CompanyPageShell
      eyebrow="About · Company Overview"
      title={
        <>
          Engineering ideas. <span className="text-gold-gradient">Building with purpose.</span>
        </>
      }
      intro="Dawud Niaz Associates Engineers and Contractors provides building-focused design, cost planning and construction services for residential and industrial projects."
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img
          decoding="async"
          loading="lazy"
          src={hero}
          alt="Illustrative building construction site"
          className="h-full max-h-[360px] w-full object-cover"
        />
        <div>
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Planning, coordination and disciplined execution.
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            From early architectural drawings and structural coordination to construction budgeting
            and on-site delivery, the aim is to make project requirements clearer before work begins
            and maintain coordination as work progresses.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Company history, formal mission statements and certifications should be confirmed by the
            client before being added as factual claims.
          </p>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-3xl md:text-4xl">Values that guide the work</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d]) => (
            <article key={t} className="border border-border bg-surface p-6">
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>
    </CompanyPageShell>
  );
}
