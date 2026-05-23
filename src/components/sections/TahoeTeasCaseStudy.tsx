"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Mail,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  Sparkles,
  Check,
  Calendar,
  Database,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const meta = [
  { label: "Role", value: "Design + AI Engineering" },
  { label: "Client", value: "Tahoe Teas — Ecommerce" },
  { label: "Year", value: "2026" },
];

const channels = [
  { icon: Mail, name: "Email", note: "Flows & broadcasts" },
  { icon: FileText, name: "Blog", note: "SEO articles" },
  { icon: ImageIcon, name: "Instagram", note: "Captions & carousels" },
  { icon: MessageSquare, name: "SMS", note: "Short, timely" },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Brand voice, enforced",
    body: "The AI writes against a detailed brand-voice rubric — so every draft sounds like Tahoe Teas, not generic marketing copy.",
  },
  {
    icon: ShieldCheck,
    title: "Human in the loop",
    body: "Nothing publishes without sign-off. A simple share link lets the owner review and approve each channel before it goes out.",
  },
  {
    icon: Database,
    title: "One unified log",
    body: "Every send across every channel writes to a single record — the full customer journey in one place, not siloed by tool.",
  },
  {
    icon: Calendar,
    title: "Scheduling & automation",
    body: "Welcome and follow-up emails trigger automatically; blog, social, and SMS publish on a schedule with no manual steps.",
  },
  {
    icon: ShoppingBag,
    title: "Wired into Shopify",
    body: "Subscribers, unique discount codes, and published articles sync directly with the store — the system and shop stay in step.",
  },
  {
    icon: Check,
    title: "Production-grade stack",
    body: "Built on a modern serverless foundation — fast, reliable, and inexpensive to run, with room to grow as the brand scales.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Vercel",
  "Claude (AI SDK)",
  "Postgres",
  "Shopify",
  "Resend",
];

const outcomes = [
  "One idea becomes email, blog, Instagram, and SMS — all on-brand, from a single source.",
  "A consistent brand voice across every channel, instead of drift between tools and writers.",
  "Far less manual re-writing and copy-pasting, with publishing handled on a schedule.",
  "The owner stays in control — reviewing and approving everything before it reaches customers.",
];

