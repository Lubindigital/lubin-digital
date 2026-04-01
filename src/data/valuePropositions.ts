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
    label: "01 — Websites Built",
    title: "Websites That",
    accentText: "Grow Your Business",
    description:
      "Generic websites don't cut it. Every site we build is designed to convert — clear calls-to-action, fast load times, mobile-first design, and SEO structure that puts you in front of the people searching for your services.",
    stat: "50",
    statLabel: "Websites Built & Counting",
  },
  {
    label: "02 — Quality Work",
    title: "Agency Quality,",
    accentText: "Honest Pricing",
    description:
      "Big agencies charge big prices. We deliver the same caliber of design and performance at a fraction of the cost — because we keep our team lean, our process efficient, and our focus on what actually matters: results.",
    stat: "100",
    statLabel: "Avg. Hours Per Project",
  },
  {
    label: "03 — Direct Contact",
    title: "No Middlemen,",
    accentText: "just Us",
    description:
      "You won't get passed between account managers, designers, and developers. When you work with Lubin Digital, you work directly with the person building your site. Real communication, real accountability.",
    stat: "1",
    statLabel: "Point of Contact",
  },
  {
    label: "04 — Built-In SEO",
    title: "Supercharged",
    accentText: "by SEO",
    description:
      "We don't just build SEO-friendly sites — we build sites designed to rank. Local search optimization, schema markup, fast load times, and keyword strategy are all built into every project from the start.",
    icon: "shield",
  },
  {
    label: "05 — Ongoing Support",
    title: "Built-In",
    accentText: "Peace of Mind",
    description:
      "Every website comes with ongoing maintenance, hosting, and support. Free edits, SSL security, backups, and uptime monitoring — so you never have to worry about your site going down or falling behind.",
    stat: "30",
    statLabel: "Day Money-Back Guarantee",
  },
];
