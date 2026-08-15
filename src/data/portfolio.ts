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
      "One idea goes in. Out comes an email, a blog post, and an Instagram caption, each one grounded in the brand's own writing and approved by the owner before it goes live. A text gets drafted too, waiting on carrier approval.",
    image: "/portfolio/tahoe-teas.jpg",
    group: "ai",
    caseStudyPath: "/work/tahoe-teas",
    displayUrl: "tahoeteas.com",
    ctaLabel: "Read the case study",
    featured: true,
  },
  {
    name: "Tahoe Teas Storefront",
    category: "Ecommerce · Shopify",
    description:
      "A Shopify storefront for a family-run tea company in Tahoe City, rebuilt around their own brand and photos.",
    image: "/portfolio/tahoe-teas-site.jpg",
    group: "web",
    url: "https://tahoeteas.com",
    displayUrl: "tahoeteas.com",
  },
  {
    name: "Kauai Maintenance",
    category: "Website & Local SEO · Contracting",
    description:
      "A site for a licensed contractor and plumber on Kauai since 1986, built from their own job photos and reviews.",
    image: "/portfolio/kauai-maintenance.png",
    group: "web",
    url: "https://kauaimaintenance.com",
    displayUrl: "kauaimaintenance.com",
  },
  {
    name: "ReForm Health Alliance",
    category: "Brand & Website · Healthcare",
    description:
      "Brand, website, and SEO for a Nevada employer coalition changing how companies buy healthcare.",
    image: "/portfolio/reformnv.png",
    group: "web",
    url: "https://reformnv.org",
    displayUrl: "reformnv.org",
  },
  {
    name: "Avergent",
    category: "Website & Brand · Benefits",
    description:
      "A marketing site and brand system for a benefits firm rebuilding what a health plan looks like.",
    image: "/portfolio/avergent.png",
    group: "web",
    url: "https://www.avergent.com",
    displayUrl: "avergent.com",
  },
  {
    name: "NVHPHP",
    category: "Landing Page · Healthcare",
    description:
      "A launch page for Nevada's first High-Performing Health Plan initiative, with the inquiry form built right in.",
    image: "/portfolio/nvhphp.png",
    group: "web",
    url: "https://nvhphp.health",
    displayUrl: "nvhphp.health",
  },
  {
    name: "Tica Lubin",
    category: "Portfolio · Personal Brand",
    description:
      "A quiet, type-led portfolio for a designer working in sustainability. Mostly white space and good type.",
    image: "/portfolio/ticalubin.png",
    group: "web",
    url: "https://ticalubin.com",
    displayUrl: "ticalubin.com",
  },
];
