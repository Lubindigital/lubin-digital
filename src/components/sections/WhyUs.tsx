"use client";

import { motion } from "motion/react";
import {
  Heart,
  Layers,
  Clock,
  Users,
  PieChart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { whyUsCards } from "@/data/whyUs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  StaggerContainer,
  staggerItemVariants,
} from "@/components/motion/StaggerContainer";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Layers,
  Clock,
  Users,
  PieChart,
  ShieldCheck,
};

export function WhyUs() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="Why Lubin Digital"
          title="Built Different, Rooted in Aloha"
          description="We're not a faceless agency. We're a Hawaii-based team that treats your business like our own."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                variants={staggerItemVariants}
                whileHover={{
                  borderColor: "rgba(0,180,160,0.3)",
                  boxShadow:
                    "0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)",
                }}
                className="p-8 rounded-2xl border border-slate-100 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal/10 to-blue/10 rounded-lg flex items-center justify-center text-teal mb-5">
                  {Icon && <Icon className="w-6 h-6" strokeWidth={1.5} />}
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
