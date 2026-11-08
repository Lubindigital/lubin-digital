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
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
            Three things. I do all three myself.
          </h2>
        </motion.div>

        {/* ── Three practices, hairline-divided ──────────── */}
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          {practices.map((pillar, p) => (
            <motion.div
              key={pillar.practice}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: p * 0.1, duration: 0.6, ease }}
              className={
                // Stacked: a top rule on each. Three-up: a left rule on all but the first.
                p === 0
                  ? "border-t border-hairline pt-8 lg:pt-0 lg:border-t-0"
                  : "border-t border-hairline pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-16"
              }
            >
              {/* Practice header */}
              <div className="flex items-baseline gap-3">
                <span className="eyebrow tnum text-accent">{pillar.number}</span>
                <h3 className="font-display text-2xl text-ink leading-tight text-balance">
                  {pillar.practice}
                </h3>
              </div>
              <p className="mt-2.5 text-ink-soft leading-[1.55] text-pretty">
                {pillar.tagline}
              </p>

              <div className="mt-6 h-px w-10 gradient-bg opacity-70" aria-hidden />

              {/* Capabilities */}
              <ul className="mt-6 space-y-3.5">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[1rem] text-ink leading-snug text-pretty"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {item}
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
