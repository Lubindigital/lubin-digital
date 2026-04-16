"use client";

import { motion } from "motion/react";
import AetherFlowCanvas from "@/components/ui/aether-flow-hero";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stats = [
  { value: "90+", label: "Avg. PageSpeed" },
  { value: "24hr", label: "Response Time" },
  { value: "1-2wk", label: "Avg. Launch Time" },
];

const pills = [
  "Website Design",
  "SEO",
  "Hosting",
  "Redesigns",
  "Local SEO",
  "Results-Driven",
];

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Aether Flow particle canvas background */}
      <AetherFlowCanvas className="absolute top-0 left-0 w-full h-full" />

      <div className="relative z-10 max-w-[1140px] w-full mx-auto px-6">
        {/* Tag */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-xs font-medium uppercase tracking-[3px] text-gray-400 mb-6"
        >
          Web Design &amp; Digital Agency &mdash; Hawai&apos;i
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.1] tracking-tight max-w-[800px] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
          Rooted in Aloha,
          <br />
          Driven by Results
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-gray-400 text-base md:text-lg leading-[1.75] max-w-[520px] mb-10"
        >
          We build fast, modern websites that bring local businesses online
          &mdash; and bring customers to your door. Every day without a website
          is a day you&apos;re invisible to potential customers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#services"
            className="text-sm font-semibold text-white border border-white/20 px-6 py-3 rounded-lg hover:border-white/40 hover:bg-white/5 transition-colors duration-300"
          >
            Our Services &rarr;
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 text-sm"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-wrap gap-12 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 uppercase tracking-[2px] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Divider + Pills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="border-t border-white/[0.08] pt-8"
        >
          <div className="flex flex-wrap gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="text-[0.65rem] font-semibold uppercase tracking-[2px] text-gray-400 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
