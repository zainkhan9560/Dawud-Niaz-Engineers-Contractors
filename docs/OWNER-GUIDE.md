# Owner guide

## Run the website
1. Install Node.js (version 20 or newer).
2. In the project folder run `npm install` (delete `node_modules` first if the folder was copied from another computer).
3. `npm run dev` starts the site locally. `npm run build` makes the production build (it also refreshes `sitemap.xml` and `rss.xml`).
4. Other checks: `npm run lint`, `npx tsc --noEmit`, `npm test`.

## Add a blog post (about 2 minutes)
1. Copy `src/content/blog/_TEMPLATE.md` and rename it like `2026-11-02-your-title.md`.
2. Fill in the top section (title, description, date, category, image, imageAlt). Put the picture in `public/blog/` (WebP, about 1280x720).
3. Write the article. Link to service pages (`/services/house-construction-lahore`), other posts (`/blog/slug`) and `/#contact`.
4. Run `npm run sitemap` (the build does it automatically). The blog list, sitemap, RSS feed, structured data, table of contents and related articles all update by themselves.

## Add a project or gallery image
- Selected projects: edit the `projects` list in `src/routes/selected-projects.tsx` and put the image in `src/assets/` (WebP).
- Gallery: edit `src/routes/gallery.tsx` the same way. Always write a meaningful alt text.

## Settings you control in one place: `src/lib/seo.ts`
- `GOOGLE_SITE_VERIFICATION`: paste the Search Console HTML-tag code.
- `GA4_MEASUREMENT_ID`: paste your `G-XXXXXXXXXX` ID to switch analytics on (leave empty to keep it off).
- `SOCIAL_PROFILES`: add real Instagram, LinkedIn and YouTube links when those accounts exist.
- `GOOGLE_BUSINESS_PROFILE_URL`, `GOOGLE_REVIEW_URL`, phone, email and address.

## Add Google reviews
Open `src/content/reviews.ts` and add real reviews copied word for word from your Google Business Profile, for example `{ name: "Reviewer name", rating: 5, text: "Review text" }`. They appear in the "What clients say on Google" section of the homepage.

## Contact form
The enquiry form opens the visitor's email app with the message filled in. It does not store anything on a server, so no spam filter is needed. If you want enquiries delivered without the visitor's email app, connect a form service (for example Formspree or Web3Forms) and change the `onSubmit` handler in `src/routes/index.tsx`.

## Deploy
Build with `npm run build` and deploy to the host you already use (the project was created for a Cloudflare/Lovable style setup). After deployment follow `docs/OFFSITE-SEO-CHECKLIST.md`.
