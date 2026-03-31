"use client";

import { motion } from "motion/react";
import { processSteps } from "@/data/process";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="How It Works"
          title="Simple, Straightforward Process"
          description="Getting your business online shouldn't be complicated. Here's how we work."
        />

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start justify-center">
          {processSteps.map((step, i) => (
            <div key={step.number} className="flex items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
                className="flex-1 max-w-[240px] text-center px-4"
              >
                <div className="text-4xl font-extrabold gradient-text mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2.5">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {i < processSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                  className="w-[60px] h-0.5 gradient-bg mt-8 flex-shrink-0 opacity-30 origin-left"
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex flex-col items-center md:hidden">
          {processSteps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center px-4 max-w-xs"
              >
                <div className="text-4xl font-extrabold gradient-text mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2.5">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {i < processSteps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  className="w-0.5 h-10 gradient-bg opacity-30 origin-top"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
