export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different, so we provide custom quotes based on your needs. Reach out for a free consultation and we'll give you a clear, honest price — no hidden fees.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites launch within 1-2 weeks from the time we have all your information. Larger projects may take a bit longer, but we'll always give you a clear timeline upfront.",
  },
  {
    question: "Do I need to provide content and images?",
    answer:
      "It helps, but it's not required. We can write professional copy for your business and source high-quality images. Just tell us about your business and we'll handle the rest.",
  },
  {
    question: "Will my website work on phones?",
    answer:
      "Absolutely. Every website we build is mobile-first — meaning it's designed for phones and tablets first, then scales up beautifully to desktop. Over 60% of web traffic is mobile, so this is non-negotiable for us.",
  },
  {
    question: "What's included in monthly maintenance?",
    answer:
      "Hosting, SSL security, content updates (text, images, hours changes), uptime monitoring, performance optimization, and ongoing SEO improvements. Think of us as your website team on retainer.",
  },
  {
    question: "Can you help me show up on Google?",
    answer:
      "Yes — SEO is built into every site we create. We optimize for local search so that when someone Googles your type of business in your area, you show up. We also help set up and optimize your Google Business Profile.",
  },
];
