import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import CompanyPageShell from "@/components/CompanyPageShell";
import MutedVideo from "@/components/MutedVideo";
import { siteVideos } from "@/content/videos";
import a from "@/assets/building-construction-hero.webp";
import b from "@/assets/architectural-drawing-workspace.webp";
import c from "@/assets/structural-site-inspection-team.webp";
import d from "@/assets/residential-building-example.webp";
import e from "@/assets/residential-house-transformation.webp";
import f from "@/assets/construction-planning-example.webp";
import g from "@/assets/structural-building-works.webp";
import h from "@/assets/construction-site-review-team.webp";
import i from "@/assets/architectural-design-example.webp";
import r1 from "@/assets/project-building-structure.webp";
import r2 from "@/assets/project-site-foundation.webp";
import r3 from "@/assets/project-scaffolding-works.webp";
import m1 from "@/assets/structural-model-high-rise-frame.webp";
import m2 from "@/assets/structural-model-multi-storey-frame.webp";
import m3 from "@/assets/structural-model-arched-steel-shed.webp";
import m4 from "@/assets/structural-model-restrained-panel.webp";
import m5 from "@/assets/structural-model-low-rise-frame.webp";
import m6 from "@/assets/structural-model-ten-storey-frame.webp";
export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead({
      title: "Project Gallery | Dawud Niaz Associates Engineers and Contractors",
      description:
        "Visual examples of architectural planning, structural works, residential buildings and construction processes.",
      path: "/gallery",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]),
      ],
    }),
  component: GalleryPage,
});
const items: { title: string; category: string; img: string; real?: boolean; pos?: string }[] = [
  { title: "Building Structure", category: "Our Site", img: r1, real: true, pos: "50% 45%" },
  { title: "Site Foundation Works", category: "Our Site", img: r2, real: true, pos: "50% 62%" },
  { title: "Scaffolding Works", category: "Our Site", img: r3, real: true, pos: "50% 55%" },
  { title: "Building Construction", category: "Construction", img: a },
  { title: "Architectural Planning", category: "Architecture", img: b },
  { title: "Structural Site Review", category: "Structural", img: c },
  { title: "Residential Building", category: "Residential", img: d },
  { title: "House Transformation", category: "Renovation", img: e },
  { title: "Construction Planning", category: "Project Management", img: f },
  { title: "Structural Building Works", category: "Structural", img: g },
  { title: "Construction Site Coordination", category: "Construction", img: h },
  { title: "Architectural Design", category: "Architecture", img: i },
];
const models: { title: string; detail: string; img: string }[] = [
  {
    title: "High-Rise Frame Model",
    detail: "3-D structural model of a stepped multi-storey RC frame",
    img: m1,
  },
  {
    title: "Multi-Storey Frame Model",
    detail: "3-D model with columns, beams and floor slabs",
    img: m2,
  },
  {
    title: "Ten-Storey Frame Model",
    detail: "3-D frame model with roof-level service blocks",
    img: m6,
  },
  {
    title: "Low-Rise Frame Model",
    detail: "3-D model of a low-rise building frame with stair cores",
    img: m5,
  },
  {
    title: "Arched Steel Shed Model",
    detail: "3-D model of a steel frame with curved rafters",
    img: m3,
  },
  {
    title: "Restrained Panel Model",
    detail: "3-D structural model showing support restraints",
    img: m4,
  },
];
function GalleryPage() {
  return (
    <CompanyPageShell
      eyebrow="Gallery · Visual Portfolio"
      title={
        <>
          Work in progress. <span className="text-gold-gradient">Built with purpose.</span>
        </>
      }
      intro="Browse visual examples across the company’s core services. Images currently serve as illustrative references; replace them with original site photographs to create a fully authentic record of completed work."
    >
      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <figure
            key={item.title}
            className={`group relative overflow-hidden bg-surface ${i === 0 || i === 4 ? "sm:row-span-2 lg:row-span-1" : ""}`}
          >
            <img
              decoding="async"
              src={item.img}
              alt={
                item.real
                  ? `${item.title}: photograph from a Dawud Niaz Associates Engineers and Contractors site`
                  : `${item.title} — illustrative construction portfolio visual`
              }
              loading="lazy"
              style={item.pos ? { objectPosition: item.pos } : undefined}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
              <span className="text-xs uppercase tracking-[0.2em] text-amber-300">
                {item.category}
              </span>
              <h2 className="mt-1 text-2xl">{item.title}</h2>
            </figcaption>
          </figure>
        ))}
      </div>
      <section className="mt-16" aria-labelledby="gallery-models">
        <p className="eyebrow mb-3">Structural analysis</p>
        <h2 id="gallery-models" className="text-3xl md:text-4xl">
          Structural analysis models
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          3-D structural analysis models from our engineering work, showing frames, floors and
          supports.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <figure key={m.title} className="overflow-hidden border border-border bg-black">
              <img
                src={m.img}
                alt={`${m.title}: ${m.detail}`}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-contain"
              />
              <figcaption className="bg-card p-4">
                <h3 className="text-lg">{m.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="mt-16" aria-labelledby="gallery-videos">
        <p className="eyebrow mb-3">Site videos</p>
        <h2 id="gallery-videos" className="text-3xl md:text-4xl">
          Construction in progress in Lahore
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Silent clips from our building sites. Tap a video to pause or play it.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {siteVideos.map((v) => (
            <figure key={v.src} className="min-w-0">
              <MutedVideo
                src={v.src}
                poster={v.poster}
                title={v.title}
                label={v.caption}
                className="aspect-[9/16] w-full"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {v.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <div className="mt-10 flex flex-col gap-4 border border-border bg-surface p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl">Want to feature a completed project?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Add approved images, project title, location, scope and completion year.
          </p>
        </div>
        <a
          href="/#contact"
          className="w-fit bg-gold-gradient px-6 py-3 font-semibold text-primary-foreground"
        >
          Contact our team
        </a>
      </div>
    </CompanyPageShell>
  );
}
