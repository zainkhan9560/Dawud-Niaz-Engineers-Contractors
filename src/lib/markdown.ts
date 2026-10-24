/**
 * Tiny, dependency-free helpers for the blog: front-matter parsing and a Markdown -> block parser.
 * The blocks are rendered by components/Markdown.tsx as React elements (no raw HTML is ever injected).
 */

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** YYYY-MM-DD */
  date: string;
  updated?: string;
  category: string;
  image?: string;
  imageAlt?: string;
  author: string;
  readingMinutes: number;
};

export type Post = PostMeta & { body: string };

export function parseFrontmatter(raw: string): { get: (key: string) => string; body: string } {
  const text = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const data = new Map<string, string>();
  if (!match) return { get: () => "", body: text };
  for (const line of (match[1] ?? "").split("\n")) {
    const m = line.match(/^([A-Za-z][\w-]*)\s*:\s*(.*)$/);
    if (!m || m[1] === undefined) continue;
    data.set(m[1], (m[2] ?? "").trim().replace(/^(["'])([\s\S]*)\1$/, "$2"));
  }
  return { get: (key) => data.get(key) ?? "", body: match[2] ?? "" };
}

export function slugFromPath(path: string) {
  return (path.split("/").pop() ?? path).replace(/\.md$/i, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export function readingMinutes(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Returns null for drafts or posts with a missing title/date, so a half-written file never breaks the site. */
export function toPost(path: string, raw: string): Post | null {
  const { get, body } = parseFrontmatter(raw);
  const isDate = (v: string) => /^\d{4}-\d{2}-\d{2}$/.test(v);
  if (!get("title") || !isDate(get("date"))) return null;
  if (/^(true|yes)$/i.test(get("draft"))) return null;
  const description =
    get("description") ||
    body
      .replace(/[#>*_`|-]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 155);
  const updated = get("updated");
  const image = get("image");
  const imageAlt = get("imageAlt");
  return {
    slug: get("slug") || slugFromPath(path),
    title: get("title"),
    description,
    date: get("date"),
    ...(isDate(updated) ? { updated } : {}),
    category: get("category") || "Construction Guide",
    ...(image ? { image } : {}),
    ...(imageAlt ? { imageAlt } : {}),
    author: get("author") || "Dawud Niaz Engineers and Contractors",
    readingMinutes: readingMinutes(body),
    body,
  };
}

export type Block =
  | { type: "heading"; level: 2 | 3 | 4; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; alt: string; src: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "rule" };

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06ff]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const splitRow = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());

export function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const at = (n: number) => lines[n] ?? "";
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = at(i);
    if (!line.trim()) {
      i++;
      continue;
    }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      // "# Title" inside the body is demoted to h2: the page already has one h1
      const level = Math.max(2, (h[1] ?? "").length) as 2 | 3 | 4;
      const text = (h[2] ?? "").trim();
      blocks.push({ type: "heading", level, text, id: slugify(text) });
      i++;
      continue;
    }
    if (/^(-{3,}|\*{3,})\s*$/.test(line)) {
      blocks.push({ type: "rule" });
      i++;
      continue;
    }
    const img = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/);
    if (img) {
      blocks.push({ type: "image", alt: img[1] ?? "", src: img[2] ?? "" });
      i++;
      continue;
    }
    if (line.trim().startsWith("|") && /^\s*\|?\s*:?-{2,}/.test(at(i + 1))) {
      const head = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && at(i).trim().startsWith("|")) rows.push(splitRow(at(i++)));
      blocks.push({ type: "table", head, rows });
      continue;
    }
    if (/^>\s?/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^>\s?/.test(at(i))) buf.push(at(i++).replace(/^>\s?/, ""));
      blocks.push({ type: "quote", text: buf.join(" ") });
      continue;
    }
    const ul = /^\s*[-*+]\s+/;
    const ol = /^\s*\d+[.)]\s+/;
    if (ul.test(line) || ol.test(line)) {
      const ordered = ol.test(line);
      const re = ordered ? ol : ul;
      const items: string[] = [];
      while (i < lines.length && re.test(at(i))) items.push(at(i++).replace(re, "").trim());
      blocks.push({ type: "list", ordered, items });
      continue;
    }
    const buf: string[] = [];
    while (
      i < lines.length &&
      at(i).trim() &&
      !/^(#{1,4}\s|>|\s*[-*+]\s|\s*\d+[.)]\s|!\[|\||-{3,}\s*$)/.test(at(i))
    ) {
      buf.push(at(i++).trim());
    }
    if (buf.length) blocks.push({ type: "paragraph", text: buf.join(" ") });
    else i++;
  }
  return blocks;
}

export type Inline =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "em"; text: string }
  | { type: "code"; text: string }
  | { type: "link"; text: string; href: string };

/** Only these link targets are allowed; anything else (javascript: etc.) is shown as plain text. */
export function safeHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:|\/|#)/i.test(href.trim());
}

export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ type: "text", text: text.slice(last, m.index) });
    if (m[1] !== undefined) {
      const href = m[2] ?? "";
      out.push(safeHref(href) ? { type: "link", text: m[1], href } : { type: "text", text: m[1] });
    } else if (m[3] !== undefined) out.push({ type: "strong", text: m[3] });
    else if (m[4] !== undefined) out.push({ type: "em", text: m[4] });
    else out.push({ type: "code", text: m[5] ?? "" });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ type: "text", text: text.slice(last) });
  return out;
}
