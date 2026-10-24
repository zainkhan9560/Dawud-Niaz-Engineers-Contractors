import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";

import CompanyPageShell from "@/components/CompanyPageShell";

import bank from "@/assets/project-meezan-bank-branch.webp";
<<<<<<< HEAD
<<<<<<< HEAD
import hbl from "@/assets/project-hbl-branch-upgradation.webp";
import warehouse from "@/assets/project-industrial-warehouse.webp";
import plazaPhoto from "@/assets/project-commercial-plaza.webp";
import alfalah from "@/assets/project-alfalah-bank-branch.webp";
import villa from "@/assets/residential-house-transformation.webp";
import site from "@/assets/construction-site-review-team.webp";
import mcb from "@/assets/project-mcb-bank-branch.webp";
=======
=======
>>>>>>> ae5426a (Upload website files)
import bankThumb from "@/assets/project-meezan-bank-branch-thumb.webp";
import hbl from "@/assets/project-hbl-branch-upgradation.webp";
import hblThumb from "@/assets/project-hbl-branch-upgradation-thumb.webp";
import warehouse from "@/assets/project-industrial-warehouse.webp";
import warehouseThumb from "@/assets/project-industrial-warehouse-thumb.webp";
import plazaPhoto from "@/assets/project-commercial-plaza.webp";
import plazaThumb from "@/assets/project-commercial-plaza-thumb.webp";
import alfalah from "@/assets/project-alfalah-bank-branch.webp";
import alfalahThumb from "@/assets/project-alfalah-bank-branch-thumb.webp";
import villa from "@/assets/residential-house-transformation.webp";
import site from "@/assets/construction-site-review-team.webp";
import mcb from "@/assets/project-mcb-bank-branch.webp";
import mcbThumb from "@/assets/project-mcb-bank-branch-thumb.webp";
<<<<<<< HEAD
>>>>>>> e99da09 (updated pictures or files)
=======
=======
import hbl from "@/assets/project-hbl-branch-upgradation.webp";
import warehouse from "@/assets/project-industrial-warehouse.webp";
import plazaPhoto from "@/assets/project-commercial-plaza.webp";
import alfalah from "@/assets/project-alfalah-bank-branch.webp";
import villa from "@/assets/residential-house-transformation.webp";
import site from "@/assets/construction-site-review-team.webp";
import mcb from "@/assets/project-mcb-bank-branch.webp";
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)

