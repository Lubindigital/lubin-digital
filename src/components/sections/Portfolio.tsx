"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { portfolioItems } from "@/data/portfolio";

export function Portfolio() {
  const featured = portfolioItems.find((item) => item.featured);
  const rest = portfolioItems.filter((item) => !item.featured);

  return (
    <section id="portfolio" className="bg-light py-24">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header row */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[3px] text-text-sec-dark mb-4">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-dark leading-tight tracking-tight">
              Work that{" "}
              <span className="accent-text gradient-underline">
                speaks for itself
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-block text-sm font-medium text-text-sec-dark hover:text-text-dark transition-colors whitespace-nowrap pb-1"
          >
            Start your project &rarr;
          </a>
        </div>

        {/* Featured Project */}
        {featured && (
          <motion.a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="group relative block overflow-hidden rounded-2xl mb-10 cursor-pointer"
          >
            {/* Browser chrome mockup */}
            <div className="bg-dark-light rounded-t-2xl px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-[0.65rem] text-text-sec-light/60 bg-white/[0.06] px-4 py-1 rounded-md font-mono">
                  reformnv.org
                </span>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.name}
                width={1440}
                height={900}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[2.5px] text-teal">
                    Featured Project
                  </span>
                  <span className="w-8 h-px bg-teal/40" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-text-light mb-2">
                  {featured.name}
                </h3>
                <p className="text-text-sec-light text-sm md:text-base max-w-[540px] leading-relaxed mb-4">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-text-light border border-white/20 px-4 py-2 rounded-lg group-hover:border-white/40 group-hover:bg-white/5 transition-all">
                  Visit Live Site
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </motion.a>
        )}

        {/* Masonry Grid — Other Projects */}
        {rest.length > 0 && (
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {rest.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url || "#"}
                target={item.url ? "_blank" : undefined}
                rel={item.url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer block"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={item.tall ? 520 : 380}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent flex flex-col justify-end p-5 md:p-6 transition-all duration-300 group-hover:from-dark/85">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[2px] text-text-sec-light mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-base md:text-lg font-bold text-text-light">
                    {item.name}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
