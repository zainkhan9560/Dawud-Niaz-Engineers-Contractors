# Missing information and decisions needed from the owner

## Needed to complete the website truthfully
- Service areas you really cover (for example specific Lahore neighbourhoods). Area pages were NOT created because they were not confirmed.
- Opening hours.
- Other registrations or licences you want shown (for example PEC), with numbers if you want them published. FBR registration is confirmed and shown on the homepage.
- Your real Google reviews: they could not be copied automatically. Open your Google Business Profile > Reviews, copy 3 to 6 reviews word for word (name, stars, text) and paste them into `src/content/reviews.ts`. Until then the homepage shows "Read our Google reviews" and "Write a review" buttons. No review schema was added.
- Real Instagram, LinkedIn and YouTube links (placeholder links were removed from the structured data).
- Project-specific names for the six structural analysis model images (Gallery, homepage slideshow and blog posts use generic descriptions).
- Team, years of experience and number of projects, only if you want to publish them.

## Removed from the Selected Projects page (not in the company profile PDF)
The profile lists six projects with no durations or PKR values. The following were removed because they could not be verified. Restore them from git history if you can confirm them.
- Durations and PKR values for all projects (for example "3 months" and "PKR 32 million" for Meezan Bank).
- "Corporate Office Development" (Civil, interior and architectural execution; image: construction-site-review-team.webp).
- "Residential Villa Project" (Complete turnkey construction; image: residential-house-transformation.webp).
Also confirm you have permission to publish the bank names and project photographs.

## Content still to improve
The five blog posts written earlier are 400 to 600 words. The four posts added on 28 Oct 2026 are about 1,000 words. Expanding the older posts to 900+ words would help search performance.

## Could not be verified here
`npm run build` and the tests could not run in the review environment (Windows `node_modules`, no network). Run `npm install` then `npm run build` and `npm test` on your computer, and run Lighthouse in Chrome on the live site.

## "Commercial" removed
The word "commercial" was removed from all pages, service text, blog posts, file names and alt text. Two project names were shortened to "MCB Bank - Branch Works" and "Plaza Development". The bank branch, office and plaza projects come from your company profile PDF (`public/Dawud-Niaz-Company-Profile.pdf`), which still contains the word "Commercial" in two project titles. Please update that PDF yourself, and decide whether bank branch, office and plaza projects should stay listed if you do not take on commercial work.

## Blog images
Each of the 10 blog posts now has its own cover image, and no two posts share one. Four use your site photos (foundation stage, grey structure house, brick stack, and the renovation post, which uses two scaffolding photos: one as the cover and one inside the article). The other six use illustrations generated for the site (contractor comparison, floor plan, structural layout, BOQ sheet, warehouse steel frame and analysis workflow). The 3-D analysis article also shows your structural model screenshots inside the text. Replace any image with a real project photo when you have one (put the file in `public/blog/` and change `image:` in the post).
