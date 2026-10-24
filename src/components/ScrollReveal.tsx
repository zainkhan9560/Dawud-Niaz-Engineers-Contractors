import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Site-wide scroll animation. After each page loads, content that is still below the fold is
 * hidden and then animated in (fade + slide, staggered across grid rows) as it scrolls into view.
 * Anything already on screen is left alone, so there is no flash. Add data-reveal="left|right|zoom|grow"
 * to an element to pick a different entrance.
 */
const TARGETS =
  "section h1, section h2, .grid > *, article, blockquote, form, footer, .org-item, [data-reveal]";

export default function ScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let io: IntersectionObserver | undefined;

    const timer = window.setTimeout(() => {
      const vh = window.innerHeight;
      const picked: HTMLElement[] = [];
      const toObserve: HTMLElement[] = [];

      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (el.closest("header, #top, .no-reveal")) return;
        if (picked.some((p) => p.contains(el))) return; // an ancestor already animates this
        picked.push(el);
        if (el.getBoundingClientRect().top < vh * 0.92) return; // already visible — leave it
        const variant = el.dataset["reveal"];
        el.classList.add("reveal");
        if (variant) el.classList.add(`reveal-${variant}`);
        const idx = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
        el.style.setProperty("--reveal-delay", `${(idx % 4) * 90}ms`);
        toObserve.push(el);
      });

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add("is-visible");
            io?.unobserve(e.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      toObserve.forEach((el) => io!.observe(el));
    }, 80);

    return () => {
      window.clearTimeout(timer);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
