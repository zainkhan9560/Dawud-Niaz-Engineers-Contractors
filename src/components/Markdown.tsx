import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { parseBlocks, parseInline } from "@/lib/markdown";

function Inline({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((n, i): ReactNode => {
        switch (n.type) {
          case "strong":
            return <strong key={i}>{n.text}</strong>;
          case "em":
            return <em key={i}>{n.text}</em>;
          case "code":
            return <code key={i}>{n.text}</code>;
          case "link": {
            const internal =
              n.href.startsWith("/") && !n.href.startsWith("//") && !n.href.includes("#");
            if (internal) {
              return (
                <Link key={i} to={n.href}>
                  {n.text}
                </Link>
              );
            }
            const external = /^https?:\/\//i.test(n.href);
            return (
              <a
                key={i}
                href={n.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {n.text}
              </a>
            );
          }
          default:
            return <Fragment key={i}>{n.text}</Fragment>;
        }
      })}
    </>
  );
}

/** Renders the blog's Markdown as safe React elements, styled by .prose-article in styles.css. */
export default function Markdown({ source }: { source: string }) {
  const blocks = parseBlocks(source);
  return (
    <div className="prose-article">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "heading": {
            const H = `h${b.level}` as "h2" | "h3" | "h4";
            return (
              <H key={i} id={b.id}>
                <Inline text={b.text} />
              </H>
            );
          }
          case "paragraph":
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            );
          case "list": {
            const L = b.ordered ? "ol" : "ul";
            return (
              <L key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </L>
            );
          }
          case "quote":
            return (
              <blockquote key={i}>
                <Inline text={b.text} />
              </blockquote>
            );
          case "image":
            return <img key={i} src={b.src} alt={b.alt} loading="lazy" decoding="async" />;
          case "table":
            return (
              <div key={i} className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {b.head.map((c, j) => (
                        <th key={j}>
                          <Inline text={c} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k}>
                            <Inline text={c} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return <hr key={i} />;
        }
      })}
    </div>
  );
}
