import { createFileRoute } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import ceo from "@/assets/engr-muhammad-aun-niaz-profile.jpg";
import founder from "@/assets/niaz-ahmad-founder.jpg";
import shafqat from "@/assets/shafqat-niaz.jpg";
import ali from "@/assets/ali-faisal-legal-advisor.jpg";
import dawud from "@/assets/dawud-niaz.jpg";
export const Route = createFileRoute("/leadership")({ head: () => ({ meta: [{ title: "Leadership | Dawud Niaz Engineers and Contractors" }, { name: "description", content: "Meet the leadership and professional team at Dawud Niaz Engineers and Contractors." }] }), component: LeadershipPage });
const people = [
 {name:"Niaz Ahmad",role:"Founder",image:founder,note:"Founder of Dawud Niaz Engineers and Contractors."},
 {name:"Engr. Muhammad Aun Niaz",role:"CEO / Director Technical",image:ceo,note:"Engineering leadership and technical direction."},
 {name:"Malik Saqib Niaz",role:"Managing Director",initials:"MSN",note:"Management and organisational leadership."},
 {name:"Shafqat Niaz",role:"Marketing Director",image:shafqat,note:"Marketing and client communication."},
 {name:"Ali Faisal",role:"Legal Advisor",image:ali,note:"Legal advisory support for the company."},
 {name:"Dawud Niaz",role:"Next Generation",image:dawud,note:"Part of the Dawud Niaz family and company story."},
];
function LeadershipPage(){return <CompanyPageShell eyebrow="People · Leadership" title={<>Experienced people. <span className="text-gold-gradient">Shared responsibility.</span></>} intro="Meet the people connected with the leadership, professional guidance and future of Dawud Niaz Engineers and Contractors."><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{people.map(p=><article key={p.name} className="overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><div className="relative flex h-64 items-center justify-center overflow-hidden bg-surface sm:h-60">{p.image?<img src={p.image} alt={`${p.name}, ${p.role}`} className="h-full w-full object-contain object-center p-2"/>:<div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200"><div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/60 bg-white font-display text-2xl text-gold">{p.initials}</div><span className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Portrait unavailable</span></div>}<span className="absolute bottom-0 left-0 h-1 w-full bg-gold-gradient"/></div><div className="p-4"><p className="eyebrow">{p.role}</p><h2 className="mt-1 text-xl">{p.name}</h2><p className="mt-2 text-sm leading-5 text-muted-foreground">{p.note}</p></div></article>)}</div></CompanyPageShell>}
