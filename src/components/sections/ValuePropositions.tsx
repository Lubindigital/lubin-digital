"use client";

import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { valuePropositions } from "@/data/valuePropositions";

export function ValuePropositions() {
  return (
    <section className="bg-white">
      {valuePropositions.map((prop, i) => {
        const isEven = i % 2 === 0;

        return (
          <div
            key={prop.label}
            className={`py-20 md:py-28 ${
              i < valuePropositions.length - 1
                ? "border-b border-text-dark/[0.06]"
                : ""
            }`}
          >
            <div className="max-w-[1140px] mx-auto px-6">
              <div
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-20`}
              >
                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1"
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
                    {prop.label}
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-dark leading-tight tracking-tight mb-5">
                    {prop.title}
                    <br />
                    <span className="accent-text gradient-underline">
                      {prop.accentText}
                    </span>
                  </h2>
                  <p className="text-text-sec-dark text-base leading-[1.75] max-w-[500px]">
                    {prop.description}
                  </p>
                </motion.div>

                {/* Stat or Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex-shrink-0 flex flex-col items-center"
                >
                  {prop.icon === "shield" ? (
                    <div className="w-32 h-32 md:w-40 md:h-40 gradient-bg rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                    </div>
                  ) : prop.stat ? (
                    <div className="text-center">
                      <div className="text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter gradient-text leading-none">
                        <AnimatedCounter
                          target={parseInt(prop.stat)}
                          suffix={prop.stat === "1" ? "" : "+"}
                        />
                      </div>
                      {prop.statLabel && (
                        <p className="text-xs font-bold uppercase tracking-[2px] text-text-sec-dark mt-3">
                          {prop.statLabel}
                        </p>
                      )}
                    </div>
                  ) : null}
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
