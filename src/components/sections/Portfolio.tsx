"use client";

import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

const MotionLink = motion.create(Link);
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* Large showcase card — supports internal case-study links (next/link) and
   external live-site links (new tab). */
function FeaturedCard({ item }: { item: PortfolioItem }) {
  const isInternal = Boolean(item.caseStudyPath);
  const href = item.caseStudyPath ?? item.url ?? "#";
  const label =
    item.displayUrl ??
    (item.url ? item.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "");
  const cta = item.ctaLabel ?? "Visit Live Site";
  const Wrapper = (isInternal ? MotionLink : motion.a) as ElementType;
  const linkProps: Record<string, string> = isInternal
    ? { href }
    : { href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Wrapper
      {...linkProps}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease }}
      className="group relative block overflow-hidden rounded-2xl cursor-pointer"
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
            {label}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          width={1440}
          height={900}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          priority
        />
        {/* Strong scrim so overlay text stays legible on bright images */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/85 to-dark/10" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[2.5px] text-teal">
              {item.category}
            </span>
            <span className="w-8 h-px bg-teal/40" />
          </div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-text-light mb-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
            {item.name}
          </h3>
          <p className="text-text-light/85 text-sm md:text-base max-w-[540px] leading-relaxed mb-4 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            {item.description}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-text-light border border-white/30 bg-dark/30 backdrop-blur-sm px-4 py-2 rounded-lg group-hover:border-white/50 group-hover:bg-white/10 transition-all">
            {cta}
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isInternal ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              )}
            </svg>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

/* Masonry grid of secondary projects (external live sites). */
function WorkGrid({ items }: { items: PortfolioItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="columns-1 md:columns-2 gap-6 space-y-6">
      {items.map((item, i) => (
        <motion.a
          key={item.name}
          href={item.url || "#"}
          target={item.url ? "_blank" : undefined}
          rel={item.url ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: i * 0.08, duration: 0.6, ease }}
          className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer block"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={600}
            height={item.tall ? 520 : 380}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/45 to-transparent flex flex-col justify-end p-5 md:p-6 transition-all duration-300 group-hover:from-dark">
            <p className="text-[0.65rem] font-medium uppercase tracking-[2px] text-teal mb-1">
              {item.category}
            </p>
            <h3 className="text-base md:text-lg font-bold text-text-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
              {item.name}
            </h3>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

/* One titled section (heading + subtitle + featured card + grid). */
function WorkGroup({
  eyebrow,
  heading,
  accent,
  subtitle,
  items,
  showCta,
}: {
  eyebrow?: string;
  heading: string;
  accent: string;
  subtitle: string;
  items: PortfolioItem[];
  showCta?: boolean;
}) {
  if (items.length === 0) return null;
  const featured = items.find((it) => it.featured) ?? items[0];
  const rest = items.filter((it) => it !== featured);

  return (
    <div>
      <div className="flex items-end justify-between mb-10 gap-6">
        <div className="max-w-[640px]">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[3px] text-text-sec-dark mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-dark leading-tight tracking-tight mb-4">
            {heading}{" "}
            <span className="accent-text gradient-underline">{accent}</span>
          </h2>
          <p className="text-text-sec-dark text-base leading-relaxed">{subtitle}</p>
        </div>
        {showCta && (
          <a
            href="#contact"
            className="hidden md:inline-block text-sm font-medium text-text-sec-dark hover:text-text-dark transition-colors whitespace-nowrap pb-1"
          >
            Start your project &rarr;
          </a>
        )}
      </div>

      {featured && (
        <div className="mb-6">
          <FeaturedCard item={featured} />
        </div>
      )}
      <WorkGrid items={rest} />
    </div>
  );
}

export function Portfolio() {
  const ai = portfolioItems.filter((it) => it.group === "ai");
  const web = portfolioItems.filter((it) => it.group === "web");

  return (
    <section id="portfolio" className="bg-light py-24">
      <div className="max-w-[1140px] mx-auto px-6 space-y-20 md:space-y-28">
        <WorkGroup
          eyebrow="Our Work"
          heading="AI"
          accent="Solutions"
          subtitle="Custom AI systems that automate content, marketing, and operations — designed around your brand and wired into the tools you already use."
          items={ai}
          showCta
        />
        <WorkGroup
          heading="Web"
          accent="Design"
          subtitle="Fast, modern, conversion-focused websites — designed and built from scratch for businesses and organizations that want to stand out."
          items={web}
        />
      </div>
    </section>
  );
}
