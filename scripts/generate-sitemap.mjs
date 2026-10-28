// Builds public/sitemap.xml from the pages, the service pages and the blog posts.
// Runs automatically before `npm run build`; run `npm run sitemap` after adding a blog post.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const seo = readFileSync(join(root, "src/lib/seo.ts"), "utf8");
const SITE_URL = seo.match(/export const SITE_URL = "([^"]+)"/)[1].replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  ["/", "1.0", "weekly"],
  ["/services", "0.9", "monthly"],
  ["/cost-calculator", "0.9", "monthly"],
  ["/selected-projects", "0.8", "monthly"],
  ["/about", "0.7", "monthly"],
  ["/leadership", "0.5", "yearly"],
  ["/our-team", "0.5", "yearly"],
  ["/gallery", "0.6", "monthly"],
  ["/equipment", "0.5", "yearly"],
  ["/blog", "0.8", "daily"],
  ["/contact", "0.8", "yearly"],
  ["/privacy", "0.2", "yearly"],
  ["/terms", "0.2", "yearly"],
];

const servicesSrc = readFileSync(join(root, "src/content/services.ts"), "utf8");
const serviceSlugs = [...servicesSrc.matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]);

const blogDir = join(root, "src/content/blog");
const posts = readdirSync(blogDir)
  .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
  .map((file) => {
    const text = readFileSync(join(blogDir, file), "utf8")
      .replace(/^\uFEFF/, "")
      .replace(/\r\n/g, "\n");
    const fm = text.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) return null;
    const get = (key) => {
      const m = fm[1].match(new RegExp(`^${key}\\s*:\\s*(.*)$`, "m"));
      return m ? m[1].trim().replace(/^(["'])([\s\S]*)\1$/, "$2") : "";
    };
    if (
      !get("title") ||
      !/^\d{4}-\d{2}-\d{2}$/.test(get("date")) ||
      /^(true|yes)$/i.test(get("draft"))
    )
      return null;
    const slug = get("slug") || file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
    const updated = get("updated");
    return {
      slug,
      title: get("title"),
      description: get("description"),
      date: get("date"),
      lastmod: /^\d{4}-\d{2}-\d{2}$/.test(updated) ? updated : get("date"),
    };
  })
  .filter(Boolean);

const urls = [
  ...staticPages.map(([path, priority, changefreq]) => ({
    path,
    priority,
    changefreq,
    lastmod: today,
  })),
  ...serviceSlugs.map((slug) => ({
    path: `/services/${slug}`,
    priority: "0.9",
    changefreq: "monthly",
    lastmod: today,
  })),
  ...posts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: p.lastmod,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path === "/" ? "/" : u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(
  `sitemap.xml written: ${urls.length} URLs (${serviceSlugs.length} services, ${posts.length} blog posts) for ${SITE_URL}`,
);

// RSS feed for the blog (newest first). Written to public/rss.xml.
const esc = (t) =>
  String(t)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const items = [...posts]
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`,
  )
  .join("\n");
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Dawud Niaz Associates Engineers and Contractors - Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Construction and engineering guides from Lahore.</description>
    <language>en-pk</language>
${items}
  </channel>
</rss>
`;
writeFileSync(join(root, "public/rss.xml"), rss);
console.log(`rss.xml written: ${posts.length} posts`);
