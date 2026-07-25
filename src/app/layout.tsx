import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://lubindigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lubin Digital: Web Design and Custom AI Systems",
    template: "%s | Lubin Digital",
  },
  description:
    "A one person studio. I design and code websites from scratch, and build the custom AI systems that run content, marketing, and the repetitive work behind them.",
  keywords: [
    "web design studio",
    "custom AI systems",
    "content automation",
    "Next.js development",
    "ecommerce websites",
    "marketing automation",
  ],
  authors: [{ name: "Lubin Digital" }],
  creator: "Lubin Digital",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lubin Digital: Web Design and Custom AI Systems",
    description:
      "A one person studio. I design and code websites, and build the custom AI systems that run behind them.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Lubin Digital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lubin Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lubin Digital: Web Design and Custom AI Systems",
    description:
      "A one person studio. I design and code websites, and build the custom AI systems that run behind them.",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Lubin Digital",
      url: SITE_URL,
      logo: `${SITE_URL}/lubin-digital-logo.png`,
      email: "westan@lubindigital.com",
      telephone: "+15303864145",
      description:
        "A one person studio building websites and custom AI systems for content, marketing, and operations.",
      areaServed: "US",
      knowsAbout: [
        "Web design",
        "Web development",
        "Custom AI systems",
        "Content automation",
        "Marketing automation",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Lubin Digital",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Lubin Digital",
      url: SITE_URL,
      telephone: "+15303864145",
      email: "westan@lubindigital.com",
      priceRange: "$$",
      areaServed: "United States",
      serviceType: [
        "Web Design",
        "Web Development",
        "Custom AI Solutions",
        "Content & Marketing Automation",
      ],
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-ink"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
