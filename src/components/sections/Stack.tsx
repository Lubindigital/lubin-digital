"use client";

import { motion } from "motion/react";
import {
  MarqueeLogoScroller,
  type MarqueeLogo,
} from "@/components/ui/marquee-logo-scroller";

const ease = [0.22, 1, 0.36, 1] as const;

/** Every tool here is one I actually build on, not a logo wall. */
const stack: MarqueeLogo[] = [
  { src: "/stack/nextjs.svg", name: "Next.js" },
  { src: "/stack/react.svg", name: "React" },
  { src: "/stack/tailwindcss.svg", name: "Tailwind CSS" },
  { src: "/stack/vercel.svg", name: "Vercel AI SDK" },
  { src: "/stack/claude.svg", name: "Anthropic Claude" },
  { src: "/stack/neon.svg", name: "Neon Postgres" },
  { src: "/stack/drizzle.svg", name: "Drizzle" },
  { src: "/stack/sanity.svg", name: "Sanity" },
  { src: "/stack/shopify.svg", name: "Shopify" },
  { src: "/stack/resend.svg", name: "Resend" },
  { src: "/stack/notion.svg", name: "Notion" },
];

export function Stack() {
  return (
    <section id="stack" className="bg-canvas pb-24 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
        >
          <MarqueeLogoScroller
            eyebrow="What I build with"
            title="The tools we use and why"
            description="Picked for how they hold up a year after launch. Fewer moving parts means less to break, and less for you to inherit when the project is yours."
            logos={stack}
            speed="normal"
          />
        </motion.div>
      </div>
    </section>
  );
}
