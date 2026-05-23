"use client";

import { motion } from "motion/react";
import Image from "next/image";


export function About() {
  return (
    <section id="about" className="bg-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&h=500&fit=crop&q=80"
                alt="Abstract network — global, connected, intelligent"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-light leading-tight tracking-tight mb-5">
              A modern practice,
              <br />
              <span className="accent-text gradient-underline">built for AI</span>
            </h2>
            <p className="text-text-sec-light text-base leading-[1.75] mb-4">
              Lubin Digital is an independent web design and AI solutions
              practice. We design and build modern websites, then go further
              &mdash; engineering the custom AI systems that run behind them.
              Strategy, design, and code under one roof. Remote-first, working
              with clients nationwide.
            </p>
            <p className="text-text-sec-light text-base leading-[1.75] mb-8">
              We don&apos;t upsell features you don&apos;t need, and we don&apos;t hide
              behind buzzwords. You work directly with the person designing and
              building your project &mdash; no account managers, no middlemen.
              Software that ships, and earns its keep.
            </p>


            <a
              href="#contact"
              className="inline-block text-sm font-semibold text-text-light border border-white/20 px-6 py-3 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Learn more about us &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
