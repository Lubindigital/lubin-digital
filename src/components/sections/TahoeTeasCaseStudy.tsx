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
    body: "The system reads the empty weeks on the calendar, the season in Tahoe, keywords nobody has covered yet, what went out recently, and what actually sold. Then it hands Tica a ranked list of what to write next.",
  },
  {
    step: "02",
    title: "One click drafts every channel",
    body: "Pick an idea. The Studio writes the email, the Shopify blog post, the Instagram caption, and the text at the same time. Each one is written for its own channel instead of the same paragraph pasted four times.",
  },
  {
    step: "03",
    title: "A quality gate before anyone sees it",
    body: "The email and the blog post each get written more than once, and a smaller, cheaper model picks the better version. Then a brand voice check scores every piece from 0 to 100 and strips the em dash, because nothing says a robot wrote this faster.",
  },
  {
    step: "04",
    title: "The owner approves from her phone",
    body: "Tica gets a link. No password, no login to remember. She reads each channel and signs off on them one at a time, and nothing goes out without her yes.",
  },
  {
    step: "05",
    title: "Publish, then learn",
    body: "Approved pieces publish on schedule. Opens, clicks, and revenue from Shopify discount codes flow back in, so the next round of ideas already knows what worked.",
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
    sub: "AI writer, social scheduler, blog retainer, design tool",
  },
  {
    figure: "~12 hrs/mo",
    label: "Owner time reclaimed",
    sub: "Writing & scheduling, valued at ~$40/hr",
  },
  {
    figure: "~$10,100/yr",
    label: "Estimated total savings",
    sub: "Avoided tools plus reclaimed labor",
  },
];

/* What makes it trustworthy — honest, plain */
const principles = [
  {
    title: "Grounded in their own writing",
    body: "Copy Tahoe Teas already approved is stored as vectors in Postgres and pulled into the prompt before a word gets written. New writing sounds like them because it's built out of them.",
  },
  {
    title: "A person decides, every time",
    body: "The AI proposes and drafts. Tica approves each channel separately, and skipping that step isn't an option the software offers.",
  },
  {
    title: "Honest about what it can't do yet",
    body: "SMS is built and consent compliant, but it's waiting on carrier approval and isn't reaching anyone yet. Instagram publishes images only. Facebook was left out on purpose.",
  },
  {
    title: "Wired into the store",
    body: "Subscribers, discount codes, and published articles all sync with Shopify. When a code gets used, the revenue points back at the piece of content that sent it.",
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
            Tica and Mike run Tahoe Teas as a family. The products are real and
            the voice is theirs. What they didn&apos;t have was the time to
            rewrite the same idea four times over for email, the blog,
            Instagram, and a text message. So I built the software that does it
            for them, with Tica approving every word before it goes out.
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
            <p className="text-ink-soft text-base leading-[1.75] max-w-[60ch] mb-4">
              The first job was narrow. Replace Klaviyo for the welcome flow and
              the signup popup, which I cut over in May 2026. It worked, and
              then the real problem showed up: the welcome email was one of four
              places Tahoe Teas needed to appear every week, and the other three
              were still getting written by hand.
            </p>
            <p className="text-ink-soft text-base leading-[1.75] max-w-[60ch]">
              In June 2026 the app stopped being the &ldquo;Email System&rdquo;
              and became the <strong className="text-ink font-medium">Tahoe Teas
              Content System</strong>, with one job: take a good idea and turn
              it into a week of content that sounds like them, without Tica
              starting from a blank page.
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
            <h2 className="font-display text-4xl md:text-5xl text-on-ink leading-[1.05] mb-4">
              Idea in, published content out, then it learns
            </h2>
            <p className="text-on-ink-soft text-lg leading-[1.6]">
              It&apos;s a closed loop. What gets published feeds the next round
              of ideas, so the system should get sharper the longer it runs.
            </p>
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
              SMS is built and follows TCPA consent rules. It&apos;s waiting on
              carrier approval (Twilio A2P 10DLC) and does not deliver yet.
              Instagram is image only, so reels and anything with licensed music
              still get posted by hand. Facebook cross posting was deferred on
              purpose.
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
              <p className="text-ink-soft text-base leading-[1.75] max-w-[56ch] mb-4">
                Instead of a blank calendar, Tica opens a ranked list of ideas
                that already know what the store needs. One click drafts the
                week. She reads it on her phone, approves what she likes, and
                the rest goes out on schedule.
              </p>
              <p className="text-ink-soft text-base leading-[1.75] max-w-[56ch]">
                The voice holds steady across all four channels because
                it&apos;s built on their own past writing. No generic house
                style, and no drift from one tool to the next.
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
              <p className="eyebrow text-ink mb-2">{r.label}</p>
              <p className="text-ink-soft text-sm leading-[1.6] max-w-[28ch]">
                {r.sub}
              </p>
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
            The honest version: a build like this pays for itself by retiring a
            stack of subscriptions and handing Tica back about a dozen hours a
            month. I kept the numbers deliberately small. They
            count only the tools the system replaced and the hours it gave back.
            No revenue claims, because I don&apos;t have audited numbers and
            I&apos;m not going to invent them.
          </p>
          <p className="text-ink-soft/80 text-sm leading-[1.7] border-l border-hairline pl-6">
            <span className="eyebrow text-ink-soft block mb-2">
              Assumptions
            </span>
            Replaced tools: AI writer (~$468/yr), Buffer (~$180/yr), a freelance
            blog/SEO retainer at 2 posts/mo × $150 (~$3,600/yr), and Canva
            (~$120/yr). Reclaimed time: ~12 hrs/mo at a conservative ~$40/hr
            (~$5,760/yr). The email platform itself counts as $0, because the
            brand still needs one either way. The real benefit is probably
            higher.
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
            If you keep retyping the same idea in four places, there&apos;s
            usually a system worth building. Doesn&apos;t matter whether you
            sell tea or software. Tell me what&apos;s eating your week.
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