export function TahoeTeasCaseStudy() {
  return (
    <main className="bg-dark">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* subtle gradient glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue/20 blur-[140px]" />

        <div className="relative max-w-[1140px] mx-auto px-6">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, ease }}
            className="text-xs font-bold uppercase tracking-[3px] gradient-text mb-6"
          >
            Case Study · AI Solutions for Ecommerce
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mb-6"
          >
            <Image
              src="/tahoe/tahoe-teas-wordmark-sand.png"
              alt="Tahoe Teas"
              width={420}
              height={120}
              className="h-9 w-auto opacity-90"
              priority
            />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-[820px] mb-6 text-text-light"
          >
            An <span className="accent-text gradient-underline">AI content engine</span> for a
            Lake Tahoe tea brand
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="text-text-sec-light text-base md:text-lg leading-[1.75] max-w-[620px] mb-10"
          >
            Tahoe Teas had great products and a clear voice &mdash; but reaching customers
            meant re-writing the same idea by hand for email, the blog, Instagram, and SMS. We
            built the AI systems that do it for them: write once, publish everywhere, with a
            human approving every step.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="flex flex-wrap gap-x-12 gap-y-6 border-t border-white/[0.08] pt-8"
          >
            {meta.map((m) => (
              <div key={m.label}>
                <p className="text-xs uppercase tracking-[2px] text-text-sec-light mb-1.5">
                  {m.label}
                </p>
                <p className="text-text-light font-semibold text-sm md:text-base">{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────────── */}
      <section className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/[0.06]"
        >
          <Image
            src="/tahoe/lake-hero.jpg"
            alt="Tahoe Teas blends by the lake"
            fill
            sizes="(max-width: 1140px) 100vw, 1140px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* ── Challenge ────────────────────────────────────────── */}
      <section className="max-w-[1140px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-light tracking-tight mb-6">
              Great content, multiplied by hand
            </h2>
            <p className="text-text-sec-light text-base leading-[1.75] mb-4">
              Growing an ecommerce brand means showing up everywhere customers are &mdash; the
              inbox, the blog, the feed, the text thread. For a small team, that turns one good
              idea into hours of re-writing the same story four different ways.
            </p>
            <p className="text-text-sec-light text-base leading-[1.75]">
              The work was manual and fragmented, and the brand&apos;s distinctive voice drifted
              between channels and tools. Tahoe Teas needed to scale their output without
              scaling their team &mdash; and without sounding like everyone else.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.06]"
          >
            <Image
              src="/tahoe/loose-leaf-bowl.jpg"
              alt="Tahoe Teas loose-leaf blend"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── What we built ────────────────────────────────────── */}
      <section className="bg-dark-light py-24 md:py-32">
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="mb-14"
          >
            <p className="text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
              What We Built
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-light tracking-tight max-w-[640px]">
              Two AI systems, one connected workflow
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Mail,
                kicker: "System 01",
                title: "AI Email System",
                body: "A custom email platform that replaced an off-the-shelf tool. Automated welcome and follow-up flows trigger on signup, broadcasts go out to the full list, and every message uses branded, on-voice templates — with delivery, opens, and clicks tracked.",
                points: [
                  "Behavior-triggered welcome & drip flows",
                  "One-off broadcasts to the whole list",
                  "Branded templates, generated in-voice",
                  "Delivery & engagement tracking",
                ],
              },
              {
                icon: Sparkles,
                kicker: "System 02",
                title: "AI Content System",
                body: "The heart of the project: write once, publish everywhere. A single source idea is transformed by AI into channel-perfect email, blog, Instagram, and SMS — each matched to a strict brand voice, reviewed by a human, then scheduled and published automatically.",
                points: [
                  "One source → four on-brand channels",
                  "Brand-voice rubric baked into every prompt",
                  "Share-link review & approval workflow",
                  "Scheduling, publishing & a unified log",
                ],
              },
            ].map((sys, i) => (
              <motion.div
                key={sys.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg gradient-bg text-white">
                    <sys.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[2.5px] text-teal">
                    {sys.kicker}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-light mb-3">
                  {sys.title}
                </h3>
                <p className="text-text-sec-light text-sm md:text-base leading-[1.75] mb-6">
                  {sys.body}
                </p>
                <ul className="space-y-2.5">
                  {sys.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" strokeWidth={2.5} />
                      <span className="text-text-sec-light text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pipeline diagram ─────────────────────────────────── */}
      <section className="max-w-[1140px] mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-light tracking-tight">
            Write once, <span className="accent-text gradient-underline">publish everywhere</span>
          </h2>
        </motion.div>

        <div className="mx-auto flex max-w-[760px] flex-col items-center">
          {/* Stage 1 — Source */}
          <Stage delay={0}>
            <StageCard title="One source" sub="An idea, a blog post, a campaign brief" />
          </Stage>
          <Connector />

          {/* Stage 2 — AI engine */}
          <Stage delay={0.1}>
            <div className="w-full rounded-2xl gradient-bg p-[1.5px]">
              <div className="rounded-2xl bg-dark px-6 py-5 text-center">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 text-teal" />
                  <span className="text-sm font-bold text-text-light">Claude AI + Brand Voice</span>
                </div>
                <p className="text-xs text-text-sec-light">
                  Drafts in the Tahoe Teas voice — checked against a brand-voice rubric
                </p>
              </div>
            </div>
          </Stage>
          <Connector />

          {/* Stage 3 — Fan-out to channels */}
          <Stage delay={0.2}>
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
              {channels.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-4 text-center"
                >
                  <c.icon className="mx-auto mb-2 h-5 w-5 text-blue" strokeWidth={1.75} />
                  <p className="text-sm font-semibold text-text-light">{c.name}</p>
                  <p className="mt-0.5 text-[0.7rem] text-text-sec-light">{c.note}</p>
                </div>
              ))}
            </div>
          </Stage>
          <Connector />

          {/* Stage 4 — Review */}
          <Stage delay={0.3}>
            <StageCard
              title="Review & approve"
              sub="The owner signs off per channel via a share link"
              icon={<ShieldCheck className="h-4 w-4 text-teal" />}
            />
          </Stage>
          <Connector />

          {/* Stage 5 — Publish */}
          <Stage delay={0.4}>
            <StageCard
              title="Publish & schedule"
              sub="Sent and posted automatically, across every channel"
              icon={<Calendar className="h-4 w-4 text-teal" />}
            />
          </Stage>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────────── */}
      <section className="bg-dark-light py-24 md:py-32">
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="mb-14"
          >
            <p className="text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
              Highlights
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-light tracking-tight max-w-[640px]">
              The details that make it work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05] text-blue">
                  <h.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-base font-bold text-text-light mb-2">{h.title}</h3>
                <p className="text-text-sec-light text-sm leading-relaxed">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcome + tech stack ─────────────────────────────── */}
      <section className="max-w-[1140px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative order-2 lg:order-1 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.06]"
          >
            <Image
              src="/tahoe/two-mugs.png"
              alt="Two mugs of Tahoe Teas"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
              The Outcome
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-light tracking-tight mb-6">
              A small team that publishes like a big one
            </h2>
            <ul className="space-y-3.5 mb-10">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-teal" strokeWidth={2.5} />
                  <span className="text-text-sec-light text-base leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs uppercase tracking-[2px] text-text-sec-light mb-3.5">
              Built with
            </p>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold text-text-sec-light"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="max-w-[1140px] mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-dark-light px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-teal/20 blur-[120px]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-light tracking-tight mb-5">
              Want something{" "}
              <span className="accent-text gradient-underline">like this?</span>
            </h2>
            <p className="text-text-sec-light text-base max-w-[520px] mx-auto mb-9 leading-relaxed">
              Whether you sell tea, software, or anything in between &mdash; if you&apos;re
              re-doing the same work by hand, there&apos;s probably an AI system that can do it
              for you. Let&apos;s talk about what to build.
            </p>
            <Link
              href="/#contact"
              className="inline-block gradient-bg text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:opacity-90 hover:shadow-[0_8px_25px_rgba(8,117,233,0.3)] transition-all"
            >
              Start a conversation
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/* ── Diagram helpers ────────────────────────────────────────── */

function Stage({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function StageCard({
  title,
  sub,
  icon,
}: {
  title: string;
  sub: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-5 text-center">
      <div className="mb-1 flex items-center justify-center gap-2">
        {icon}
        <span className="text-sm font-bold text-text-light">{title}</span>
      </div>
      <p className="text-xs text-text-sec-light">{sub}</p>
    </div>
  );
}

function Connector() {
  return (
    <div
      aria-hidden
      className="my-2 h-8 w-px bg-gradient-to-b from-blue/60 to-teal/60"
    />
  );
}
