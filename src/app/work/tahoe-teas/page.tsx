import type { Metadata } from "next";
import { CaseStudyNav } from "@/components/layout/CaseStudyNav";
import { Footer } from "@/components/layout/Footer";
import { TahoeTeasCaseStudy } from "@/components/sections/TahoeTeasCaseStudy";

const PAGE_URL = "https://lubindigital.com/work/tahoe-teas";
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Tahoe Teas — AI Content System by Lubin Digital",
};
const DESCRIPTION =
  "Case study: Lubin Digital built the Tahoe Teas Content System — a closed-loop AI platform for a family-run Lake Tahoe tea brand. An AI strategist ranks ideas, one click drafts email, blog, Instagram, and SMS, a brand-voice gate guards every word, and the owner approves each channel before it auto-publishes via Shopify.";

export const metadata: Metadata = {
  title: "Tahoe Teas — AI Content System",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Tahoe Teas — A Closed-Loop AI Content System",
    description:
      "How we built a closed-loop AI content operations platform for a Lake Tahoe tea brand: ranked ideas in, on-brand email, blog, Instagram, and SMS out — human-approved and wired into Shopify.",
    type: "article",
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahoe Teas — A Closed-Loop AI Content System",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A content system that runs the marketing for a Lake Tahoe tea brand",
  description: DESCRIPTION,
  image: OG_IMAGE,
  url: PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: {
    "@type": "Organization",
    name: "Lubin Digital",
    url: "https://lubindigital.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Lubin Digital",
    url: "https://lubindigital.com",
    logo: {
      "@type": "ImageObject",
      url: "https://lubindigital.com/lubin-digital-logo-wave.png",
    },
  },
  about: {
    "@type": "Organization",
    name: "Tahoe Teas",
  },
  datePublished: "2026-06-01",
  dateModified: "2026-06-02",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://lubindigital.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Work",
      item: "https://lubindigital.com/#portfolio",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tahoe Teas",
      item: PAGE_URL,
    },
  ],
};

export default function TahoeTeasCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyNav />
      <TahoeTeasCaseStudy />
      <Footer />
    </>
  );
}
