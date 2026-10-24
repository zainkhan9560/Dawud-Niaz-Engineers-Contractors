import architecture from "@/assets/architectural-drawing-workspace.webp";
import structural from "@/assets/structural-building-works.webp";
import planning from "@/assets/construction-planning-example.webp";
import residential from "@/assets/residential-building-example.webp";
import building from "@/assets/structural-site-inspection-team.webp";
import renovation from "@/assets/residential-house-transformation.webp";

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
    metaTitle: "Architectural Drawings in Lahore | Dawud Niaz Engineers",
    metaDescription:
      "Architectural drawings in Lahore: floor plans, elevations, sections and working drawings for houses, apartments and commercial buildings.",
    eyebrow: "Services · Design",
    title: "Architectural drawings in Lahore",
    accent: "planned to be built.",
    intro:
      "Good drawings save time and money on site. We prepare architectural drawings for houses, apartments and commercial buildings in Lahore, from the first concept layout to working drawings that the construction team can build from.",
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
      "structural-drawings-lahore",
      "house-construction-lahore",
      "construction-cost-estimation-lahore",
    ],
  },
  {
    slug: "structural-drawings-lahore",
    name: "Structural Drawings",
    metaTitle: "Structural Drawings in Lahore | Dawud Niaz Engineers",
    metaDescription:
      "Structural drawings in Lahore: foundations, columns, beams, slabs and reinforcement details coordinated with your architectural plans.",
    eyebrow: "Services · Engineering",
    title: "Structural drawings in Lahore",
    accent: "that carry the load.",
    intro:
      "Structural drawings show how a building carries its loads, from foundations to the roof. We prepare them in coordination with the architectural plan so the structure fits the design and the site team has clear details to follow.",
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
    ],
  },
  {
    slug: "construction-cost-estimation-lahore",
    name: "Construction Cost Estimation",
    metaTitle: "Construction Cost Estimation in Lahore | Dawud Niaz",
    metaDescription:
      "Construction cost estimation in Lahore: quantity take-offs and clear budgets for grey structure and complete finishing before you build.",
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
      "house-construction-lahore",
      "architectural-drawings-lahore",
      "renovation-upgradation-lahore",
    ],
  },
  {
    slug: "house-construction-lahore",
    name: "House Construction",
    metaTitle: "House Construction in Lahore | Dawud Niaz Engineers",
    metaDescription:
      "House construction in Lahore from drawings to handover: structure, finishing and site supervision by a team of engineers.",
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
    metaTitle: "Commercial Building Construction in Lahore | Dawud Niaz",
    metaDescription:
      "Commercial, apartment and industrial building construction in Lahore with planning, site supervision, quality checks and MEP coordination.",
    eyebrow: "Services · Commercial & Industrial",
    title: "Commercial and apartment building construction in Lahore",
    accent: "planned and coordinated.",
    intro:
      "Apartments, plazas, offices, bank branches and industrial buildings need careful planning, coordination between trades and clear records. We deliver them with site supervision, quality checks and practical resource planning.",
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
    metaTitle: "Renovation & Upgradation in Lahore | Dawud Niaz Engineers",
    metaDescription:
      "Building renovation and upgradation in Lahore: civil modifications, flooring, ceilings and finishing for houses, offices and bank branches.",
    eyebrow: "Services · Renovation",
    title: "Renovation and upgradation in Lahore",
    accent: "done with a plan.",
    intro:
      "Renovation is harder than new construction because every building hides surprises. We start with a survey, plan the work in phases and carry out civil modifications and finishing for houses, offices and bank branches.",
    image: renovation,
    imageAlt: "House transformation and renovation work",
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
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const servicePath = (slug: string) => `/services/${slug}`;
