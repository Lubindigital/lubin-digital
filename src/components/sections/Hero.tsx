"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stats = [
  { value: "50+", label: "Websites Built" },
  { value: "90+", label: "Avg. PageSpeed" },
  { value: "24hr", label: "Response Time" },
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
    <section id="hero" className="relative bg-dark overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-teal/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-[3] max-w-[1140px] mx-auto px-6 pt-40 pb-20">
        {/* Tag */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-xs font-medium uppercase tracking-[3px] text-text-sec-light mb-6"
        >
          Web Design &amp; Digital Agency &mdash; Hawai&apos;i
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-text-light leading-[1.1] tracking-tight max-w-[800px] mb-6"
        >
          Rooted in Aloha,
          <br />
          Driven by{" "}
          <span className="accent-text gradient-underline">Results</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-text-sec-light text-base md:text-lg leading-[1.75] max-w-[520px] mb-10"
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
            className="text-sm font-semibold text-text-light border border-white/20 px-6 py-3 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Our Services &rarr;
          </a>
          <a
            href="#contact"
            className="gradient-bg text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 hover:shadow-[0_4px_15px_rgba(8,117,233,0.3)] transition-all"
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
              <p className="text-2xl md:text-3xl font-extrabold text-text-light tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-text-sec-light uppercase tracking-[2px] mt-1">
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
                className="text-[0.65rem] font-semibold uppercase tracking-[2px] text-text-sec-light border border-white/10 px-4 py-2 rounded-full"
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
