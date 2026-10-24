/**
 * Central SEO settings. Change values here and every page, the structured data and the sitemap follow.
 */
export const SITE_URL = "https://www.dawudniazassociates.com";
export const SITE_NAME = "Dawud Niaz Associates Engineers and Contractors";
export const SITE_TAGLINE = "Engineering Ideas. Building with Purpose.";

export const BUSINESS = {
  phone: "+923338581087",
  phoneDisplay: "0333 858 1087",
  email: "Info@Dawudniazassociates.com",
  street: "126 J Gulberg III",
  city: "Lahore",
  region: "Punjab",
  country: "PK",
};

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LOGO_URL = `${SITE_URL}/logo-512.png`;

/** Paste the verification code from Google Search Console (HTML tag method) here. Leave "" until you have it. */
export const GOOGLE_SITE_VERIFICATION = "";

/**
 * Paste your Google Business Profile links here once you have them:
 *  - GOOGLE_BUSINESS_PROFILE_URL: the "Share profile" link (https://maps.app.goo.gl/... or https://g.page/...)
 *  - GOOGLE_REVIEW_URL: the "Ask for reviews" link (https://g.page/r/.../review)
 */
export const GOOGLE_BUSINESS_PROFILE_URL =
  "https://www.google.com/search?sca_esv=a3f5dec736f5e351&sxsrf=APpeQnukmIZ8eePlWbEQak8PdUU7FJB1bw%3A1792593835918&q=Dawud%20Niaz%20Engineers%20%26%20Contractors&stick=H4sIAAAAAAAAAONgU1I1qEi0MDVKTjZMMbY0MkoySkuyMqgwTE1KM7I0SjRLSjM1NUy2XMSq5JJYXpqi4JeZWKXgmpeemZeaWlSsoKbgnJ9XUpSYXJJfVAwAEI9eH04AAAA&mat=Cf8FqEKAVwzt&ved=2ahUKEwjqycO2rMuXAxUtUaQEHb50K8QQrMcEegQIPxAC";
export const GOOGLE_REVIEW_URL = "https://g.page/r/CclR9WsqKb8eEBM/review";

export const SOCIAL_PROFILES: string[] = [
  "https://www.facebook.com/share/1F7zkSqqss/?mibextid=wwXIfr",
  "https://www.instagram.com/your-company/",
  "https://www.linkedin.com/company/your-company/",
  "https://www.youtube.com/@your-company",
];

export const MAPS_QUERY = `${BUSINESS.street}, ${BUSINESS.city}, Pakistan`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
export const REVIEW_LINK =
  GOOGLE_REVIEW_URL ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE_NAME} ${BUSINESS.city}`)}`;

export const BUSINESS_ID = `${SITE_URL}/#business`;

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "/" : clean.replace(/\/$/, "")}`;
}

type HeadOptions = {
  title: string;
  description: string;
  /** path of the page, e.g. "/services" */
  path: string;
  image?: string;
  type?: "website" | "article";
  /** extra <meta> entries (for example article:published_time) */
  extraMeta?: Record<string, string>[];
  /** extra JSON-LD objects for the page */
  jsonLd?: object[];
};

/** Builds title, description, canonical, Open Graph, Twitter and JSON-LD for one page. */
export function pageHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  extraMeta = [],
  jsonLd = [],
}: HeadOptions) {
  const url = absoluteUrl(path);
  const img = absoluteUrl(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
      ...extraMeta,
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      // "<" is escaped so article text can never close the script tag early
      children: JSON.stringify(data).replace(/</g, "\\u003c"),
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** The business itself (shown on the home page). Only facts that are already on the website. */
export function businessLd(services: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: LOGO_URL,
    image: DEFAULT_OG_IMAGE,
    description:
      "Construction company in Lahore, Pakistan: architectural design, structural engineering, house map design, cost estimation, BOQ services, grey structure and turnkey construction.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "Country", name: "Pakistan" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(s.path) },
      })),
    },
    ...(GOOGLE_BUSINESS_PROFILE_URL || SOCIAL_PROFILES.length
      ? { sameAs: [GOOGLE_BUSINESS_PROFILE_URL, ...SOCIAL_PROFILES].filter(Boolean) }
      : {}),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    publisher: { "@id": BUSINESS_ID },
  };
}
