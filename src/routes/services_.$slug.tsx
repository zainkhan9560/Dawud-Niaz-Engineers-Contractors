import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import CompanyPageShell from "@/components/CompanyPageShell";
import { getService, servicePath, services } from "@/content/services";
import MutedVideo from "@/components/MutedVideo";
import { serviceVideos } from "@/content/videos";
import { BUSINESS_ID, absoluteUrl, breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData: s }) => {
    if (!s) return {};
    const path = servicePath(s.slug);
    return pageHead({
      title: s.metaTitle,
      description: s.metaDescription,
      path,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.metaDescription,
          url: absoluteUrl(path),
          provider: { "@id": BUSINESS_ID },
          areaServed: { "@type": "City", name: "Lahore" },
        },
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.name, path },
        ]),
      ],
    });
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const s = getService(slug);
  if (!s) throw notFound();
  const video = serviceVideos[s.slug];
  const related = s.related.flatMap((r) => services.filter((x) => x.slug === r));
  return (
    <CompanyPageShell
      eyebrow={s.eyebrow}
      title={
        <>
          {s.title} <span className="text-gold-gradient">{s.accent}</span>
        </>
      }
      intro={s.intro}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <img
          src={s.image}
          alt={s.imageAlt}
          decoding="async"
          className="aspect-[4/3] w-full border border-border object-cover"
        />
        <div>
          <h2 className="text-3xl md:text-4xl">What is included</h2>
          <ul className="mt-6 space-y-3">
            {s.includes.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="mt-8 inline-flex bg-gold-gradient px-6 py-3 font-semibold text-primary-foreground"
          >
            Request a quote
          </a>
        </div>
      </div>

      {video && (
        <section className="mt-20 grid gap-8 md:grid-cols-[minmax(0,260px)_1fr] md:items-center">
          <MutedVideo
            src={video.src}
            poster={video.poster}
            title={video.title}
            label={video.caption}
            className="mx-auto aspect-[9/16] w-full max-w-[260px]"
          />
          <div>
            <p className="eyebrow mb-3">On site</p>
            <h2 className="text-3xl md:text-4xl">{video.title}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{video.caption}</p>
          </div>
        </section>
      )}

      <section className="mt-20">
        <p className="eyebrow mb-3">How we work</p>
        <h2 className="max-w-3xl text-3xl md:text-5xl">
          A clear process, <span className="text-gold-gradient">step by step.</span>
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {s.process.map((step, i) => (
            <li key={step.title} className="border border-border bg-surface p-6">
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 max-w-4xl">
        <p className="eyebrow mb-3">Questions</p>
        <h2 className="text-3xl md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 space-y-6">
          {s.faqs.map((f) => (
            <div key={f.q} className="border-b border-border pb-6">
              <h3 className="text-xl">{f.q}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 bg-surface p-7 md:grid-cols-2 md:p-10">
        <div>
          <h2 className="text-2xl md:text-3xl">Related services</h2>
          <ul className="mt-4 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="text-gold hover:underline"
                >
                  {r.name} →
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-gold hover:underline">
                All services →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl">Budgeting a project?</h2>
          <p className="mt-2 text-muted-foreground">
            Try our{" "}
            <Link to="/cost-calculator" className="text-gold hover:underline">
              cost calculator
            </Link>{" "}
            for a quick estimate, or read our{" "}
            <Link to="/blog" className="text-gold hover:underline">
              construction guides
            </Link>
            .
          </p>
        </div>
      </section>
    </CompanyPageShell>
  );
}
