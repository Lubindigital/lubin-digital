import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Lubin Digital | AI-Driven Web Design & Digital Solutions",
  description:
    "Lubin Digital is an AI-driven web design and solutions practice. We build fast, modern websites and custom AI systems — content automation, marketing systems, and integrations — for growing businesses nationwide.",
  keywords: [
    "AI web design",
    "AI solutions",
    "custom AI development",
    "content automation",
    "marketing automation",
    "Next.js development",
    "ecommerce AI",
    "web design and development",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lubindigital.com/" },
  openGraph: {
    title: "Lubin Digital | AI-Driven Web Design & Solutions",
    description:
      "Modern websites and custom AI systems, built by one partner from design to deployment. Working with clients nationwide.",
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
    <html lang="en" className={`${plusJakarta.variable} ${instrumentSerif.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Lubin Digital",
              description:
                "AI-driven web design and digital solutions — modern websites, custom AI systems, and content & marketing automation",
              telephone: "(530) 386-4145",
              email: "westan@lubindigital.com",
              url: "https://lubindigital.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              areaServed: "United States",
              priceRange: "$$",
              serviceType: [
                "AI-Driven Web Design",
                "Custom AI Solutions",
                "Content & Marketing Automation",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
