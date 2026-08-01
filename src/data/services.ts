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
    practice: "Web Design & Build",
    tagline:
      "Drawn and coded from scratch. No theme, no page builder, no template with your logo dropped in.",
    items: [
      {
        title: "Design and build",
        description:
          "I draw the layout, then I write the code. It ships on Next.js, loads fast, reads clean on a phone, and the whole thing belongs to you.",
      },
      {
        title: "Integrations",
        description:
          "Forms, payments, booking, a CMS you can actually use, analytics that tell you something. Wired into whatever you already run, so the site does work instead of sitting there.",
      },
      {
        title: "After launch",
        description:
          "I keep it fast, fix what breaks, and build the next thing when you need it. You text me. There's no ticket queue to route you through.",
      },
      {
        title: "Findable by default",
        description:
          "More people ask ChatGPT before they Google. Every site ships with FAQ schema search engines can read straight off the page, a sitemap, and a robots.txt that welcomes AI answer engines instead of blocking them. Thryv and Hibu sell this as an upgrade. It's already in your price with me.",
      },
    ],
  },
  {
    number: "02",
    practice: "Custom AI Systems",
    tagline:
      "Software that runs on a schedule and does a job you're currently doing by hand.",
    items: [
      {
        title: "Content and marketing engines",
        description:
          "The Tahoe Teas system takes one idea and drafts the email, the blog post, and the Instagram caption at once. The owner approves each one, then it publishes on schedule.",
      },
      {
        title: "Internal tools",
        description:
          "Dashboards and assistants for the work nobody wants: sorting what comes in, drafting the same reply for the hundredth time, keeping two systems agreeing with each other.",
      },
      {
        title: "Wired into your tools",
        description:
          "Your CRM, your inbox, your Shopify store. The AI runs where the work already happens, so nobody has to remember to go use it.",
      },
    ],
  },
];
