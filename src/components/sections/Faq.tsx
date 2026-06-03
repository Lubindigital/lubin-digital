"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

const ease = [0.22, 1, 0.36, 1] as const;

export function Faq() {
  // Structured data — built from the same source as the visible Q&As,
  // so the two can never drift apart.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-canvas py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-[760px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mb-10 md:mb-12"
        >
          <p className="eyebrow text-accent mb-4">Before you ask</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-4">
            The questions I hear most
          </h2>
          <p className="text-ink-soft text-lg leading-[1.6] max-w-[60ch]">
            Straight answers on timelines, cost, ownership, and how the AI part
            actually works. Still wondering about something?{" "}
            <a
              href="#contact"
              className="link-underline font-medium text-accent"
            >
              Just ask me directly
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease }}
        >
          <Accordion
            defaultValue={["faq-0"]}
            className="border-t border-hairline"
          >
            {faqItems.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`faq-${i}`}
                className="border-b border-hairline"
              >
                <AccordionTrigger className="gap-6 rounded-none border-0 py-6 no-underline hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:[&_>span]:underline focus-visible:[&_>span]:underline-offset-4 **:data-[slot=accordion-trigger-icon]:mt-1 **:data-[slot=accordion-trigger-icon]:text-ink-soft group-aria-expanded/accordion-trigger:**:data-[slot=accordion-trigger-icon]:text-accent">
                  <span className="font-display text-xl md:text-2xl leading-snug text-ink">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="max-w-[62ch] text-base leading-[1.7] text-ink-soft">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
