import { createFileRoute, Link } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import CostCalculator, { CALCULATOR_STANDARDS } from "@/components/CostCalculator";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cost-calculator")({
  head: () =>
    pageHead({
      title: "Construction Cost Calculator Pakistan | Dawud Niaz Engineers",
      description:
        "Free construction cost calculator for houses and buildings in Pakistan. Estimate a budget by covered area, floors and finishing level, then request an accurate quote.",
      path: "/cost-calculator",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Cost Calculator", path: "/cost-calculator" },
        ]),
      ],
    }),
  component: CostCalculatorPage,
});

const factors = [
  "Design and number of floors: complex layouts, basements and large spans cost more to build.",
  "Soil and foundation requirements: weak soil can need deeper or heavier foundations.",
  "Materials and finishing: tiles, joinery, fixtures and paint can change the total a lot.",
  "Current prices: cement, steel, bricks and labour rates change over time.",
  "Site access and location: delivery, storage space and working conditions affect cost.",
  "Scope: boundary walls, landscaping, solar and other external works are often extra.",
];

const faqs = [
  {
    q: "How is the estimate calculated?",
    a: "Covered area per floor multiplied by the number of floors and the rate for the construction standard you pick. If the contingency box is ticked, 10% is added.",
  },
  {
    q: "Is this a quotation?",
    a: "No. It is a quick budgeting tool. A quotation needs your drawings, specifications and current rates, which is why we prepare a written estimate on request.",
  },
  {
    q: "What does grey structure include?",
    a: "Grey structure usually means the structural frame, walls and roof before finishing works. Exact inclusions vary between contracts, so always ask for the scope in writing.",
  },
  {
    q: "Why add a contingency?",
    a: "Prices and site conditions change during a project. A contingency allowance helps you absorb small changes without stopping work.",
  },
];

function CostCalculatorPage() {
  return (
    <CompanyPageShell
      eyebrow="Plan your budget"
      title={
        <>
          Construction cost <span className="text-gold-gradient">calculator.</span>
        </>
      }
      intro="Get a quick preliminary estimate for a house or building in Pakistan based on covered area, number of floors and finishing level. Use it to plan, then ask us for an accurate quote."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <h2 className="text-3xl md:text-4xl">How the estimate works</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Enter the covered area of one floor, choose the number of floors and the construction
            standard. The calculator multiplies them by a per-square-foot rate and can add a 10%
            contingency allowance.
          </p>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            {CALCULATOR_STANDARDS.map((s) => (
              <li key={s.rate} className="flex justify-between gap-4 border-b border-border pb-2">
                <span>{s.label}</span>
                <span className="font-semibold text-foreground">
                  PKR {s.rate.toLocaleString("en-PK")} / sq. ft.
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            These are simple indicative rates for quick budgeting. Final rates depend on current
            material prices, location, design and site conditions.
          </p>
        </div>
        <CostCalculator />
      </div>

      <section className="mt-20 max-w-4xl">
        <p className="eyebrow mb-3">Good to know</p>
        <h2 className="text-3xl md:text-4xl">What affects construction cost</h2>
        <ul className="mt-6 space-y-3 text-muted-foreground">
          {factors.map((f) => (
            <li key={f} className="border-l-2 border-gold/60 pl-4 leading-7">
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-border pb-6">
              <h3 className="text-xl">{f.q}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-4 bg-surface p-7 md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <h2 className="text-2xl md:text-3xl">Want an accurate number?</h2>
          <p className="mt-2 text-muted-foreground">
            Share your drawings or plot details. Our{" "}
            <Link
              to="/services/$slug"
              params={{ slug: "construction-cost-estimation-lahore" }}
              className="text-gold hover:underline"
            >
              cost estimation service
            </Link>{" "}
            prepares a written estimate with a clear scope. See also{" "}
            <Link
              to="/services/$slug"
              params={{ slug: "house-construction-lahore" }}
              className="text-gold hover:underline"
            >
              house construction in Lahore
            </Link>
            .
          </p>
        </div>
        <a
          href="/#contact"
          className="shrink-0 bg-gold-gradient px-6 py-3 text-center font-semibold text-primary-foreground"
        >
          Request a quote
        </a>
      </section>
    </CompanyPageShell>
  );
}
