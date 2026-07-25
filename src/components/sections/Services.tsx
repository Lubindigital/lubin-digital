"use client";

import { motion } from "motion/react";
import { practices } from "@/data/services";

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section id="services" className="bg-canvas py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 max-w-[640px] md:mb-20"
        >
          <p className="eyebrow text-accent mb-4">What I do</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05]">
            Two things, and I do both myself.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-[1.6] max-w-[54ch]">
            Some clients want a website and nothing else. Some want software that
            handles their content or their admin work. A few want both, and those
            are my favorite projects, because the site and the system get
            designed together instead of bolted on to each other later.
          </p>
        </motion.div>

        {/* ── Two pillars, divided by a hairline ─────────── */}
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          {practices.map((pillar, p) => (
            <motion.div
              key={pillar.practice}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: p * 0.12, duration: 0.6, ease }}
              className={
                // hairline divider between the two columns on md+; top rule on each
                p === 1
                  ? "border-t border-hairline pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0 lg:pl-24"
                  : "border-t border-hairline pt-10 md:pt-0"
              }
            >
              {/* Pillar header */}
              <div className="flex items-baseline gap-4">
                <span className="eyebrow tnum text-accent">{pillar.number}</span>
                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                  {pillar.practice}
                </h3>
              </div>
              <p className="mt-3 text-ink-soft leading-[1.6] max-w-[42ch]">
                {pillar.tagline}
              </p>

              {/* Thin accent rule under the pillar header */}
              <div className="mt-7 h-px w-12 gradient-bg opacity-70" aria-hidden />

              {/* Capabilities */}
              <ul className="mt-7 space-y-7">
                {pillar.items.map((item) => (
                  <li key={item.title}>
                    <h4 className="font-display text-lg text-ink leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-ink-soft leading-[1.7] max-w-[44ch]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
