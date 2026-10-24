import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import Markdown from "@/components/Markdown";
import { getPost, relatedPosts } from "@/lib/blog";
import { BUSINESS_ID, SITE_NAME, absoluteUrl, breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData: post }) => {
    if (!post) return {};
    const path = `/blog/${post.slug}`;
    return pageHead({
      title:
        `${post.title} | ${SITE_NAME}`.length > 70 ? post.title : `${post.title} | ${SITE_NAME}`,
      description: post.description,
      path,
      type: "article",
      ...(post.image ? { image: post.image } : {}),
      extraMeta: [
        { property: "article:published_time", content: post.date },
        { property: "article:modified_time", content: post.updated ?? post.date },
        { property: "article:section", content: post.category },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          mainEntityOfPage: absoluteUrl(path),
          ...(post.image ? { image: absoluteUrl(post.image) } : {}),
          author: { "@type": "Organization", name: post.author },
          publisher: { "@id": BUSINESS_ID },
        },
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]),
      ],
    });
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) throw notFound();
  const related = relatedPosts(post.slug, post.category);
  return (
    <CompanyPageShell
      eyebrow={`${post.category} · ${post.readingMinutes} min read`}
      title={post.title}
      intro={post.description}
    >
      <article className="mx-auto max-w-3xl">
        {post.image && (
          <img
            src={post.image}
            alt={post.imageAlt ?? post.title}
            decoding="async"
            className="mb-10 w-full border border-border"
          />
        )}
        <Markdown source={post.body} />
        <p className="mt-10 text-sm text-muted-foreground">Published by {post.author}</p>
        <div className="mt-10 flex flex-col gap-4 bg-surface p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl">Planning a project in Lahore?</h2>
            <p className="mt-1 text-muted-foreground">
              Tell us about your plot and requirements and we will get back to you.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 bg-gold-gradient px-6 py-3 text-center font-semibold text-primary-foreground"
          >
            Get a quote
          </a>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl">More guides</h2>
          <ul className="mt-4 space-y-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="text-gold hover:underline"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </CompanyPageShell>
  );
}
