"use client";

import { motion } from "motion/react";
import { differentiators } from "@/data/valuePropositions";

const ease = [0.22, 1, 0.36, 1] as const;

export function ValuePropositions() {
  return (
    <section className="bg-canvas py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[640px]"
        >
          <p className="eyebrow text-accent mb-4">Why work with us</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-4">
            A few honest reasons to pick us
          </h2>
          <p className="text-ink-soft text-lg leading-[1.6] max-w-[58ch]">
            Plenty of studios promise the world. Here is what actually sets a
            project with me apart — said plainly, no buzzwords.
          </p>
        </motion.div>

        {/* Text-led 3-up. Hairlines do the dividing, not cards. */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={[
                "flex flex-col py-8 md:py-0",
                // horizontal hairlines between stacked items on mobile
                i > 0 ? "border-t border-hairline md:border-t-0" : "",
                // vertical hairlines + breathing room between columns on desktop
                i > 0 ? "md:border-l md:border-hairline md:pl-10 lg:pl-14" : "",
                i < differentiators.length - 1 ? "md:pr-10 lg:pr-14" : "",
              ].join(" ")}
            >
              <p className="eyebrow text-accent tnum mb-6">{item.number}</p>

              <p className="eyebrow text-ink-soft mb-4">{item.kicker}</p>

              <h3 className="font-display text-2xl md:text-3xl text-ink leading-[1.12] mb-4 text-balance">
                {item.claim}
              </h3>

              <p className="text-ink-soft leading-[1.7] mb-7 max-w-[34ch]">
                {item.detail}
              </p>

              <p className="mt-auto border-t border-hairline pt-4 text-sm text-ink-soft/80 max-w-[34ch]">
                {item.proof}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
