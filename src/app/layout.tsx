import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lubin Digital | Professional Websites for Local Businesses — Hawaii & Nationwide",
  description:
    "Lubin Digital builds fast, modern, SEO-optimized websites for local businesses. Based in Hawaii, serving nationwide. Web design, SEO, hosting & maintenance. Contact us for a free quote.",
  keywords: [
    "web design Hawaii",
    "website for small business",
    "local business website",
    "SEO Hawaii",
    "web developer Oahu",
    "affordable website design",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lubindigital.com/" },
  openGraph: {
    title: "Lubin Digital | Websites for Local Businesses",
    description:
      "Professional websites built to grow your business. Based in Hawaii, serving nationwide.",
    type: "website",
    locale: "en_US",
    url: "https://lubindigital.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Lubin Digital",
              description:
                "Professional web design and development for local businesses",
              telephone: "(530) 213-3189",
              email: "westan@lubindigital.com",
              url: "https://lubindigital.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "HI",
                addressCountry: "US",
              },
              areaServed: ["Hawaii", "United States"],
              priceRange: "$$",
              serviceType: [
                "Web Design",
                "Web Development",
                "SEO",
                "Website Maintenance",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
