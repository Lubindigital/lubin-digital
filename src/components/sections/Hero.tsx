"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.09, duration: 0.6, ease },
  }),
};

const clients = ["Tahoe Teas", "ReForm Health", "Avergent", "NVHPHP", "Tica Lubin"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ink-bg pt-28 pb-14 md:pt-28 md:pb-20"
    >
      {/* faint brand gradient wash, top-right — subtle, static */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-[0.18] blur-[120px] gradient-bg"
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center">
          {/* ── Left: copy ─────────────────────────────────── */}
          <div className="max-w-[580px]">
            <motion.p
              custom={0}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="eyebrow gradient-text mb-6"
            >
              Independent Web &amp; AI Studio
            </motion.p>

            <motion.h1
              custom={1}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="font-display text-on-ink text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-6 text-balance"
            >
              A site you own,{" "}
              <span className="gradient-text">
                and software that does the busywork.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="text-on-ink-soft text-lg leading-[1.6] max-w-[48ch] mb-8"
            >
              Websites designed and coded from scratch, plus the custom AI that
              runs behind them. For Tahoe Teas that means one idea becoming a
              week of email, blog posts, and Instagram, waiting on her phone for
              a yes.
            </motion.p>

            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-bg"
              >
                Start a project
              </a>
              <a
                href="#portfolio"
                className="link-underline text-sm font-semibold text-on-ink"
              >
                See the work &rarr;
              </a>
            </motion.div>

            {/* Trust line — real client names */}
            <motion.div
              custom={4}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="mt-9 border-t border-hairline-on-ink pt-6"
            >
              <p className="eyebrow text-on-ink-soft/70 mb-3">Worked with</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {clients.map((c) => (
                  <span key={c} className="text-sm font-medium text-on-ink-soft">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: static framed showcase ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease }}
            className="relative"
          >
            {/* offset back panel for depth */}
            <div
              aria-hidden
              className="absolute right-3 top-3 hidden h-full w-full rounded-xl border border-hairline-on-ink bg-ink-bg-2 sm:block"
            />
            <div className="relative overflow-hidden rounded-xl border border-hairline-on-ink bg-ink-bg-2 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.6)]">
              {/* slim top bar */}
              <div className="flex items-center gap-2 border-b border-hairline-on-ink px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="mx-auto rounded-full bg-white/[0.06] px-3 py-0.5 font-mono text-[0.65rem] text-on-ink-soft">
                  avergent.com
                </span>
              </div>
              <Image
                src="/portfolio/avergent.png"
                alt="Avergent, a website I designed and built"
                width={1440}
                height={900}
                priority
                sizes="(max-width: 1024px) 90vw, 540px"
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
