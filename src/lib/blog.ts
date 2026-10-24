import { toPost, type Post } from "@/lib/markdown";

// Every .md file in src/content/blog is a post (files starting with "_" are ignored, e.g. the template).
const files = import.meta.glob(["/src/content/blog/*.md", "!/src/content/blog/_*.md"], {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => toPost(path, raw))
  .filter((p): p is Post => p !== null)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export function relatedPosts(slug: string, category: string, limit = 3) {
  const others = posts.filter((p) => p.slug !== slug);
  return [
    ...others.filter((p) => p.category === category),
    ...others.filter((p) => p.category !== category),
  ].slice(0, limit);
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
