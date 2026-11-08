export interface FaqItem {
  question: string;
  answer: string;
}

// Answers lead with the answer: skimmers and AI answer engines both take the first sentence.
// Faq.tsx builds the FAQPage JSON-LD from this same list, so markup and visible text stay matched.
export const faqItems: FaqItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "Two to three weeks for a focused marketing site, counted from the day I have your copy and photos. Bigger builds and custom AI take longer. You'll get real dates before we start.",
  },
  {
    question: "What does it cost, and how do you price?",
    answer:
      "A fixed price per project, never hourly. Most small business sites land in the low to mid four figures. Ecommerce and custom AI cost more. Tell me what you need and I'll send an honest quote.",
  },
  {
    question: "Do I own the site, and can I edit it myself?",
    answer:
      "Yes. The code, domain, and content are yours. Most sites come with a simple editor for text and photos, or I can handle updates. No subscription you're stuck in.",
  },
  {
    question: "You use AI. Does that mean my site will look generic?",
    answer:
      "No. I decide the layout, structure, and words for your business. The AI works behind the scenes on drafts and repetitive tasks. Everything you see is reviewed by me.",
  },
  {
    question: "What if I just need a website, not AI?",
    answer:
      "Then that's what we build. I add AI only when it saves you real time or money.",
  },
  {
    question: "Will Google, and AI tools like ChatGPT, actually find my site?",
    answer:
      "Yes. Every site ships with a sitemap, FAQ markup AI tools can read, and a robots.txt that lets AI crawlers in. For local businesses, I'll also tell you straight whether your Google Business Profile needs work.",
  },
];
