export interface Differentiator {
  /** Step number, e.g. "01" */
  number: string;
  /** Short mono kicker label */
  kicker: string;
  /** Display-serif claim — keep short, one line where possible */
  claim: string;
  /** One honest sentence backing the claim */
  detail: string;
  /** Small supporting micro-proof line */
  proof: string;
}

export const differentiators: Differentiator[] = [
  {
    number: "01",
    kicker: "Speed",
    claim: "Live in two to three weeks.",
    detail:
      "We scope tight and build focused sites — no months-long discovery, no committee. You get a real, working site while the idea is still fresh.",
    proof: "Typical turnaround: 2–3 weeks from kickoff to launch.",
  },
  {
    number: "02",
    kicker: "Craft",
    claim: "Hand-built, line by line.",
    detail:
      "Nothing here is dragged out of a template and recolored. Every page is written and built from scratch — the site you're reading right now is the sample.",
    proof: "This page is the portfolio. Look at how it moves.",
  },
  {
    number: "03",
    kicker: "Partnership",
    claim: "You talk to the person who builds it.",
    detail:
      "No account managers, no hand-offs, no game of telephone. The same person designs your site and writes the code — so feedback lands the first time.",
    proof: "One partner, start to finish. That's the whole team.",
  },
];
