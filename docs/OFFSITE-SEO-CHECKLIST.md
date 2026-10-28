# Off-site SEO checklist (done outside the code)

## Right after launch
1. Verify the domain in Google Search Console, then paste the code in `GOOGLE_SITE_VERIFICATION` (`src/lib/seo.ts`).
2. Submit `https://www.dawudniazassociates.com/sitemap.xml` in Search Console.
3. Use "URL inspection" > "Request indexing" for the homepage, /services, each service page, /contact and new blog posts.
4. Create a GA4 property, paste its ID in `GA4_MEASUREMENT_ID`, and link it to Search Console.
5. Watch the Core Web Vitals and Pages (indexing) reports every month.

## Google Business Profile
- Complete every field: primary category (General Contractor or the closest match), secondary categories for the other services, service areas, opening hours, website, phone and description.
- Add your services list and project photos. Keep posting as you already do.
- Make the name, address and phone identical to the website footer and contact page: "Dawud Niaz Associates Engineers and Contractors, 126 J Gulberg III, Lahore, 0333 858 1087".
- Answer the Q&A section and reply to every review.

## Reviews
Ask real clients to leave a Google review using your review link. Never buy or invent reviews. When you have real ones, tell us and they can be shown on the website.

## Citations and links
- List the company in Pakistani business and construction directories using the exact same name, address and phone.
- Earn real links: supplier and partner websites, local business associations, project features, guest articles. Do not buy links.

## Social
Share each project and blog post on Facebook, LinkedIn and Instagram with a link back to the website. Create the accounts you do not have yet, then add them to `SOCIAL_PROFILES`.
