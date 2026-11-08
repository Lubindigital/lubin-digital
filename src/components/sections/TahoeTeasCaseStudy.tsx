"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const meta = [
  { label: "Client", value: "Tahoe Teas, Ecommerce" },
  { label: "Role", value: "Design + AI Engineering" },
  { label: "Engagement", value: "2026 to present" },
];

/* The closed loop — five plain-language stages */
const loop = [
  {
    step: "01",
    title: "Ideas, ranked",
    body: "It reads the calendar, the season, open keywords, and what sold, then ranks what to write next.",
  },
  {
    step: "02",
    title: "One click drafts every channel",
    body: "Email, blog post, caption, and text, each written for its own channel.",
  },
  {
    step: "03",
    title: "A quality gate before anyone sees it",
    body: "Drafts compete, and a brand voice check scores every piece 0 to 100.",
  },
  {
    step: "04",
    title: "The owner approves from her phone",
    body: "One link, no login. Nothing goes out without her yes.",
  },
  {
    step: "05",
    title: "Publish, then learn",
    body: "Opens, clicks, and Shopify revenue feed the next round of ideas.",
  },
];

/* The four channels one idea fans out to */
const channels = [
  { name: "Email", note: "Welcome flow + broadcasts", status: "Live" },
  { name: "Shopify blog", note: "SEO articles", status: "Live" },
  { name: "Instagram", note: "Image posts", status: "Live" },
  { name: "SMS", note: "Short, timely", status: "Built" },
];

/* ROI band — conservative, cited */
const roi = [
  {
    figure: "$4,400/yr",
    label: "Subscriptions replaced",
  },
  {
    figure: "~12 hrs/mo",
    label: "Owner time reclaimed",
  },
  {
    figure: "~$10,100/yr",
    label: "Estimated total savings",
  },
];

/* What makes it trustworthy — honest, plain */
const principles = [
  {
    title: "Grounded in their own writing",
    body: "New copy is built from copy they already approved.",
  },
  {
    title: "A person decides, every time",
    body: "Tica approves each channel. There's no skip button.",
  },
  {
    title: "Honest about what it can't do yet",
    body: "SMS awaits carrier approval. Facebook is left out on purpose.",
  },
  {
    title: "Wired into the store",
    body: "Discount codes tie Shopify revenue back to the post that earned it.",
  },
];

const stack = [
  "Next.js 16",
  "React 19",
  "Tailwind v4",
  "Drizzle + Neon (pgvector)",
  "Resend",
  "Shopify Admin GraphQL",
  "Instagram Graph API",
  "Twilio",
  "Notion",
  "Vercel Blob + Cron",
  "AI SDK v6 + AI Gateway",
  "Claude Opus 4.6 + Haiku 4.5",
];

