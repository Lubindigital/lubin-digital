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
  /** Label shown in the featured browser-chrome bar. Defaults to the host of `url`. */
  displayUrl?: string;
  /** CTA label on the featured card. Defaults to "Visit Live Site". */
  ctaLabel?: string;
  tall?: boolean;
  /** Renders as the large showcase card at the top of its section. */
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    name: "Tahoe Teas",
    category: "AI Systems for Ecommerce",
    description:
      "AI-powered email & content systems for a Lake Tahoe ecommerce tea brand. One source idea becomes on-brand email, blog, Instagram, and SMS — drafted in their voice, approved by a human, and published automatically. Integrated with Shopify.",
    image: "/portfolio/tahoe-teas.jpg",
    group: "ai",
    caseStudyPath: "/work/tahoe-teas",
    displayUrl: "Case Study",
    ctaLabel: "View Case Study",
    tall: true,
    featured: true,
  },
  {
    name: "ReForm Health Alliance",
    category: "Healthcare Coalition",
    description: "Full website design & development for a Nevada employer coalition transforming healthcare delivery. Custom design, responsive build, and SEO optimization.",
    image: "/portfolio/reformnv.png",
    group: "web",
    url: "https://reformnv.org",
    tall: true,
    featured: true,
  },
  {
    name: "Avergent",
    category: "Health Benefits Platform",
    description: "Multi-page marketing site for a benefits consulting firm rebuilding the health plan from the ground up. Custom brand system, audience-specific pages, and embedded contact form.",
    image: "/portfolio/avergent.png",
    group: "web",
    url: "https://www.avergent.com",
  },
  {
    name: "NVHPHP",
    category: "Healthcare Initiative",
    description: "Editorial-style landing page for Nevada's first High-Performing Health Plan initiative — a coalition launch site with an embedded inquiry form.",
    image: "/portfolio/nvhphp.png",
    group: "web",
    url: "https://nvhphp.health",
    tall: true,
  },
];
