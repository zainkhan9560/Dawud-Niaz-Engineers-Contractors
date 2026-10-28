import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, pageHead } from "@/lib/seo";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";

import CompanyPageShell from "@/components/CompanyPageShell";

import bank from "@/assets/project-meezan-bank-branch.webp";
import hbl from "@/assets/project-hbl-branch-upgradation.webp";
import warehouse from "@/assets/project-industrial-warehouse.webp";
import plazaPhoto from "@/assets/project-plaza.webp";
import alfalah from "@/assets/project-alfalah-bank-branch.webp";
import mcb from "@/assets/project-mcb-bank-branch.webp";

export const Route = createFileRoute("/selected-projects")({
  head: () =>
    pageHead({
      title: "Selected Construction Projects | Dawud Niaz Engineers",
      description:
        "Selected banking, industrial and residential construction and renovation projects by Dawud Niaz Associates Engineers and Contractors.",
      path: "/selected-projects",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Selected Projects", path: "/selected-projects" },
        ]),
      ],
    }),
  component: ProjectsPage,
});

type Project = {
  name: string;
  scope: string;
  img: string;
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
    img: bank,
    pos: "50% 0%",
  },
  {
    name: "Bank Alfalah — Branch Renovation",
    scope: "Renovation, flooring, ceiling and finishing works",
    img: alfalah,
  },
  {
    name: "MCB Bank — Branch Works",
    scope: "Civil modification, interior and external works",
    img: mcb,
  },
  {
    name: "HBL Office & Branch Upgradation",
    scope: "Renovation, civil works and finishing",
    img: hbl,
  },
  {
    name: "Industrial Warehouse Development",
    scope: "Earthworks, RCC structure and flooring",
    img: warehouse,
  },
  {
    name: "Plaza Development",
    scope: "Structure, masonry, finishing and external works",
    img: plazaPhoto,
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
      intro="Explore selected project examples from the company profile, covering banking, industrial and residential work. Images are illustrative visuals rather than verified photographs of the named project sites."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.name} className="overflow-hidden border border-border bg-card">
            <button
              type="button"
              onClick={() =>
                setActiveImage({
                  src: project.img,
                  alt: `${project.name} — project showcase`,
                })
              }
              aria-label={`View ${project.name} image full size`}
              className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden"
            >
              <img
                src={project.img}
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
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-xs leading-5 text-muted-foreground">
        Project names and photographs are shown from our company profile. Project images may be
        illustrative; ask us for project-specific details.
      </p>

      {activeImage && (
        <Lightbox src={activeImage.src} alt={activeImage.alt} onClose={closeLightbox} />
      )}
    </CompanyPageShell>
  );
}
