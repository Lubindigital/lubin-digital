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
    label: "01 — AI-Native",
    title: "Built with AI,",
    accentText: "not bolted on",
    description:
      "AI isn't a feature we tack on at the end — it's part of how we design and build, from the first draft to the shipped system. That means smarter workflows, faster iteration, and software that does real work for you, not just looks good.",
    stat: "End",
    statLabel: "to End Delivery",
  },
  {
    label: "02 — Direct Contact",
    title: "Strategy, design,",
    accentText: "and engineering",
    description:
      "You won't get passed between account managers, designers, and developers. You work directly with the person who designs and builds your site and systems — one partner from concept to deployed software. Real communication, real accountability.",
    stat: "1",
    statLabel: "Point of Contact",
  },
  {
    label: "03 — Built to Perform",
    title: "Fast, measurable,",
    accentText: "production-grade",
    description:
      "We build on a modern stack — Next.js, Vercel, and battle-tested AI infrastructure — with performance, SEO, and reliability designed in from the start. Not prototypes. Software built to run in production and earn its keep.",
    icon: "shield",
  },
];
