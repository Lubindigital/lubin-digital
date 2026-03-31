"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Monitor,
  SearchCheck,
  Shield,
  CloudDownload,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  StaggerContainer,
  staggerItemVariants,
} from "@/components/motion/StaggerContainer";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  SearchCheck,
  Shield,
  CloudDownload,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="What We Offer"
          title="Everything Your Business Needs Online"
          description="From design to launch to long-term growth — we handle it all so you can focus on what you do best."
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={staggerItemVariants}
                whileHover={{ y: -8, boxShadow: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)" }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:border-teal/20 transition-colors"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent" />
                </div>

                <div className="p-8 pt-4">
                  <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center text-white mb-6 -mt-10 relative z-10 shadow-lg">
                    {Icon && <Icon className="w-7 h-7" strokeWidth={1.5} />}
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-slate-600 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-3 before:h-3 before:gradient-bg before:rounded-full before:opacity-60"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
