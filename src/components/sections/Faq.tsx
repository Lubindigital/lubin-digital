"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-light">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="FAQ"
          title="Common"
          accentText="Questions"
          centered
        />

        <div className="max-w-[720px] mx-auto">
          {faqItems.map((item, i) => (
            <FadeUp key={item.question} delay={i * 0.05}>
              <div className="border-b border-text-dark/[0.08]">
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === i ? null : i)
                  }
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                >
                  <span className="text-base font-semibold text-text-dark pr-4 group-hover:text-blue transition-colors">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-colors ${
                        activeIndex === i ? "text-blue" : "text-text-sec-dark"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-sec-dark text-sm leading-relaxed pb-5">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
