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
├── public/             Favicons, web manifest, robots.txt (served as-is)
└── src/
    ├── assets/         Optimised WebP images (one file per picture)
    ├── components/     Shared UI: CompanyPageShell, ThemeToggle, FloatingActions, ScrollReveal
    ├── routes/         One file per page (index, about, services, leadership, selected-projects, ...)
    ├── hooks/ lib/     Small helpers
    ├── test/           Routing tests
    └── styles.css      Theme, animations and global styles
```
To add a photo: save it as an optimised `.webp` (about 1100-1300px wide) in `src/assets/` and import it from the page.

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
