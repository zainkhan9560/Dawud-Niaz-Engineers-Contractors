import { createFileRoute } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import bank from "@/assets/architectural-design-example.jpg";
import office from "@/assets/architectural-drawing-workspace.jpeg";
import industrial from "@/assets/structural-building-works.jpg";
import plaza from "@/assets/residential-building-example.jpg";
import villa from "@/assets/residential-house-transformation.jpeg";
import site from "@/assets/construction-site-review-team.jpeg";
export const Route = createFileRoute("/selected-projects")({ head: () => ({ meta: [{ title: "Selected Projects | Dawud Niaz Engineers and Contractors" }, { name: "description", content: "Selected project examples listed in the Dawud Niaz company profile, including banking, commercial, industrial and residential work." }] }), component: ProjectsPage });
const projects = [
 {name:"Meezan Bank — Branch Development",scope:"Civil works, interior finishing and MEP coordination",duration:"3 months",value:"PKR 32 million",img:bank},
 {name:"Bank Alfalah — Branch Renovation",scope:"Renovation, flooring, ceiling and finishing works",duration:"2.5 months",value:"PKR 24 million",img:office},
 {name:"MCB Bank — Commercial Branch Works",scope:"Civil modification, interior and external works",duration:"3 months",value:"PKR 28 million",img:site},
 {name:"HBL Office & Branch Upgradation",scope:"Renovation, civil works and finishing",duration:"3 months",value:"PKR 35 million",img:office},
 {name:"Industrial Warehouse Development",scope:"Earthworks, RCC structure and flooring",duration:"7 months",value:"PKR 145 million",img:industrial},
 {name:"Commercial Plaza Development",scope:"Structure, masonry, finishing and external works",duration:"10 months",value:"PKR 190 million",img:plaza},
 {name:"Corporate Office Development",scope:"Civil, interior and architectural execution",duration:"5 months",value:"PKR 68 million",img:site},
 {name:"Residential Villa Project",scope:"Complete turnkey construction",duration:"9 months",value:"PKR 85 million",img:villa},
];
function ProjectsPage(){return <CompanyPageShell eyebrow="Selected Projects · Company Profile" title={<>Selected projects. <span className="text-gold-gradient">Practical delivery.</span></>} intro="The following project names, scopes, durations and values are taken from the supplied company profile. Images are illustrative service visuals, not verified photographs of the named sites; replace them with approved project-specific photographs before public launch."><div className="grid gap-6 md:grid-cols-2">{projects.map((p,i)=><article key={p.name} className="overflow-hidden border border-border bg-card"><div className="relative aspect-[16/8] overflow-hidden"><img src={p.img} alt={`Illustrative image for ${p.name}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"/><span className="absolute left-4 top-4 bg-background/90 px-3 py-1 text-xs font-semibold tracking-widest">PROJECT 0{i+1}</span></div><div className="p-6"><h2 className="text-2xl">{p.name}</h2><p className="mt-3 leading-6 text-muted-foreground">{p.scope}</p><div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4"><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Duration</p><p className="mt-1 font-semibold">{p.duration}</p></div><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Profile-listed value</p><p className="mt-1 font-semibold text-gold">{p.value}</p></div></div></div></article>)}</div><p className="mt-8 text-xs leading-5 text-muted-foreground">Publication note: confirm client permissions and the accuracy of project details, dates and values before launch. The supplied profile lists these details; this website has not independently verified them.</p></CompanyPageShell>}
