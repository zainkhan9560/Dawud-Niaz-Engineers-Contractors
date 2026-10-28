# Dawud Niaz Engineers and Contractors — Website

Responsive company website built with React, TypeScript, TanStack Router, Vite and Tailwind CSS.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Create a production build with `npm run build`.

## Project structure
```
.
├── public/             Favicons, social preview image, robots.txt, sitemap.xml, blog/ images
├── scripts/            generate-sitemap.mjs (builds public/sitemap.xml)
└── src/
    ├── assets/         Optimised WebP images (one file per picture)
    ├── components/     Shared UI: CompanyPageShell, SiteLinks, CostCalculator, Markdown, ...
    ├── content/
    │   ├── blog/       One .md file per blog article (see "Publishing a blog article")
    │   └── services.ts Text for the six service pages
    ├── routes/         One file per page (home, services, services/<slug>, blog, blog/<slug>, cost-calculator, ...)
    ├── lib/            seo.ts (SEO settings and helpers), markdown.ts, blog.ts
    ├── test/           Routing tests
    └── styles.css      Theme, animations and global styles
```

## SEO
- All SEO settings live in `src/lib/seo.ts`: site URL, business details, Google Search Console code, Google Business Profile and review links, social profiles.
- Every page gets a unique title and description, a canonical URL, Open Graph / Twitter tags and structured data (business, breadcrumbs, services, blog posts).
- `public/sitemap.xml` is rebuilt automatically by `npm run build`. After adding a blog article, run `npm run sitemap` (or just build) and deploy.
- After the site is live: add the site to Google Search Console, submit `https://www.dawudniazassociates.com/sitemap.xml`, paste the verification code into `GOOGLE_SITE_VERIFICATION`, and paste your Google Business Profile share and review links into `GOOGLE_BUSINESS_PROFILE_URL` and `GOOGLE_REVIEW_URL`.
- Make sure `dawudniazassociates.com` (without www) redirects to `https://www.dawudniazassociates.com` at your hosting or DNS provider, and that HTTPS is on.

## Publishing a blog article
1. Copy `src/content/blog/_TEMPLATE.md` and rename it, for example `2026-10-25-grey-structure-vs-finishing.md`.
2. Fill in the top section (title, description, date, category, optional image) and write the article below it using Markdown (headings with `##`, lists, tables, links).
3. Optional picture: save it as `.webp` (about 1200px wide) in `public/blog/` and set `image: /blog/your-picture.webp`.
4. Run `npm run sitemap`, then deploy. Add `draft: true` to keep an article hidden.

## Main pages
- `/` Home
- `/about` About the company
- `/services` Core services and supporting capabilities
- `/leadership` Leadership directory
- `/selected-projects` Project examples listed in the supplied company profile
- `/gallery` Visual gallery
- `/equipment` Equipment and resources
- `/our-team` Team functions

## Client handover checklist
- Replace illustrative gallery and project visuals with approved original site photographs.
- Upload high-resolution portraits for leadership members whose portraits are currently placeholders.
- Confirm all project names, clients, durations, project values, company claims and permissions before publishing.
- Confirm contact information and domain ownership.
- Add the production domain to Google Search Console and submit the sitemap after launch.

Images labelled illustrative are examples, not a claim that the exact pictured site belongs to the company. Roads and highway projects are excluded from the website's service list as requested.


Recent update: the Equipment page now uses the three supplied construction/equipment photographs, with responsive image crops and animated cards. Navigation headers include an animated gold accent bar and hover underline; reduced-motion preferences are respected.


## More documentation

- `docs/OWNER-GUIDE.md`: run, add posts and projects, settings, deploy
- `docs/OFFSITE-SEO-CHECKLIST.md`: Search Console, Google Business Profile, reviews and links
- `docs/MISSING-INFORMATION.md`: facts and decisions still needed from the owner
