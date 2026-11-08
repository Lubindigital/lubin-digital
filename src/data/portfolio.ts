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
  /** Short proof figures shown as a strip on the featured card. */
  metrics?: { figure: string; label: string }[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    name: "Tahoe Teas",
    category: "AI Content System · Ecommerce",
    description:
      "One idea in, four channels out, in the brand's own voice.",
    image: "/portfolio/tahoe-teas.jpg",
    group: "ai",
    caseStudyPath: "/work/tahoe-teas",
    displayUrl: "tahoeteas.com",
    ctaLabel: "Read the case study",
    featured: true,
    // Figures from the case study's ROI band (/work/tahoe-teas).
    metrics: [
      { figure: "4", label: "channels" },
      { figure: "~12 hrs/mo", label: "back" },
      { figure: "~$10k/yr", label: "saved" },
    ],
  },
  {
    name: "Tahoe Teas Storefront",
    category: "Ecommerce · Shopify",
    description:
      "A family tea company's Shopify store, in Tahoe City.",
    image: "/portfolio/tahoe-teas-site.e395332b.png",
    group: "web",
    url: "https://tahoeteas.com",
    displayUrl: "tahoeteas.com",
  },
  {
    name: "Kauai Maintenance",
    category: "Website & Local SEO · Contracting",
    description:
      "A Kauai contractor since 1986, shown through their own job photos.",
    image: "/portfolio/kauai-maintenance.385dc6e9.png",
    group: "web",
    url: "https://kauaimaintenance.com",
    displayUrl: "kauaimaintenance.com",
  },
  {
    name: "My Friend Does Weddings",
    category: "Website · Wedding Planning",
    description:
      "Oʻahu wedding planners, with prices up front.",
    image: "/portfolio/myfrienddoesweddings.b0ec31ee.png",
    group: "web",
    url: "https://myfrienddoesweddings.com",
    displayUrl: "myfrienddoesweddings.com",
  },
  {
    name: "Stellar Brews",
    category: "Website · Café",
    description:
      "A Grass Valley coffee shop. Menu, hours, directions.",
    image: "/portfolio/stellarbrewsgv.f7d4e474.png",
    group: "web",
    url: "https://stellarbrewsgv.com",
    displayUrl: "stellarbrewsgv.com",
  },
  {
    name: "ReForm Health Alliance",
    category: "Brand & Website · Healthcare",
    description:
      "Brand, site, and SEO for a Nevada healthcare coalition.",
    image: "/portfolio/reformnv.8cb372e1.png",
    group: "web",
    url: "https://reformnv.org",
    displayUrl: "reformnv.org",
  },
  {
    name: "Avergent",
    category: "Website & Brand · Benefits",
    description:
      "Site and brand system for a benefits firm.",
    image: "/portfolio/avergent.906893ed.png",
    group: "web",
    url: "https://www.avergent.com",
    displayUrl: "avergent.com",
  },
  {
    name: "NVHPHP",
    category: "Landing Page · Healthcare",
    description:
      "Launch page for Nevada's first High-Performing Health Plan.",
    image: "/portfolio/nvhphp.62a891ad.png",
    group: "web",
    url: "https://nvhphp.health",
    displayUrl: "nvhphp.health",
  },
  {
    name: "Tica Lubin",
    category: "Portfolio · Personal Brand",
    description:
      "A quiet, type-led portfolio for a sustainability designer.",
    image: "/portfolio/ticalubin.a886fe2d.png",
    group: "web",
    url: "https://ticalubin.com",
    displayUrl: "ticalubin.com",
  },
];
