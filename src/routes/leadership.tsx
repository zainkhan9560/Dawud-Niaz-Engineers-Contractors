import { createFileRoute } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import ceo from "@/assets/engr-muhammad-aun-niaz-profile.webp";
import founder from "@/assets/niaz-ahmad-founder.webp";
import saqib from "@/assets/saqib-niaz.webp";
import shafqat from "@/assets/shafqat-niaz.webp";
import ali from "@/assets/ali-faisal-legal-advisor.webp";
import dawud from "@/assets/dawud-niaz.webp";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership | Dawud Niaz Engineers and Contractors" },
      {
        name: "description",
        content:
          "Meet the leadership and professional team at Dawud Niaz Engineers and Contractors.",
      },
    ],
  }),
  component: LeadershipPage,
});

type Person = {
  name: string;
  role: string;
  image: string;
  note: string;
  /** CSS object-position so each face sits nicely inside the fixed-size frame */
  pos?: string;
  advisory?: boolean;
};

const founderPerson: Person = {
  name: "Niaz Ahmad",
  role: "Founder",
  image: founder,
  note: "Founder of Dawud Niaz Engineers and Contractors.",
  pos: "50% 15%",
};

const leaders: Person[] = [
  {
    name: "Engr. Muhammad Aun Niaz",
    role: "CEO / Director Technical",
    image: ceo,
    note: "Engineering leadership and technical direction.",
    pos: "62% 20%",
  },
  {
    name: "Malik Saqib Niaz",
    role: "Managing Director",
    image: saqib,
    note: "Management and organisational leadership.",
    pos: "55% 22%",
  },
  {
    name: "Shafqat Niaz",
    role: "Marketing Director",
    image: shafqat,
    note: "Marketing and client communication.",
    pos: "50% 20%",
  },
  {
    name: "Ali Faisal",
    role: "Legal Advisor",
    image: ali,
    note: "Legal advisory support for the company.",
    pos: "62% 20%",
    advisory: true,
  },
];

const nextGen: Person = {
  name: "Dawud Niaz",
  role: "Next Generation",
  image: dawud,
  note: "Part of the Dawud Niaz family and company story.",
  pos: "50% 15%",
};

function PersonCard({ p }: { p: Person }) {
  return (
    <article
      className={`org-card group mx-auto w-full max-w-[15rem] overflow-hidden rounded-sm border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        p.advisory ? "border-dashed border-gold/60" : "border-border"
      }`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        <img
          decoding="async"
          src={p.image}
          alt={`${p.name}, ${p.role}`}
          loading="lazy"
          style={{ objectPosition: p.pos ?? "50% 20%" }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-0 h-1 w-full bg-gold-gradient" />
      </div>
      <div className="p-4 text-center">
        <p className="eyebrow text-[0.65rem]">{p.role}</p>
        <h2 className="mt-1 text-xl leading-tight">{p.name}</h2>
        <p className="mt-2 text-sm leading-5 text-muted-foreground">{p.note}</p>
      </div>
    </article>
  );
}

function LeadershipPage() {
  return (
    <CompanyPageShell
      eyebrow="People · Leadership"
      title={
        <>
          Experienced people. <span className="text-gold-gradient">Shared responsibility.</span>
        </>
      }
      intro="Meet the people connected with the leadership, professional guidance and future of Dawud Niaz Engineers and Contractors."
    >
      <div
        className="org-tree"
        aria-label="Leadership tree from the founder to the next generation"
      >
        {/* Level 1 — Founder */}
        <div className="org-top">
          <PersonCard p={founderPerson} />
        </div>

        <div className="org-stem" data-reveal="grow" aria-hidden="true" />

        {/* Level 2 — Leadership team */}
        <div className="org-row">
          {leaders.map((p) => (
            <div key={p.name} className={`org-item${p.advisory ? " org-item-advisory" : ""}`}>
              <PersonCard p={p} />
            </div>
          ))}
        </div>

        <div className="org-stem" data-reveal="grow" aria-hidden="true" />

        {/* Level 3 — Next generation */}
        <div className="org-top">
          <PersonCard p={nextGen} />
        </div>
      </div>
    </CompanyPageShell>
  );
}
