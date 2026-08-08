import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { ValuePropositions } from "@/components/sections/ValuePropositions";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

// The "What I build with" tech-stack band was pulled from the page on
// 2026-08-08. Nothing was deleted: to put it back, re-import Stack from
// "@/components/sections/Stack" and render <Stack /> between Services and
// Portfolio. Its marquee CSS is still in globals.css.

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />

        <Services />
        <Portfolio />
        <ValuePropositions />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
