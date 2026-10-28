import { createFileRoute } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import { BUSINESS, breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Use | Dawud Niaz Associates Engineers and Contractors",
      description:
        "Terms for using the Dawud Niaz Associates Engineers and Contractors website, including the cost calculator and published guides.",
      path: "/terms",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ]),
      ],
    }),
  component: Page,
});

const sections: { heading: string; body: string }[] = [
  {
    heading: "General information only",
    body: "The pages, guides and blog articles on this website give general information about construction and engineering. They are not a substitute for project-specific professional advice, approved drawings or the requirements of the relevant authority.",
  },
  {
    heading: "Cost calculator and estimates",
    body: "Figures from the cost calculator are indicative only. Real costs depend on drawings, specifications, materials, site conditions and market rates, and are confirmed only in a written quotation or agreement.",
  },
  {
    heading: "Services and agreements",
    body: "Any design, estimation or construction work is provided under a separate written agreement or quotation that sets out scope, price and timeline. Nothing on this website is an offer that binds either party.",
  },
  {
    heading: "Content and images",
    body: "The text, drawings and images on this website belong to Dawud Niaz Associates Engineers and Contractors or are used with permission. Please do not copy or republish them without asking us first.",
  },
  {
    heading: "External links",
    body: "This website links to other sites such as Google and Facebook. We are not responsible for their content or privacy practices.",
  },
  {
    heading: "Changes",
    body: "We may update these terms and the website content from time to time. The date at the top of this page shows the latest update.",
  },
];

function Page() {
  return (
    <CompanyPageShell
      eyebrow="Legal"
      title="Terms of Use"
      intro="Please read these terms before using this website."
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <p className="text-sm text-muted-foreground">Last updated: 28 October 2026</p>
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl">{s.heading}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{s.body}</p>
          </section>
        ))}
        <p className="leading-7 text-muted-foreground">
          Questions? Email{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-gold hover:underline">
            {BUSINESS.email}
          </a>{" "}
          or call {BUSINESS.phoneDisplay}.
        </p>
      </div>
    </CompanyPageShell>
  );
}
