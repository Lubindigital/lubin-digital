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
];
