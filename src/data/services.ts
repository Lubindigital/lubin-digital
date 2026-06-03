export interface ServiceItem {
  /** Short capability label */
  title: string;
  /** One-line, first-person description */
  description: string;
}

export interface Practice {
  /** Practice number, e.g. "01" */
  number: string;
  /** The pillar name */
  practice: string;
  /** One-line framing of the practice */
  tagline: string;
  /** 2–3 concrete capabilities under this practice */
  items: ServiceItem[];
}

export const practices: Practice[] = [
  {
    number: "01",
    practice: "AI-Driven Web Design",
    tagline:
      "Fast, modern sites — designed and built from scratch, never templated.",
    items: [
      {
        title: "Design & build from scratch",
        description:
          "I design and code your site in Next.js — fast to load, clean to read, built for SEO, and yours to own.",
      },
      {
        title: "Web development & integrations",
        description:
          "Forms, CMS, payments, booking, analytics — wired into the platforms you already run so the site actually does work.",
      },
      {
        title: "Maintain & evolve",
        description:
          "Once it's live I keep it quick, fix what breaks, and ship the next feature as your business grows.",
      },
    ],
  },
  {
    number: "02",
    practice: "AI Solutions",
    tagline:
      "Custom AI systems that stand on their own — not AI bolted onto a website.",
    items: [
      {
        title: "Custom AI systems",
        description:
          "Standalone engines like the content & marketing automation I built for Tahoe Teas — turning one idea into email, blog, and social on schedule.",
      },
      {
        title: "Internal tools & assistants",
        description:
          "Assistants and dashboards that draft, sort, answer, and handle the repetitive work your team does by hand today.",
      },
      {
        title: "Model & data integrations",
        description:
          "AI wired directly into the tools you already use — your CRM, inbox, and docs — so it works where the work happens.",
      },
    ],
  },
];
