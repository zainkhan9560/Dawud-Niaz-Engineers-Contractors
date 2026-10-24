import architecture from "@/assets/architectural-drawing-workspace.webp";
import structural from "@/assets/structural-building-works.webp";
import planning from "@/assets/construction-planning-example.webp";
import residential from "@/assets/residential-building-example.webp";
import building from "@/assets/structural-site-inspection-team.webp";
import renovation from "@/assets/house-renovation-before-after.webp";

export type ServicePage = {
  slug: string;
  /** short name used in menus and links */
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  imageAlt: string;
  includes: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: ServicePage[] = [
  {
    slug: "architectural-drawings-lahore",
    name: "Architectural Drawings",
    metaTitle: "Architect in Lahore | Architectural Design | Dawud Niaz",
    metaDescription:
      "Architect in Lahore for architectural design: floor plans, elevations, sections and working drawings for houses, apartments and commercial buildings.",
    eyebrow: "Services · Design",
    title: "Architectural design and drawings in Lahore",
    accent: "planned to be built.",
    intro:
      "Looking for an architect in Lahore? Good drawings save time and money on site. We prepare architectural design and drawings for houses, apartments and commercial buildings in Lahore, from the first concept layout to working drawings that the construction team can build from.",
    image: architecture,
    imageAlt: "Architectural floor plans, model and drawing tools on a design desk",
    includes: [
      "Concept layouts and floor plans",
      "Elevations and sections",
      "Working (construction) drawings",
      "Door, window and finishing details",
      "Space planning, room by room",
      "Coordination with structural, electrical and plumbing drawings",
    ],
    process: [
      {
        title: "Brief and site details",
        text: "We collect plot size and location, your requirements (rooms, floors, parking, future expansion) and a rough budget.",
      },
      {
        title: "Concept layout",
        text: "You receive layout options to review, so changes are made on paper rather than on site.",
      },
      {
        title: "Revisions",
        text: "We refine the plan with you until the layout, elevation and room sizes are right.",
      },
      {
        title: "Working drawings and handover",
        text: "You receive a complete drawing set prepared for construction and, where needed, for submission to the relevant authority.",
      },
    ],
    faqs: [
      {
        q: "What do I need to start?",
        a: "Plot dimensions and location, your requirements for rooms, floors and parking, and a rough budget. If you already have ideas or sample layouts, share them as well.",
      },
      {
        q: "Do you prepare drawings for approval submission?",
        a: "Approval requirements differ by authority, area and building type. Tell us which authority applies and we will prepare the drawings in the format that is needed.",
      },
      {
        q: "Can you redesign an existing house?",
        a: "Yes. We survey the existing building, prepare drawings of what is there and then design the new layout. See our renovation service for the construction side.",
      },
      {
        q: "How long does it take?",
        a: "It depends on the size of the building and the number of revisions. We give you a timeline after reviewing your requirements.",
      },
    ],
    related: [
      "house-map-design-lahore",
      "structural-drawings-lahore",
      "house-construction-lahore",
      "construction-cost-estimation-lahore",
    ],
  },
  {
    slug: "structural-drawings-lahore",
    name: "Structural Drawings",
    metaTitle: "Structural Engineer in Lahore | Structural Drawings | Dawud Niaz",
    metaDescription:
      "Structural engineer in Lahore: structural drawings for foundations, columns, beams, slabs and reinforcement, coordinated with your architectural plans.",
    eyebrow: "Services · Engineering",
    title: "Structural engineering and drawings in Lahore",
    accent: "that carry the load.",
    intro:
      "Need a structural engineer in Lahore? Structural drawings show how a building carries its loads, from foundations to the roof. We prepare them in coordination with the architectural plan so the structure fits the design and the site team has clear details to follow.",
    image: structural,
    imageAlt: "Reinforced concrete structure under construction",
    includes: [
      "Foundation and footing layouts",
      "Column layout and schedule",
      "Beam and slab layouts",
      "Reinforcement details and schedules",
      "Staircase, lintel and other element details",
      "General notes and specifications",
    ],
    process: [
      {
        title: "Review of architectural plans and site",
        text: "We study the layout, the number of floors, the use of the building and any soil information available for the site.",
      },
      {
        title: "Structural system",
        text: "We select the structural arrangement and loads and check that columns and beams fit the architectural plan.",
      },
      {
        title: "Design and drawing preparation",
        text: "Sizes and reinforcement are worked out and shown on clear drawings for each element.",
      },
      {
        title: "Coordination and handover",
        text: "We resolve clashes with architectural and services drawings and hand over the final set with notes for site execution.",
      },
    ],
    faqs: [
      {
        q: "Do I need a soil test?",
        a: "Soil bearing capacity affects foundation design. A soil investigation is recommended, especially for multi-storey buildings, and we can advise based on your site and building.",
      },
      {
        q: "Why must structural and architectural drawings match?",
        a: "Columns, beams and walls occupy the same space. If the two sets are not coordinated, problems appear on site, where they are expensive to fix.",
      },
      {
        q: "Can I add another floor later?",
        a: "Tell us at the start. Foundations and columns can be designed with future floors in mind, which is far easier than strengthening a building afterwards.",
      },
      {
        q: "Can you review drawings I already have?",
        a: "Yes. Share them and we will tell you what is missing or unclear before construction begins.",
      },
    ],
    related: [
      "architectural-drawings-lahore",
      "building-construction-lahore",
      "construction-cost-estimation-lahore",
      "construction-consultancy-lahore",
    ],
  },
  {
    slug: "construction-cost-estimation-lahore",
    name: "Construction Cost Estimation",
    metaTitle: "Cost Estimation in Lahore | Construction Estimates | Dawud Niaz",
    metaDescription:
      "Cost estimation in Lahore: quantity take-offs and clear budgets for grey structure and complete construction before you build.",
    eyebrow: "Services · Planning",
    title: "Construction cost estimation in Lahore",
    accent: "know the budget first.",
    intro:
      "Most budget problems start before construction begins. We prepare quantity take-offs and cost estimates from your drawings so you know what to expect for materials, labour and finishing, and can plan your payments.",
    image: planning,
    imageAlt: "Construction planning documents and cost estimation sheets",
    includes: [
      "Quantity take-off from drawings",
      "Cost breakdown for materials, labour and finishing",
      "Estimates for grey structure and for complete construction",
      "Budget summary and phasing of payments",
      "Contingency allowance",
      "Comparison of options, such as finishing levels",
    ],
    process: [
      {
        title: "Drawings and scope",
        text: "We start from your drawings and a clear list of what is and is not included.",
      },
      {
        title: "Quantities",
        text: "Concrete, steel, masonry, finishing and services quantities are measured from the drawings.",
      },
      {
        title: "Rates and assumptions",
        text: "Current rates are applied and every assumption is written down so you can compare quotations fairly.",
      },
      {
        title: "Budget report",
        text: "You receive a summary you can use for planning, financing and comparing contractors.",
      },
    ],
    faqs: [
      {
        q: "How accurate is an estimate?",
        a: "It depends on how detailed the drawings are, the materials you choose and current market rates. Prices change, so estimates are valid for a limited time and we state our assumptions.",
      },
      {
        q: "What is the difference between grey structure and complete construction?",
        a: "Grey structure usually means the building up to its structural frame, walls and roof, before finishing works. Exact inclusions vary between contracts, so we list them clearly in the estimate.",
      },
      {
        q: "Can I get a quick idea before ordering an estimate?",
        a: "Yes. Use our cost calculator for a rough budget, then contact us for an estimate based on your drawings.",
      },
      {
        q: "Do you estimate renovation work?",
        a: "Yes. We survey the existing building first, because renovation costs depend heavily on its condition.",
      },
    ],
    related: [
      "boq-services-lahore",
      "house-construction-lahore",
      "architectural-drawings-lahore",
      "renovation-upgradation-lahore",
    ],
  },
  {
    slug: "house-construction-lahore",
    name: "House Construction",
    metaTitle: "House Construction in Lahore | Civil Engineers | Dawud Niaz",
    metaDescription:
      "House construction in Lahore from drawings to handover: structure, finishing and site supervision by civil engineers.",
    eyebrow: "Services · Residential",
    title: "House construction in Lahore",
    accent: "from plot to handover.",
    intro:
      "Building a home is a big decision. We build houses in Lahore with engineering supervision at every stage, from drawings and structure to finishing, so you know what is happening on your site and what it will cost.",
    image: residential,
    imageAlt: "Residential building under construction",
    includes: [
      "Coordination of architectural and structural drawings",
      "Site setup, excavation and foundations",
      "RCC frame and slabs",
      "Brickwork and plaster",
      "Electrical and plumbing works",
      "Flooring, doors, windows, paint and fixtures",
      "Site supervision and quality checks",
      "Progress updates during construction",
    ],
    process: [
      {
        title: "Plan and budget",
        text: "Drawings are finalised and a written scope and estimate are agreed before work starts.",
      },
      {
        title: "Structure",
        text: "Foundations, columns, beams and slabs are built and checked against the structural drawings.",
      },
      {
        title: "Finishing",
        text: "Walls, services, flooring, joinery, paint and fixtures are completed to the agreed specification.",
      },
      {
        title: "Handover",
        text: "Final inspection of the work, completion of remaining items and handover of the finished house.",
      },
    ],
    faqs: [
      {
        q: "Can I choose grey structure only?",
        a: "Yes. Many owners build the grey structure first and finish later. We can price both ways and explain exactly what each includes.",
      },
      {
        q: "Will I know what is happening on site?",
        a: "Yes. We share progress with you during construction and you are welcome to visit the site and ask questions.",
      },
      {
        q: "Do you also prepare the drawings?",
        a: "Yes. Using the same team for drawings and construction avoids mismatches between design and site.",
      },
      {
        q: "How do I get a price?",
        a: "Send us your drawings or plot details and requirements. We prepare a written estimate listing the scope. You can try the cost calculator first for a rough figure.",
      },
    ],
    related: [
      "architectural-drawings-lahore",
      "construction-cost-estimation-lahore",
      "renovation-upgradation-lahore",
    ],
  },
  {
    slug: "building-construction-lahore",
    name: "Commercial & Apartment Buildings",
    metaTitle: "Building Contractor in Lahore | Commercial Construction | Dawud Niaz",
    metaDescription:
      "Building contractor in Lahore for commercial, apartment and industrial construction: planning, site supervision, quality checks and MEP coordination.",
    eyebrow: "Services · Commercial & Industrial",
    title: "Building contractor in Lahore for commercial and apartment buildings",
    accent: "planned and coordinated.",
    intro:
      "As a building contractor in Lahore, we construct apartments, plazas, offices, bank branches and industrial buildings, which need careful planning, coordination between trades and clear records. We deliver them with site supervision, quality checks and practical resource planning.",
    image: building,
    imageAlt: "Engineers reviewing structural work on a building site",
    includes: [
      "Construction planning and scheduling",
      "RCC structure and slabs",
      "Masonry, plaster and finishing",
      "Coordination of electrical, plumbing and HVAC works",
      "Quality inspections and safety on site",
      "Progress monitoring and reporting",
      "Contractor and supplier coordination",
      "Completion and handover",
    ],
    process: [
      {
        title: "Planning",
        text: "Scope, drawings, schedule and resources are agreed before mobilisation.",
      },
      {
        title: "Construction",
        text: "Structure and masonry are executed with supervision and checked against the drawings.",
      },
      {
        title: "Services and finishing",
        text: "Electrical, plumbing, HVAC and finishing trades are coordinated so they do not clash.",
      },
      {
        title: "Inspection and handover",
        text: "Final inspection, completion of remaining items and handover with the required records.",
      },
    ],
    faqs: [
      {
        q: "What kinds of buildings do you work on?",
        a: "Our selected projects include banking branches, a commercial plaza and an industrial warehouse. See the selected projects page for details.",
      },
      {
        q: "Can you work from our consultant's drawings?",
        a: "Yes. We can build from drawings prepared by your architect or engineer, or prepare them ourselves.",
      },
      {
        q: "How is quality controlled?",
        a: "Work is checked against the drawings and specification during construction, with inspections before each stage is closed.",
      },
      {
        q: "How do I request a quotation?",
        a: "Send the drawings or a description of the building, its location and your timeline, and we will respond with a written quotation.",
      },
    ],
    related: [
      "structural-drawings-lahore",
      "construction-cost-estimation-lahore",
      "renovation-upgradation-lahore",
    ],
  },
  {
    slug: "renovation-upgradation-lahore",
    name: "Renovation & Upgradation",
    metaTitle: "Renovation & Upgradation in Lahore | Dawud Niaz",
    metaDescription:
      "Building renovation and upgradation in Lahore: civil modifications, flooring, ceilings and finishing for houses, offices and bank branches.",
    eyebrow: "Services · Renovation",
    title: "Renovation and upgradation in Lahore",
    accent: "done with a plan.",
    intro:
      "Renovation is harder than new construction because every building hides surprises. We start with a survey, plan the work in phases and carry out civil modifications and finishing for houses, offices and bank branches.",
    image: renovation,
    imageAlt: "House renovation in Lahore: before and after, from plaster removal to finished exterior",
    includes: [
      "Survey and condition assessment",
      "Removal of existing fixtures and partitions",
      "Structural modifications and repairs",
      "New walls and partitions",
      "Flooring, ceiling and lighting",
      "Waterproofing and leveling",
      "Interior and exterior finishing",
      "Final touch-ups and handover",
    ],
    process: [
      {
        title: "Survey",
        text: "We inspect the building, measure it and note its condition before any plan is made.",
      },
      {
        title: "Plan and phasing",
        text: "Scope, cost and a sequence of work are agreed, including how to limit disruption.",
      },
      {
        title: "Execution",
        text: "Civil works, services and finishing are carried out under supervision.",
      },
      {
        title: "Handover",
        text: "Final inspection, clean-up and handover of the renovated space.",
      },
    ],
    faqs: [
      {
        q: "Can the work be done while the building is in use?",
        a: "Often yes, in phases. It depends on the scope, and we plan the sequence, safety and dust and noise control with you.",
      },
      {
        q: "Do you survey before quoting?",
        a: "Yes. Condition and hidden defects can change the cost, so we inspect first and quote afterwards.",
      },
      {
        q: "Can you redesign the layout as well?",
        a: "Yes. Our architectural drawings service can prepare the new layout before work starts.",
      },
      {
        q: "Do you handle commercial renovations?",
        a: "Yes. Our selected projects include renovation and upgradation of bank branches and offices.",
      },
    ],
    related: [
      "architectural-drawings-lahore",
      "house-construction-lahore",
      "construction-cost-estimation-lahore",
    ],
  },
  {
    slug: "house-map-design-lahore",
    name: "House Map Design",
    metaTitle: "House Map Design in Lahore | House Designer | Dawud Niaz",
    metaDescription:
      "House map design in Lahore: practical house plans, elevations and working drawings from a house designer who plans around your plot, family and budget.",
    eyebrow: "Services · Design",
    title: "House map design in Lahore",
    accent: "that fits your plot and family.",
    intro:
      "A good house map decides how comfortable a home is for decades. We prepare house map design in Lahore for plots of different sizes, planning rooms, lounges, kitchens, parking and stairs around your family's daily routine, your plot and your budget, and then develop the approved layout into drawings the builder can use.",
    image: architecture,
    imageAlt: "House plan drawings, floor plan sketches and design tools on a desk",
    includes: [
      "Plot study and requirement checklist",
      "Ground, first and second floor layouts",
      "Front and side elevations",
      "Kitchen, bathroom and staircase planning",
      "Parking, lawn and boundary wall layout",
      "Working drawings for construction",
      "Coordination with structural, electrical and plumbing drawings",
    ],
    process: [
      {
        title: "Plot and requirements",
        text: "We take your plot size, orientation, number of family members, rooms needed and budget range.",
      },
      {
        title: "Layout options",
        text: "You review layout options and comment on room sizes, circulation, light and ventilation.",
      },
      {
        title: "Elevation and revisions",
        text: "The exterior is developed and the plan is revised until you are satisfied.",
      },
      {
        title: "Drawing set",
        text: "You receive a drawing set for construction and, where required, for submission to the relevant authority.",
      },
    ],
    faqs: [
      {
        q: "Can you design a house map for a small plot?",
        a: "Yes. Small plots need careful planning of stairs, light and room sizes. Share the plot dimensions and your must-have rooms and we will propose layouts.",
      },
      {
        q: "Do I get the structural drawings as well?",
        a: "Structural drawings are a separate service, but we coordinate them with the house map so columns and beams fit the plan.",
      },
      {
        q: "Can I bring my own idea or a sample plan?",
        a: "Yes. Sample plans and sketches are a helpful starting point for the house designer.",
      },
      {
        q: "Will the design match my budget?",
        a: "We discuss your budget at the start and can prepare a cost estimate once the layout is final.",
      },
    ],
    related: [
      "architectural-drawings-lahore",
      "structural-drawings-lahore",
      "construction-cost-estimation-lahore",
      "house-construction-lahore",
    ],
  },
  {
    slug: "boq-services-lahore",
    name: "BOQ Services",
    metaTitle: "BOQ Services in Lahore | Bill of Quantities | Dawud Niaz",
    metaDescription:
      "BOQ services in Lahore: itemised bill of quantities prepared from your drawings for tendering, contractor comparison and cost control.",
    eyebrow: "Services · Estimation",
    title: "BOQ services in Lahore",
    accent: "for clear, comparable pricing.",
    intro:
      "A bill of quantities (BOQ) lists every item of work with its quantity and unit, so contractors price the same scope and you can compare quotations fairly. We prepare BOQ services in Lahore for houses, apartments and commercial buildings, directly from your architectural and structural drawings.",
    image: planning,
    imageAlt: "Construction planning documents and quantity sheets",
    includes: [
      "Item-wise bill of quantities from drawings",
      "Excavation, concrete, steel, masonry and finishing items",
      "Units, quantities and specification notes",
      "Rates and amounts where required",
      "Summary sheet by trade or by floor",
      "Revision when drawings change",
      "Support in comparing contractor quotations",
    ],
    process: [
      {
        title: "Drawing review",
        text: "We check the architectural and structural drawings and note anything missing.",
      },
      {
        title: "Quantity take-off",
        text: "Quantities are measured item by item for each part of the building.",
      },
      {
        title: "BOQ preparation",
        text: "Items are arranged in a clear format with units, quantities and specification notes.",
      },
      {
        title: "Review and handover",
        text: "You receive the BOQ and we explain it so it can be used for tenders and cost control.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between a BOQ and a cost estimate?",
        a: "A BOQ lists items and quantities so contractors can price them. A cost estimate puts expected rates against those quantities to give a budget. See our cost estimation service.",
      },
      {
        q: "Do you need complete drawings?",
        a: "Complete drawings give the most accurate BOQ. If drawings are incomplete we note the assumptions made.",
      },
      {
        q: "Can the BOQ be used for tendering?",
        a: "Yes. A BOQ allows each contractor to price the same scope, which makes quotations easier to compare.",
      },
      {
        q: "Do you update the BOQ if the design changes?",
        a: "Yes. Send the revised drawings and we update the affected items.",
      },
    ],
    related: [
      "construction-cost-estimation-lahore",
      "grey-structure-construction-lahore",
      "turnkey-construction-lahore",
      "structural-drawings-lahore",
    ],
  },
  {
    slug: "grey-structure-construction-lahore",
    name: "Grey Structure Construction",
    metaTitle: "Grey Structure in Lahore | Grey Structure Construction | Dawud Niaz",
    metaDescription:
      "Grey structure in Lahore: foundations, RCC frame, slabs and brickwork built under engineering supervision, ready for finishing.",
    eyebrow: "Services · Construction",
    title: "Grey structure construction in Lahore",
    accent: "built right the first time.",
    intro:
      "The grey structure is the foundation of everything that follows: excavation, foundations, columns, beams, slabs, brickwork and plaster. We build grey structure in Lahore under engineering supervision, checking each stage against the drawings so the finishing stage starts on a sound base.",
    image: structural,
    imageAlt: "Reinforced concrete grey structure under construction",
    includes: [
      "Site setup, excavation and foundations",
      "Columns, beams and RCC slabs",
      "Brickwork and plaster",
      "Staircase and boundary wall structure",
      "Rough electrical and plumbing conduits",
      "Stage-wise inspection against drawings",
      "Progress updates during construction",
    ],
    process: [
      {
        title: "Drawings and estimate",
        text: "We confirm the drawings and agree the scope and grey structure cost.",
      },
      {
        title: "Foundation and frame",
        text: "Excavation, foundations and the RCC frame are built with checks on steel, shuttering and concrete.",
      },
      {
        title: "Slabs and masonry",
        text: "Slabs, brickwork and plaster are completed floor by floor.",
      },
      {
        title: "Handover",
        text: "Grey structure is handed over, ready for finishing by us or by your own contractor.",
      },
    ],
    faqs: [
      {
        q: "What is included in grey structure?",
        a: "It generally covers the structural and masonry work up to plaster, before flooring, paint, doors, windows and fixtures. We confirm the exact scope in writing for your project.",
      },
      {
        q: "Can I finish the house with another contractor?",
        a: "Yes. You can take grey structure from us and arrange finishing separately, or ask us for complete construction.",
      },
      {
        q: "How do you control quality?",
        a: "Work is checked against the drawings at each stage, including steel placement before concrete is poured.",
      },
      {
        q: "Can you give a grey structure cost estimate first?",
        a: "Yes. See our cost estimation and BOQ services, or use the cost calculator for a quick idea.",
      },
    ],
    related: [
      "house-construction-lahore",
      "turnkey-construction-lahore",
      "boq-services-lahore",
      "structural-drawings-lahore",
    ],
  },
  {
    slug: "turnkey-construction-lahore",
    name: "Turnkey Construction",
    metaTitle: "Turnkey Construction in Lahore | Design & Build | Dawud Niaz",
    metaDescription:
      "Turnkey construction in Lahore: design, drawings, estimate, construction and finishing handled by one team and handed over ready to use.",
    eyebrow: "Services · Turnkey",
    title: "Turnkey construction in Lahore",
    accent: "from drawings to handover.",
    intro:
      "With turnkey construction in Lahore, one team looks after design, drawings, cost planning, construction and finishing, and hands over a building that is ready to use. It suits owners who want a single point of responsibility instead of coordinating several consultants and contractors.",
    image: residential,
    imageAlt: "Residential building constructed from design to finishing",
    includes: [
      "Architectural and structural drawings",
      "Cost estimate and BOQ",
      "Grey structure construction",
      "Electrical, plumbing and finishing works",
      "Site supervision and quality checks",
      "Regular progress updates",
      "Final inspection and handover",
    ],
    process: [
      {
        title: "Brief and design",
        text: "We agree your requirements, budget and timeline, then prepare the drawings.",
      },
      {
        title: "Estimate and agreement",
        text: "A cost estimate and scope of work are agreed before the work begins.",
      },
      {
        title: "Construction and finishing",
        text: "Structure, services and finishing are carried out and coordinated by one team.",
      },
      {
        title: "Handover",
        text: "After final inspection the building is handed over with the remaining items completed.",
      },
    ],
    faqs: [
      {
        q: "What does turnkey mean?",
        a: "It means one contractor takes responsibility for the project from design through construction and finishing, then hands over the completed building.",
      },
      {
        q: "Can I make changes during construction?",
        a: "Small changes are usually possible. We explain the effect of a change on cost and time before it is made.",
      },
      {
        q: "Is turnkey suitable for commercial buildings?",
        a: "Yes, depending on scope. Share your drawings or requirements and we will advise.",
      },
      {
        q: "How is the price decided?",
        a: "The price is based on the agreed drawings, specification and BOQ, which we put in writing.",
      },
    ],
    related: [
      "house-construction-lahore",
      "grey-structure-construction-lahore",
      "boq-services-lahore",
      "architectural-drawings-lahore",
    ],
  },
  {
    slug: "construction-consultancy-lahore",
    name: "Construction Consultancy",
    metaTitle: "Construction Consultant in Lahore | Civil Engineer | Dawud Niaz",
    metaDescription:
      "Construction consultant in Lahore: civil engineer advice on drawings, cost, contractors and site quality before and during your project.",
    eyebrow: "Services · Consultancy",
    title: "Construction consultant in Lahore",
    accent: "for confident decisions.",
    intro:
      "Before you commit to a design or a contractor, an independent opinion from a civil engineer can prevent costly mistakes. We act as a construction consultant in Lahore, reviewing drawings and quotations, advising on materials and methods, and checking progress on site.",
    image: building,
    imageAlt: "Engineers reviewing structural work on a building site",
    includes: [
      "Review of architectural and structural drawings",
      "Review of contractor quotations and BOQs",
      "Advice on materials, methods and sequencing",
      "Site visits and progress checks",
      "Quality and safety observations",
      "Support with planning a phased budget",
      "Guidance for plot purchase and building decisions",
    ],
    process: [
      {
        title: "Understand the project",
        text: "We review your plot, drawings, budget and what you want to decide.",
      },
      {
        title: "Review",
        text: "Drawings, quotations and scope are reviewed for gaps, risks and savings.",
      },
      {
        title: "Advice",
        text: "You receive clear recommendations in plain language.",
      },
      {
        title: "Site support",
        text: "Where needed, we visit the site and check work against the drawings.",
      },
    ],
    faqs: [
      {
        q: "When should I hire a construction consultant?",
        a: "Ideally before construction starts, so the design, estimate and contractor are checked first. It also helps mid-project if you are unsure about quality or cost.",
      },
      {
        q: "Can you review another contractor's quotation?",
        a: "Yes. Share the quotation and drawings and we will point out missing items and unclear scope.",
      },
      {
        q: "Do you visit the site?",
        a: "Yes, site visits can be arranged to check progress against drawings and specification.",
      },
      {
        q: "Is consultancy available if you are not building for me?",
        a: "Yes, consultancy can be taken as a standalone service.",
      },
    ],
    related: [
      "building-construction-lahore",
      "construction-cost-estimation-lahore",
      "structural-drawings-lahore",
      "house-construction-lahore",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const servicePath = (slug: string) => `/services/${slug}`;
