import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

import { Services } from "@/components/sections/Services";
import { ValuePropositions } from "@/components/sections/ValuePropositions";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Services />
        <ValuePropositions />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
