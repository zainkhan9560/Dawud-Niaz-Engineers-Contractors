import { createFileRoute, Link } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import { posts } from "@/lib/blog";
import blogCover from "@/assets/project-building-structure.webp";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Construction Guides & Articles | Dawud Niaz Engineers",
      description:
        "Practical construction, drawings and cost-planning guides for building in Lahore and across Pakistan, from Dawud Niaz Associates Engineers and Contractors.",
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
      intro="Practical guides on drawings, construction stages, budgeting and choosing a contractor, written by the team at Dawud Niaz Associates Engineers and Contractors."
    >
      <div className="relative mb-12 aspect-[21/9] min-h-[200px] w-full overflow-hidden border border-border">
        <img
          src={blogCover}
          alt="Multi-storey building under construction with brick walls and concrete slabs"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <p className="eyebrow mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            Guides & articles
          </p>
          <p className="max-w-2xl font-display text-2xl leading-tight md:text-4xl">
            Practical knowledge from the <span className="text-gold-gradient">building site.</span>
          </p>
        </div>
      </div>
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
                <div className="aspect-[2/1] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[2/1] items-end bg-surface p-5">
                  <span className="eyebrow">{post.category}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-muted-foreground">
                  {post.category} · {post.readingMinutes} min read
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
