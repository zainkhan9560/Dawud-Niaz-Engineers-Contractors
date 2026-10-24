import { createFileRoute, Link } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import { formatDate, posts } from "@/lib/blog";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Construction Guides & Articles | Dawud Niaz Engineers",
      description:
        "Practical construction, drawings and cost-planning guides for building in Lahore and across Pakistan, from Dawud Niaz Engineers and Contractors.",
      path: "/blog",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
      ],
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <CompanyPageShell
      eyebrow="Blog · Guides & articles"
      title={
        <>
          Building knowledge, <span className="text-gold-gradient">explained simply.</span>
        </>
      }
      intro="Practical guides on drawings, construction stages, budgeting and choosing a contractor, written by the team at Dawud Niaz Engineers and Contractors."
    >
      {posts.length === 0 ? (
        <p className="text-muted-foreground">New articles are coming soon.</p>
      ) : (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col overflow-hidden border border-border bg-card"
            >
              {post.image ? (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/9] items-end bg-surface p-5">
                  <span className="eyebrow">{post.category}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-muted-foreground">
                  {post.category} · {formatDate(post.date)} · {post.readingMinutes} min read
                </p>
                <h2 className="mt-2 text-xl leading-snug">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="transition-colors after:absolute after:inset-0 hover:text-gold"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-gold">Read article →</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </CompanyPageShell>
  );
}
