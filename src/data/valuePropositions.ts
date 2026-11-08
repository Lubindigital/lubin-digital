export interface Differentiator {
  /** Step number, e.g. "01" */
  number: string;
  /** Short mono kicker label */
  kicker: string;
  /** Display-serif claim — keep short, one line where possible */
  claim: string;
  /** One short line backing the claim */
  proof: string;
}

export const differentiators: Differentiator[] = [
  {
    number: "01",
    kicker: "Speed",
    claim: "Live in two to three weeks.",
    proof: "No month-long discovery phase. No committee.",
  },
  {
    number: "02",
    kicker: "Craft",
    claim: "Hand-built, line by line.",
    proof: "This page is the sample. Open it on your phone.",
  },
  {
    number: "03",
    kicker: "Partnership",
    claim: "You talk to the person who builds it.",
    proof: "My phone number is on this page. That's the whole escalation path.",
  },
];
