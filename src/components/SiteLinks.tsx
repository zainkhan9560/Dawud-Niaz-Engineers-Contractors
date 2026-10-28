import { Link } from "@tanstack/react-router";
import { services, servicePath } from "@/content/services";

/** Sitewide footer links: helps visitors and search engines reach every important page. */
export default function SiteLinks() {
  return (
    <nav
      aria-label="Footer"
      className="mx-auto grid max-w-7xl gap-8 border-b border-border px-5 py-10 text-sm sm:grid-cols-2 lg:grid-cols-4"
    >
      <div>
        <p className="eyebrow mb-3">Services</p>
        <ul className="space-y-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-3">Company</p>
        <ul className="space-y-2 text-muted-foreground">
          {(
            [
              ["About", "/about"],
              ["Leadership", "/leadership"],
              ["Our Team", "/our-team"],
              ["Equipment", "/equipment"],
              ["Contact", "/contact"],
              ["Privacy Policy", "/privacy"],
              ["Terms of Use", "/terms"],
            ] as const
          ).map(([l, to]) => (
            <li key={to}>
              <Link to={to} className="transition-colors hover:text-gold">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-3">Explore</p>
        <ul className="space-y-2 text-muted-foreground">
          {(
            [
              ["Selected Projects", "/selected-projects"],
              ["Gallery", "/gallery"],
              ["Cost Calculator", "/cost-calculator"],
              ["Blog & Guides", "/blog"],
            ] as const
          ).map(([l, to]) => (
            <li key={to}>
              <Link to={to} className="transition-colors hover:text-gold">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-3">Contact</p>
        <address className="space-y-2 not-italic text-muted-foreground">
          <p>126 J Gulberg III, Lahore, Pakistan</p>
          <p>
            <a href="tel:+923338581087" className="transition-colors hover:text-gold">
              0333 858 1087
            </a>
          </p>
          <p>
            <a
              href="mailto:Info@Dawudniazassociates.com"
              className="transition-colors hover:text-gold"
            >
              Info@Dawudniazassociates.com
            </a>
          </p>
        </address>
      </div>
    </nav>
  );
}
