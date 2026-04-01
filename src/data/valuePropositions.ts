export interface ValueProp {
  label: string;
  title: string;
  accentText: string;
  description: string;
  stat?: string;
  statLabel?: string;
  icon?: "shield";
}

export const valuePropositions: ValueProp[] = [
  {
    label: "01 — Quality Work",
    title: "Agency Quality,",
    accentText: "Honest Pricing",
    description:
      "Big agencies charge big prices. We deliver the same caliber of design and performance at a fraction of the cost — because we keep our team lean, our process efficient, and our focus on what actually matters: results.",
    stat: "100",
    statLabel: "Avg. Hours Per Project",
  },
  {
    label: "02 — Direct Contact",
    title: "No Middlemen,",
    accentText: "just Us",
    description:
      "You won't get passed between account managers, designers, and developers. When you work with Lubin Digital, you work directly with the person building your site. Real communication, real accountability.",
    stat: "1",
    statLabel: "Point of Contact",
  },
  {
    label: "03 — Built-In SEO",
    title: "Supercharged",
    accentText: "by SEO",
    description:
      "We don't just build SEO-friendly sites — we build sites designed to rank. Local search optimization, schema markup, fast load times, and keyword strategy are all built into every project from the start.",
    icon: "shield",
  },
];
