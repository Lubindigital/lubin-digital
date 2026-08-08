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
  /** 3–4 concrete capabilities under this practice. Keep each to one line. */
  items: ServiceItem[];
}

export const practices: Practice[] = [
  {
    number: "01",
    practice: "Web Design & Build",
    tagline: "Drawn and coded from scratch. No theme, no page builder.",
    items: [
      {
        title: "Design and build",
        description:
          "I draw the layout, then I write the code. It ships on Next.js and it's yours to keep.",
      },
      {
        title: "Integrations",
        description:
          "Forms, payments, booking, a CMS you'll actually use. Wired into what you already run.",
      },
      {
        title: "After launch",
        description:
          "I keep it fast and fix what breaks. You text me. There's no ticket queue.",
      },
      {
        title: "Findable by default",
        description:
          "Schema, a sitemap, and a robots.txt that welcomes AI crawlers. Thryv and Hibu sell this as an upgrade.",
      },
    ],
  },
  {
    number: "02",
    practice: "Custom AI Systems",
    tagline: "Software that does a job you're currently doing by hand.",
    items: [
      {
        title: "Content engines",
        description:
          "One idea becomes the email, the blog post and the caption. You approve, it publishes.",
      },
      {
        title: "Internal tools",
        description:
          "Dashboards and assistants for the work nobody wants to do twice.",
      },
      {
        title: "Wired into your tools",
        description:
          "Your CRM, your inbox, your Shopify store. It runs where the work already happens.",
      },
    ],
  },
  {
    number: "03",
    practice: "Local Search",
    tagline:
      "For a local business, the Google listing is what people see first.",
    items: [
      {
        title: "The listing itself",
        description:
          "Categories, services, hours, photos. Most listings I open are filed under the wrong category.",
      },
      {
        title: "Reviews, answered",
        description:
          "Every review gets a real reply, plus a review link and a QR code for your counter.",
      },
      {
        title: "One version of the truth",
        description:
          "Google, Yelp and your own site agreeing on your address, hours and phone number.",
      },
    ],
  },
];
