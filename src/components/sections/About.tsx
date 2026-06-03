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

const clients = ["Tahoe Teas", "ReForm Health", "Avergent", "NVHPHP", "Tica Lubin"];

const steps = [
  {
    n: "01",
    title: "We talk first",
    body: "A real conversation about what you sell, who you serve, and where the work piles up. No discovery deck, no sales call dressed up as one.",
  },
  {
    n: "02",
    title: "I design and build it",
    body: "The same person handles strategy, design, and the engineering. Nothing gets lost in a handoff because there isn't one.",
  },
  {
    n: "03",
    title: "You own what ships",
    body: "A site that loads fast and AI that quietly handles the busywork — yours to keep, with me a text away when you need a change.",
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
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="eyebrow gradient-text mb-6">Who you&apos;re working with</p>
            <p className="text-on-ink-soft text-base leading-[1.7] max-w-[42ch]">
              Lubin Digital is a one-person studio. When you hire us, you get me —
              not a rotating cast of account managers, contractors, and a Slack
              channel where your project quietly stalls.
            </p>

            {/* On-brand signal motif */}
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-hairline-on-ink">
              <Image
                src="/about-visual.png"
                alt="Lubin Digital — design and AI engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
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
            project down a chain until no one remembers what you actually asked
            for.
          </motion.blockquote>
        </div>

        {/* ── Middle: two-column bio + the model ─────────────── */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 border-t border-hairline-on-ink pt-14 md:pt-16">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-[58ch] space-y-5 text-on-ink-soft text-base leading-[1.75]"
          >
            <p>
              I design and build websites &mdash; and I build the custom AI
              systems that run a business&apos;s content, marketing, and the
              repetitive admin that eats the week. Two practices, one set of
              hands: strategy, design, and engineering with no handoff in between.
            </p>
            <p>
              I work remote-first with clients across the country, so where
              you&apos;re based has never been the question. Whether the work makes
              your life easier is. I&apos;ll tell you straight when something
              isn&apos;t worth building, and I won&apos;t sell you features to pad
              an invoice.
            </p>
          </motion.div>

          {/* The one-partner model — typographic, no icon tiles */}
          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:border-l lg:border-hairline-on-ink lg:pl-12"
          >
            <p className="eyebrow text-on-ink-soft/70 mb-5">The model</p>
            <p className="font-display text-on-ink text-2xl leading-[1.3] mb-6">
              One partner — strategy, design, and engineering in the same set of
              hands.
            </p>
            <dl className="space-y-3 text-sm">
              {[
                ["Studio", "Independent, one person"],
                ["Where", "Remote-first, nationwide"],
                ["Between us", "No middlemen, no handoffs"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 border-b border-hairline-on-ink pb-3"
                >
                  <dt className="eyebrow text-on-ink-soft/70">{label}</dt>
                  <dd className="text-on-ink text-right font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* ── Proof: selected clients as a clean line ────────── */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-16 md:mt-20 border-t border-hairline-on-ink pt-8"
        >
          <p className="eyebrow text-on-ink-soft/70 mb-4">Selected clients</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {clients.map((c, i) => (
              <span key={c} className="flex items-center gap-x-6">
                <span className="text-on-ink text-lg md:text-xl font-medium">
                  {c}
                </span>
                {i < clients.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden sm:inline text-on-ink-soft/40"
                  >
                    &middot;
                  </span>
                )}
              </span>
            ))}
          </div>
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
