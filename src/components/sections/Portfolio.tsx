"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { portfolioItems } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-light py-24">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-dark leading-tight tracking-tight">
              Work that{" "}
              <span className="accent-text gradient-underline">speaks for itself</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-block text-sm font-medium text-text-sec-dark hover:text-text-dark transition-colors whitespace-nowrap pb-1"
          >
            View all work &rarr;
          </a>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={item.tall ? 520 : 380}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Always-visible overlay with project name */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent flex flex-col justify-end p-5 md:p-6 transition-all duration-300 group-hover:from-dark/85">
                <p className="text-[0.65rem] font-medium uppercase tracking-[2px] text-text-sec-light mb-1">
                  {item.category}
                </p>
                <h3 className="text-base md:text-lg font-bold text-text-light">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="#contact"
          className="md:hidden block text-center text-sm font-medium text-text-sec-dark hover:text-text-dark transition-colors mt-10"
        >
          View all work &rarr;
        </a>
      </div>
    </section>
  );
}
