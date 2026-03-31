"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import {
  StaggerContainer,
  staggerItemVariants,
} from "@/components/motion/StaggerContainer";

const stats = [
  {
    value: 70,
    suffix: "%",
    text: "of consumers research a business online before visiting. No website means lost customers.",
  },
  {
    value: 88,
    suffix: "%",
    text: "of people won't return to a website after a bad experience. First impressions matter.",
  },
  {
    value: 3,
    suffix: "x",
    text: "more leads come from Google searches than any other source. SEO is not optional.",
  },
];

export function ValueProp() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-[1140px] mx-auto px-6">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={staggerItemVariants}
              className="text-center px-5 py-2.5"
            >
              <div className="text-5xl font-extrabold mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  className="gradient-text"
                />
              </div>
              <p className="text-white/60 text-[0.95rem] leading-relaxed">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
