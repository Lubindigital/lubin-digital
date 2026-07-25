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
      "I scope the site tight and start building in week one. No discovery phase that eats a month, no committee to schedule around. The idea is still fresh when the thing goes live.",
    proof: "Two to three weeks is the norm. I'll tell you up front if yours isn't.",
  },
  {
    number: "02",
    kicker: "Craft",
    claim: "Hand-built, line by line.",
    detail:
      "Nothing here got dragged out of a template and recolored. Every page is drawn and coded from scratch, including this one.",
    proof: "This page is the sample. Scroll it, resize it, open it on your phone.",
  },
  {
    number: "03",
    kicker: "Partnership",
    claim: "You talk to the person who builds it.",
    detail:
      "There's no account manager in between, because there's nobody to hand you off to. The person you send feedback to is the person who opens the file and changes it.",
    proof: "My phone number is on this page. That's the whole escalation path.",
  },
];
