export interface PortfolioItem {
  name: string;
  category: string;
  description: string;
  image: string;
  /** Which section the project belongs to. */
  group: "ai" | "web";
  url?: string;
  /** Internal case study route (e.g. "/work/tahoe-teas"). Takes precedence over `url`. */
  caseStudyPath?: string;
  /** Label shown on the link. */
  displayUrl?: string;
  /** CTA label on the card. */
  ctaLabel?: string;
  /** Renders as the large featured row at the top. */
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    name: "Tahoe Teas",
    category: "AI Content System · Ecommerce",
    description:
      "An AI content engine that turns one idea into on-brand email, blog, Instagram, and SMS — quality-checked, human-approved, auto-published, and wired into Shopify.",
    image: "/portfolio/tahoe-teas.jpg",
    group: "ai",
    caseStudyPath: "/work/tahoe-teas",
    displayUrl: "tahoeteas.com",
    ctaLabel: "Read the case study",
    featured: true,
  },
  {
    name: "ReForm Health Alliance",
    category: "Brand & Website · Healthcare",
    description:
      "Brand, website, and SEO for a Nevada employer coalition reshaping how healthcare is bought and delivered.",
    image: "/portfolio/reformnv.png",
    group: "web",
    url: "https://reformnv.org",
    displayUrl: "reformnv.org",
  },
  {
    name: "Avergent",
    category: "Website & Brand · Benefits",
    description:
      "A multi-page marketing site and brand system for a benefits firm rebuilding the health plan from the ground up.",
    image: "/portfolio/avergent.png",
    group: "web",
    url: "https://www.avergent.com",
    displayUrl: "avergent.com",
  },
  {
    name: "NVHPHP",
    category: "Landing Page · Healthcare",
    description:
      "An editorial launch page for Nevada's first High-Performing Health Plan initiative, with an embedded inquiry form.",
    image: "/portfolio/nvhphp.png",
    group: "web",
    url: "https://nvhphp.health",
    displayUrl: "nvhphp.health",
  },
  {
    name: "Tica Lubin",
    category: "Portfolio · Personal Brand",
    description:
      "A quiet, type-led editorial portfolio for a designer and sustainability professional — built and deployed on Vercel.",
    image: "/portfolio/ticalubin.png",
    group: "web",
    url: "https://ticalubin.com",
    displayUrl: "ticalubin.com",
  },
];
