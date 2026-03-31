"use client";

import { motion } from "motion/react";
import { FadeUp } from "@/components/motion/FadeUp";

export function CtaBanner() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Animated radial glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,160,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1140px] mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-white mb-4 tracking-tight">
            Don&apos;t Let Customers Pass You By
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-white/60 text-lg mb-8 max-w-[520px] mx-auto">
            Every day without a website is a day you&apos;re invisible to
            potential customers searching online. Let&apos;s change that.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block gradient-bg text-white px-9 py-4 rounded-lg text-base font-semibold hover:shadow-[0_8px_25px_rgba(46,127,232,0.3)] transition-shadow cursor-pointer"
          >
            Get Your Free Quote Today
          </motion.a>
        </FadeUp>
      </div>
    </section>
  );
}
