import type { Metadata } from "next";
import { CaseStudyNav } from "@/components/layout/CaseStudyNav";
import { Footer } from "@/components/layout/Footer";
import { TahoeTeasCaseStudy } from "@/components/sections/TahoeTeasCaseStudy";

export const metadata: Metadata = {
  title: "Tahoe Teas — AI Email & Content Systems | Lubin Digital",
  description:
    "Case study: how Lubin Digital built AI-powered email and content systems for Tahoe Teas, a Lake Tahoe ecommerce brand. One source idea becomes on-brand email, blog, Instagram, and SMS — automated, approved by a human, and integrated with Shopify.",
  alternates: { canonical: "https://lubindigital.com/work/tahoe-teas" },
  openGraph: {
    title: "Tahoe Teas — AI Email & Content Systems",
    description:
      "An AI content engine for a Lake Tahoe tea brand: write once, publish everywhere across email, blog, Instagram, and SMS.",
    type: "article",
    url: "https://lubindigital.com/work/tahoe-teas",
    images: ["/portfolio/tahoe-teas.jpg"],
  },
};

export default function TahoeTeasCaseStudyPage() {
  return (
    <>
      <CaseStudyNav />
      <TahoeTeasCaseStudy />
      <Footer />
    </>
  );
}
