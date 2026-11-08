export interface Practice {
  /** Practice number, e.g. "01" */
  number: string;
  /** The pillar name */
  practice: string;
  /** One-line framing of the practice */
  tagline: string;
  /** 3–4 short capability labels. One line each, no sentence after them. */
  items: string[];
}

export const practices: Practice[] = [
  {
    number: "01",
    practice: "Web Design & Build",
    tagline: "Drawn and coded from scratch. No templates.",
    items: [
      "Custom design, coded and yours to keep",
      "Forms, payments, booking, an easy editor",
      "Fixes after launch: text me, no ticket queue",
      "Found on Google and AI search, built in",
    ],
  },
  {
    number: "02",
    practice: "Custom AI Systems",
    tagline: "Software for the work you do by hand.",
    items: [
      "Content engines: one idea, every channel",
      "Internal tools and dashboards",
      "Plugged into your CRM, inbox, and Shopify",
    ],
  },
  {
    number: "03",
    practice: "Local Search",
    tagline: "Your Google listing is your first impression.",
    items: [
      "Profile fixed: category, hours, photos",
      "Every review answered, plus a QR code for your counter",
      "The same details on Google, Yelp, and your site",
    ],
  },
];