export function TahoeTeasCaseStudy() {
  return (
    <main className="bg-canvas">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow text-accent mb-6"
          >
            Case Study · AI for Ecommerce
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mb-7"
          >
            <Image
              src="/tahoe/tahoe-teas-wordmark.png"
              alt="Tahoe Teas"
              width={420}
              height={120}
              className="h-8 w-auto"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease }}
            className="font-display text-ink text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.05] max-w-[18ch] mb-7 text-balance"
          >
            A content system that runs the marketing for a Lake Tahoe tea brand
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="text-ink-soft text-lg leading-[1.7] max-w-[62ch] mb-10"
          >
            Tica and Mike run Tahoe Teas as a family. I built the software that
            turns one idea into an email, a blog post, an Instagram post, and a
            text, with Tica approving every word.
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="flex flex-wrap gap-x-12 gap-y-6 border-t border-hairline pt-8"
          >
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="eyebrow text-ink-soft/70 mb-1.5">{m.label}</dt>
                <dd className="text-ink font-medium text-sm md:text-base">
                  {m.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-hairline"
        >
          <Image
            src="/tahoe/lake-hero.jpg"
            alt="Tahoe Teas blends by Lake Tahoe"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </motion.figure>
      </section>

      {/* ── The challenge ────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="eyebrow text-accent mb-4">Where it started</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-6">
              From one email flow to the whole calendar
            </h2>
            <p className="text-ink-soft text-lg leading-[1.7] max-w-[46ch]">
              It started in May 2026 as a Klaviyo replacement for one welcome
              flow. By June it was writing all four channels every week.
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-hairline"
          >
            <Image
              src="/tahoe/loose-leaf-bowl.jpg"
              alt="Tahoe Teas loose-leaf blend"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover"
            />
          </motion.figure>
        </div>
      </section>

      {/* ── The loop (ink band for rhythm) ───────────────────── */}
      <section className="bg-ink-bg py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="mb-14 max-w-[640px]"
          >
            <p className="eyebrow text-accent mb-4">The loop</p>
            <h2 className="font-display text-4xl md:text-5xl text-on-ink leading-[1.05]">
              Idea in, published content out, then it learns
            </h2>
          </motion.div>

          {/* Five stages as a numbered hairline list */}
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-hairline-on-ink">
            {loop.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="border-b border-hairline-on-ink py-8 lg:border-b-0 lg:border-r lg:px-6 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:pt-8"
              >
                <p className="eyebrow tnum text-accent mb-4">{s.step}</p>
                <h3 className="text-on-ink font-medium text-lg mb-2.5">
                  {s.title}
                </h3>
                <p className="text-on-ink-soft text-sm leading-[1.7]">
                  {s.body}
                </p>
              </motion.li>
            ))}
          </ol>

          {/* Channel fan-out */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="mt-16"
          >
            <p className="eyebrow text-on-ink-soft mb-5">
              One idea → four channels
            </p>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline-on-ink bg-hairline-on-ink sm:grid-cols-4">
              {channels.map((c) => (
                <div key={c.name} className="bg-ink-bg px-5 py-6">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="text-on-ink font-medium">{c.name}</span>
                    <span
                      className={`eyebrow text-[0.6rem] ${
                        c.status === "Live" ? "text-accent" : "text-on-ink-soft"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="text-on-ink-soft text-sm">{c.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-on-ink-soft/80 text-xs leading-relaxed max-w-[60ch]">
              SMS is waiting on carrier approval. Instagram is images only; reels
              are still posted by hand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What makes it trustworthy ────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-[640px]"
        >
          <p className="eyebrow text-accent mb-4">Why it can be trusted</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05]">
            Nothing publishes without a person saying yes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 border-t border-hairline pt-12">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease }}
            >
              <h3 className="font-display text-2xl text-ink mb-3">{p.title}</h3>
              <p className="text-ink-soft text-base leading-[1.7] max-w-[52ch]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Product imagery break ────────────────────────────── */}
      <section className="bg-canvas-2 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-center">
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease }}
              className="relative order-2 lg:order-1 aspect-[4/5] w-full overflow-hidden rounded-xl border border-hairline"
            >
              <Image
                src="/tahoe/two-mugs.png"
                alt="Two mugs of Tahoe Teas"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease }}
              className="order-1 lg:order-2"
            >
              <p className="eyebrow text-accent mb-4">What changed for them</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-6">
                A two-person shop that publishes like a team
              </h2>
              <p className="text-ink-soft text-lg leading-[1.7] max-w-[46ch]">
                Tica opens a ranked list, drafts the week in one click, and
                approves it from her phone. The voice holds across all four
                channels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ROI band ─────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-[640px]"
        >
          <p className="eyebrow text-accent mb-4">The math</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05]">
            What building it in-house saves
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-hairline">
          {roi.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="border-b border-hairline py-10 sm:border-b-0 sm:border-r sm:px-8 sm:py-0 sm:first:pl-0 sm:last:border-r-0 sm:pt-0"
            >
              <p className="font-display tnum text-accent text-5xl md:text-6xl leading-none mb-4">
                {r.figure}
              </p>
              <p className="eyebrow text-ink">{r.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-16"
        >
          <p className="text-ink-soft text-base leading-[1.75] max-w-[58ch]">
            Only replaced tools and reclaimed hours. No revenue claims I
            can&apos;t back up.
          </p>
          <p className="text-ink-soft/80 text-sm leading-[1.7] border-l border-hairline pl-6">
            <span className="eyebrow text-ink-soft block mb-2">
              How I counted
            </span>
            AI writer $468, Buffer $180, blog retainer $3,600, Canva $120 per
            year. Time: 12 hrs/mo at $40/hr.
          </p>
        </motion.div>
      </section>

      {/* ── Stack ────────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="border-t border-hairline pt-12"
        >
          <p className="eyebrow text-ink-soft/70 mb-6">Built with</p>
          <ul className="flex flex-wrap gap-2.5">
            {stack.map((t) => (
              <li
                key={t}
                className="rounded-md border border-hairline px-3.5 py-1.5 text-sm font-medium text-ink-soft"
              >
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="rounded-xl border border-hairline bg-canvas-2 px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-5">
            Doing the same work by hand?
          </h2>
          <p className="text-ink-soft text-lg max-w-[52ch] mx-auto mb-9 leading-[1.6]">
            Tell me what&apos;s eating your week.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-2"
            >
              Start a conversation
            </Link>
            <Link
              href="/#portfolio"
              className="link-underline text-sm font-semibold text-ink"
            >
              See more work &rarr;
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
