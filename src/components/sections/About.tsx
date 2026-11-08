"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
  }),
};

const steps = [
  {
    n: "01",
    title: "We talk",
    body: "About your business and where the work piles up. No sales pitch.",
  },
  {
    n: "02",
    title: "I design and build it",
    body: "I draw it, then I code it.",
  },
  {
    n: "03",
    title: "You own what ships",
    body: "Not licensed back to you. I'm a text away.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-ink-bg py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ── Top: eyebrow + large pull-quote ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start lg:items-center">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="eyebrow gradient-text mb-6">Who you&apos;re working with</p>

            {/* The person you'd be working with */}
            <figure className="max-w-[400px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-hairline-on-ink">
                <Image
                  src="/westan-lubin.jpg"
                  alt="Westan Lubin, founder of Lubin Digital"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-[50%_30%]"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-on-ink font-medium">Westan Lubin</span>
                <span className="eyebrow text-on-ink-soft/70">Founder</span>
              </figcaption>
            </figure>
          </motion.div>

          <motion.blockquote
            custom={1}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="font-display text-on-ink text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.12] text-balance"
          >
            I&apos;d rather do the work myself and answer for it than hand your
            project down a chain.
          </motion.blockquote>
        </div>

        {/* ── Middle: one-line bio ─────────────────────────── */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 md:mt-24 border-t border-hairline-on-ink pt-14 md:pt-16"
        >
          <p className="max-w-[58ch] text-on-ink-soft text-lg leading-[1.7]">
            I design the site, write the code, and build the AI behind it, for
            clients nationwide. If something isn&apos;t worth building, I&apos;ll
            say so.
          </p>
        </motion.div>

        {/* ── How we work: three honest steps ────────────────── */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="eyebrow text-accent tnum mb-4">{step.n}</p>
              <h3 className="font-display text-on-ink text-2xl mb-3">
                {step.title}
              </h3>
              <p className="text-on-ink-soft text-sm leading-[1.7] max-w-[36ch]">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA — honest, points to contact + work ─────────── */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 md:mt-20 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-hairline-on-ink pt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-bg"
          >
            Start a conversation
          </a>
          <a
            href="#portfolio"
            className="link-underline text-sm font-semibold text-on-ink"
          >
            See the work &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