export const Route = createFileRoute("/selected-projects")({
  head: () => ({
    meta: [
      {
        title: "Selected Projects | Dawud Niaz Engineers and Contractors",
      },
      {
        name: "description",
        content:
          "Explore selected banking, commercial, industrial, and residential projects featured in the Dawud Niaz Engineers and Contractors company profile.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  name: string;
  scope: string;
  duration: string;
  value: string;
  img: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  /** smaller version shown in the card; the full image opens in the lightbox */
  thumb?: string;
>>>>>>> e99da09 (updated pictures or files)
=======
  /** smaller version shown in the card; the full image opens in the lightbox */
  thumb?: string;
=======
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
  pos?: string;
};

type ActiveImage = {
  src: string;
  alt: string;
};

const projects: Project[] = [
  {
    name: "Meezan Bank — Branch Development",
    scope: "Civil works, interior finishing and MEP coordination",
    duration: "3 months",
    value: "PKR 32 million",
    img: bank,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    thumb: bankThumb,
>>>>>>> e99da09 (updated pictures or files)
=======
    thumb: bankThumb,
=======
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
    pos: "50% 0%",
  },
  {
    name: "Bank Alfalah — Branch Renovation",
    scope: "Renovation, flooring, ceiling and finishing works",
    duration: "2.5 months",
    value: "PKR 24 million",
    img: alfalah,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    thumb: alfalahThumb,
>>>>>>> e99da09 (updated pictures or files)
=======
    thumb: alfalahThumb,
=======
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
  },
  {
    name: "MCB Bank — Commercial Branch Works",
    scope: "Civil modification, interior and external works",
    duration: "3 months",
    value: "PKR 28 million",
    img: mcb,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    thumb: mcbThumb,
>>>>>>> e99da09 (updated pictures or files)
=======
    thumb: mcbThumb,
=======
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
  },
  {
    name: "HBL Office & Branch Upgradation",
    scope: "Renovation, civil works and finishing",
    duration: "3 months",
    value: "PKR 35 million",
    img: hbl,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    thumb: hblThumb,
>>>>>>> e99da09 (updated pictures or files)
=======
    thumb: hblThumb,
=======
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
  },
  {
    name: "Industrial Warehouse Development",
    scope: "Earthworks, RCC structure and flooring",
    duration: "7 months",
    value: "PKR 145 million",
    img: warehouse,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    thumb: warehouseThumb,
>>>>>>> e99da09 (updated pictures or files)
=======
    thumb: warehouseThumb,
=======
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
  },
  {
    name: "Commercial Plaza Development",
    scope: "Structure, masonry, finishing and external works",
    duration: "10 months",
    value: "PKR 190 million",
    img: plazaPhoto,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    thumb: plazaThumb,
>>>>>>> e99da09 (updated pictures or files)
=======
    thumb: plazaThumb,
=======
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
  },
  {
    name: "Corporate Office Development",
    scope: "Civil, interior and architectural execution",
    duration: "5 months",
    value: "PKR 68 million",
    img: site,
  },
  {
    name: "Residential Villa Project",
    scope: "Complete turnkey construction",
    duration: "9 months",
    value: "PKR 85 million",
    img: villa,
  },
];

type LightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="lightbox fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition-colors hover:border-gold hover:text-gold"
      >
        <X size={20} />
      </button>

      <img
        decoding="async"
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className="lightbox-img max-h-full max-w-full rounded-sm object-contain shadow-2xl"
      />
    </div>,
    document.body,
  );
}

function ProjectsPage() {
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  return (
    <CompanyPageShell
      eyebrow="Selected Projects · Company Profile"
      title={
        <>
          Selected projects. <span className="text-gold-gradient">Practical delivery.</span>
        </>
      }
      intro="Explore selected project examples from the company profile, covering banking, commercial, industrial and residential work. Images are illustrative visuals rather than verified photographs of the named project sites."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.name} className="overflow-hidden border border-border bg-card">
            <button
              type="button"
<<<<<<< HEAD
<<<<<<< HEAD
=======
              onPointerEnter={() => {
                new Image().src = project.img;
              }}
>>>>>>> e99da09 (updated pictures or files)
=======
              onPointerEnter={() => {
                new Image().src = project.img;
              }}
=======
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
              onClick={() =>
                setActiveImage({
                  src: project.img,
                  alt: `${project.name} — project showcase`,
                })
              }
              aria-label={`View ${project.name} image full size`}
              className="group relative block aspect-[3/2] w-full cursor-zoom-in overflow-hidden"
            >
              <img
<<<<<<< HEAD
<<<<<<< HEAD
                src={project.img}
=======
                src={project.thumb ?? project.img}
>>>>>>> e99da09 (updated pictures or files)
=======
                src={project.thumb ?? project.img}
=======
                src={project.img}
>>>>>>> adac534 (Deleted All the Duplicated files, now the folder structure is Good and everything is working according to the plan)
>>>>>>> ae5426a (Upload website files)
                alt={`${project.name} — illustrative project image`}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: project.pos ?? "50% 50%" }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-background/90 px-3 py-1.5 text-xs font-semibold tracking-wider opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn size={14} />
                VIEW FULL
              </span>

              <span className="absolute left-4 top-4 bg-background/90 px-3 py-1 text-xs font-semibold tracking-widest">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>
            </button>

            <div className="p-6">
              <h2 className="text-2xl">{project.name}</h2>

              <p className="mt-3 leading-6 text-muted-foreground">{project.scope}</p>

              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Duration
                  </p>
                  <p className="mt-1 font-semibold">{project.duration}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Profile-listed value
                  </p>
                  <p className="mt-1 font-semibold text-gold">{project.value}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-xs leading-5 text-muted-foreground">
        Before publication, verify project details, durations and values against the company profile
        and obtain permission to publish client names and project photographs. Replace illustrative
        images with approved, project-specific photographs where available.
      </p>

      {activeImage && (
        <Lightbox src={activeImage.src} alt={activeImage.alt} onClose={closeLightbox} />
      )}
    </CompanyPageShell>
  );
}
