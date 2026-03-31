"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { GradientText } from "@/components/shared/GradientText";

const trustItems = ["SEO Optimized", "Mobile Responsive", "Ongoing Support"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <header ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop&q=80"
          alt="Tropical ocean coastline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/60" />
      </motion.div>

      {/* Animated Gradient Orb */}
      <motion.div
        style={{
          y: orbY,
          background:
            "radial-gradient(circle, rgba(0,180,160,0.15) 0%, rgba(46,127,232,0.1) 40%, transparent 70%)",
        }}
        className="absolute -top-1/4 -right-[10%] w-[800px] h-[800px] rounded-full z-0 opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block bg-gradient-to-r from-teal/10 to-blue/10 border border-teal/20 text-teal px-4 py-2 rounded-full text-xs font-semibold tracking-wide mb-7">
                Based in Hawaii &middot; Serving Nationwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold text-navy leading-[1.1] tracking-tight mb-6"
            >
              Your Business Deserves
              <br />a Website That <GradientText>Works</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-slate-500 mb-10 max-w-[560px] leading-relaxed"
            >
              We build fast, modern websites that bring local businesses online —
              and bring customers to your door. Rooted in aloha, driven by results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3.5 mb-13"
            >
              <a
                href="#contact"
                className="gradient-bg text-white px-8 py-3.5 rounded-lg text-sm font-semibold text-center hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(46,127,232,0.3)] transition-all cursor-pointer"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="border-2 border-slate-200 text-slate-600 px-8 py-3.5 rounded-lg text-sm font-semibold text-center hover:border-teal hover:text-teal transition-all cursor-pointer"
              >
                See Our Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-7"
            >
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-500 text-sm font-medium"
                >
                  <CircleCheck className="w-[18px] h-[18px] text-teal" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image — Website Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                  alt="Modern website design on screen"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating accent card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">90+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">PageSpeed</p>
                    <p className="text-sm text-navy font-bold">Score</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
