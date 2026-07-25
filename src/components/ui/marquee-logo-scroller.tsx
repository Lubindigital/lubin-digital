import React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeLogo {
  /** Path to a vendored SVG in /public (no external hosts). */
  src: string;
  /** Product name, used as the visible caption and the accessible name. */
  name: string;
}

export interface MarqueeLogoScrollerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description: string;
  logos: MarqueeLogo[];
  speed?: "slow" | "normal" | "fast";
}

const DURATION = {
  slow: "80s",
  normal: "52s",
  fast: "28s",
} as const;

/**
 * Infinite logo marquee for the "what I build with" band.
 *
 * Styled against the site's editorial tokens (canvas / ink / hairline / accent),
 * not the stock shadcn `background`/`secondary` variables, which are plain
 * neutrals here and would read cold against the warm canvas.
 *
 * Logos sit in ink-toned greyscale at rest and resolve to full brand colour on
 * hover, so the row stays quiet until the reader engages with it. The keyframes
 * and the reduced-motion guard live in globals.css under `.marquee-track`.
 */
export function MarqueeLogoScroller({
  eyebrow,
  title,
  description,
  logos,
  speed = "normal",
  className,
  ...props
}: MarqueeLogoScrollerProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-hairline bg-white",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div className="border-b border-hairline px-6 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr] lg:gap-10">
          <div>
            {eyebrow && <p className="eyebrow text-accent mb-3">{eyebrow}</p>}
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.1] text-balance">
              {title}
            </h2>
          </div>
          <p className="text-ink-soft leading-[1.7] self-end max-w-[46ch]">
            {description}
          </p>
        </div>
      </div>

      {/* Track */}
      <div className="marquee-mask overflow-hidden py-8">
        <ul
          className="marquee-track flex w-max items-stretch gap-3 pr-3"
          style={
            { "--marquee-duration": DURATION[speed] } as React.CSSProperties
          }
        >
          {/* The list is rendered twice so the loop is seamless. Only the first
              copy is exposed to assistive tech. */}
          {[0, 1].map((copy) =>
            logos.map((logo) => (
              <li
                key={`${copy}-${logo.name}`}
                aria-hidden={copy === 1 ? true : undefined}
                className="group flex h-28 w-44 shrink-0 flex-col items-center justify-center gap-3 rounded-lg border border-hairline bg-canvas px-4 transition-colors duration-300 hover:border-accent/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-auto max-w-[7rem] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span className="text-center text-xs font-medium text-ink-soft transition-colors duration-300 group-hover:text-ink">
                  {logo.name}
                </span>
              </li>
            )),
          )}
        </ul>
      </div>
    </div>
  );
}

export { DURATION as MARQUEE_DURATION };
