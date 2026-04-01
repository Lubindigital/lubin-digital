"use client";

import { motion } from "motion/react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Services() {
  return (
    <section id="services" className="py-24 bg-off-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="What We Do"
          title="Services built for"
          accentText="growth"
        />

        <div className="max-w-[720px]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`py-8 ${
                i < services.length - 1 ? "border-b border-text-dark/[0.08]" : ""
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-text-sec-dark text-sm md:text-base leading-[1.75]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
