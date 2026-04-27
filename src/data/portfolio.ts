export interface PortfolioItem {
  name: string;
  category: string;
  description: string;
  image: string;
  url?: string;
  tall?: boolean;
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    name: "ReForm Health Alliance",
    category: "Healthcare Coalition",
    description: "Full website design & development for a Nevada employer coalition transforming healthcare delivery. Custom design, responsive build, and SEO optimization.",
    image: "/portfolio/reformnv.png",
    url: "https://reformnv.org",
    tall: true,
    featured: true,
  },
  {
    name: "Avergent",
    category: "Health Benefits Platform",
    description: "Multi-page marketing site for a benefits consulting firm rebuilding the health plan from the ground up. Custom brand system, audience-specific pages, and embedded contact form.",
    image: "/portfolio/avergent.png",
    url: "https://www.avergent.com",
  },
  {
    name: "NVHPHP",
    category: "Healthcare Initiative",
    description: "Editorial-style landing page for Nevada's first High-Performing Health Plan initiative — a coalition launch site with an embedded inquiry form.",
    image: "/portfolio/nvhphp.png",
    url: "https://nvhphp.health",
    tall: true,
  },
];
