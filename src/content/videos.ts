/** Site videos. All files are silent (no audio track) and are also rendered muted. */
export type SiteVideo = {
  src: string;
  poster: string;
  title: string;
  caption: string;
};

export const siteVideos: SiteVideo[] = [
  {
    src: "/videos/site-excavation.mp4",
    poster: "/videos/site-excavation.jpg",
    title: "Excavation and earthworks",
    caption: "Excavator at work on site preparation and earthworks before foundations.",
  },
  {
    src: "/videos/slab-reinforcement.mp4",
    poster: "/videos/slab-reinforcement.jpg",
    title: "Slab shuttering and reinforcement",
    caption: "Roof slab shuttering and steel reinforcement ahead of concrete placement.",
  },
  {
    src: "/videos/brickwork-structure.mp4",
    poster: "/videos/brickwork-structure.jpg",
    title: "Brickwork and structure",
    caption: "Brick masonry and structural progress on a house under construction in Lahore.",
  },
  {
    src: "/videos/plot-site-area.mp4",
    poster: "/videos/plot-site-area.jpg",
    title: "Plot and site surroundings",
    caption: "Plot and neighbourhood context at a residential construction site.",
  },
  {
    src: "/videos/material-delivery.mp4",
    poster: "/videos/material-delivery.jpg",
    title: "Material delivery to site",
    caption: "Construction material delivery and site logistics.",
  },
];

/** Which site video suits which service page. */
export const serviceVideos: Record<string, SiteVideo> = {
  "grey-structure-construction-lahore": siteVideos[1],
  "house-construction-lahore": siteVideos[2],
  "structural-drawings-lahore": siteVideos[1],
  "building-construction-lahore": siteVideos[0],
  "turnkey-construction-lahore": siteVideos[4],
  "construction-consultancy-lahore": siteVideos[3],
};
