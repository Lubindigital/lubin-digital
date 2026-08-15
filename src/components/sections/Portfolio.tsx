"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;
const MotionLink = motion.create(Link);

/* ── Group label: smaller eyebrow + font-display pairing ─────── */
function GroupHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease }}
      className="mb-8 max-w-[640px]"
    >
      <p className="eyebrow text-accent mb-3">{eyebrow}</p>
      <h3 className="font-display text-2xl md:text-3xl text-ink leading-[1.1] mb-2">
        {title}
      </h3>
      <p className="text-ink-soft leading-[1.6]">{subtitle}</p>
    </motion.div>
  );
}

/* ── Full-width horizontal featured card (the AI case study) ─── */
function Featured({ item }: { item: PortfolioItem }) {
  const href = item.caseStudyPath ?? item.url ?? "#";

  return (
    <MotionLink
      href={href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className="group grid grid-cols-1 overflow-hidden rounded-xl border border-hairline bg-white transition-colors duration-300 hover:border-accent/50 focus-visible:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-2 md:grid-cols-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[380px]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className="eyebrow text-accent mb-4">{item.category}</p>
        <h4 className="font-display text-3xl md:text-4xl text-ink mb-4">
          {item.name}
        </h4>
        <p className="text-ink-soft leading-[1.7] max-w-[46ch] mb-7">
          {item.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
          {item.ctaLabel ?? "Read the case study"}
          <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </MotionLink>
  );
}

/* ── Uniform card in the symmetric Web Design grid ──────────── */
function WorkCard({ item, index }: { item: PortfolioItem; index: number }) {
  const href = item.url ?? "#";
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease }}
      className="group flex w-full flex-col overflow-hidden rounded-xl border border-hairline bg-white transition-colors duration-300 hover:border-accent/50 focus-visible:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-2 sm:w-[calc(50%-1rem)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-ink-soft/80 mb-2.5">{item.category}</p>
        <h4 className="font-display text-2xl text-ink mb-2">{item.name}</h4>
        <p className="text-sm leading-[1.6] text-ink-soft line-clamp-2 mb-5">
          {item.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
          Visit live site
          <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.a>
  );
}

export function Portfolio() {
  const aiFeatured = portfolioItems.find(
    (it) => it.group === "ai" && it.caseStudyPath,
  );
  const webItems = portfolioItems.filter((it) => it.group === "web");

  return (
    <section id="portfolio" className="bg-canvas-2 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ── Section header ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 max-w-[640px]"
        >
          <p className="eyebrow text-accent mb-4">Recent work</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-4">
            Selected work
          </h2>
          <p className="text-ink-soft text-lg leading-[1.6]">
            The AI systems and the websites. Same hands on both.
          </p>
        </motion.div>

        {/* ── (A) AI Solutions ───────────────────────────── */}
        {aiFeatured && (
          <div className="mb-20 md:mb-24">
            <GroupHeading
              eyebrow="AI systems"
              title="Software that runs on its own"
              subtitle="Content engines, automation, internal tools. These are real applications with their own logins, running on their own schedule."
            />
            <Featured item={aiFeatured} />
          </div>
        )}

        {/* ── (B) Web Design ─────────────────────────────── */}
        {webItems.length > 0 && (
          <div>
            <GroupHeading
              eyebrow="Websites"
              title="Built to order, shipped fast"
              subtitle="Ecommerce, home services, healthcare, employee benefits, and a designer's portfolio. Six different clients, one standard: it loads fast and it reads clean on a phone."
            />
            {/* Centred flex, not a grid: an odd card count centres on the axis
                instead of hanging left in an orphan row. */}
            <div className="flex flex-wrap justify-center gap-8">
              {webItems.map((item, i) => (
                <WorkCard key={item.name} item={item} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
