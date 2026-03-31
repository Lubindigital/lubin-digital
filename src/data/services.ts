export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    icon: "Monitor",
    title: "Website Design & Development",
    description:
      "Custom-built, mobile-responsive websites designed to convert visitors into customers. No templates — every site is built from scratch for your brand.",
    features: [
      "Custom design tailored to your business",
      "Mobile-first responsive layout",
      "Fast load times (90+ PageSpeed)",
      "Contact forms & click-to-call",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: "SearchCheck",
    title: "Search Engine Optimization",
    description:
      "Get found on Google when customers search for your services. We build SEO into every site from day one, not as an afterthought.",
    features: [
      "Local SEO for your city & industry",
      "Google Business Profile optimization",
      "Schema markup & meta tags",
      "Keyword-optimized content",
    ],
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: "Shield",
    title: "Hosting & Maintenance",
    description:
      "We keep your site running, secure, and up to date. No technical headaches — just a site that works, every day.",
    features: [
      "Fast, reliable hosting included",
      "SSL certificate (HTTPS)",
      "Monthly content updates",
      "Uptime monitoring & backups",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: "CloudDownload",
    title: "Website Redesigns",
    description:
      "Already have a site that's outdated or underperforming? We'll rebuild it into something modern that actually drives results.",
    features: [
      "Modern, clean redesign",
      "Improved speed & performance",
      "Better mobile experience",
      "Updated content & SEO",
    ],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop&q=80",
  },
];
