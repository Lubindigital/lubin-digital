import type { Metadata } from "next";
import { CaseStudyNav } from "@/components/layout/CaseStudyNav";
import { Footer } from "@/components/layout/Footer";
import { TahoeTeasCaseStudy } from "@/components/sections/TahoeTeasCaseStudy";

const PAGE_URL = "https://lubindigital.com/work/tahoe-teas";
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "The Tahoe Teas AI Content System, built by Lubin Digital",
};
const DESCRIPTION =
  "How the Tahoe Teas Content System works. An AI strategist ranks what to publish next, one click drafts the email, blog post, and Instagram caption, a brand voice check scores every draft, and the owner approves every channel before anything reaches a customer.";

export const metadata: Metadata = {
  title: "Tahoe Teas: An AI Content System",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Tahoe Teas: A Closed Loop AI Content System",
    description:
      "How I built a closed loop content system for a Lake Tahoe tea brand. Ranked ideas go in. Email, blog posts, and Instagram go out, approved by the owner and wired into Shopify. SMS is built and waiting on carrier approval.",
    type: "article",
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahoe Teas: A Closed Loop AI Content System",
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
