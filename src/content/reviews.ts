/**
 * Real Google reviews for the company. Copy them word for word from your Google Business Profile
 * (Reviews tab). Only add reviews that really exist. Example entry:
 *   { name: "Reviewer name", rating: 5, text: "Exact review text...", date: "2026-10-01" }
 * While this list is empty the website shows buttons that open your Google reviews instead.
 */
export type Review = { name: string; rating: 1 | 2 | 3 | 4 | 5; text: string; date?: string };

export const reviews: Review[] = [];
