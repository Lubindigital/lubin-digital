export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "About two to three weeks for a focused marketing site, counting from the day I have your copy, photos, and brand details. Week one is design and structure. Week two is building. Whatever's left goes to revisions and launch. Bigger builds and anything with custom AI run longer, and you'll get real dates with milestones before we start, not a shrug and \"a few weeks.\"",
  },
  {
    question: "What does it cost, and how do you price?",
    answer:
      "Fixed price per project, never hourly. You know the number before we begin and it doesn't move unless the scope does. A typical small business site lands in the low to mid four figures. Ecommerce and custom AI cost more, depending on what we're actually building. Tell me what you need and roughly what you're working with, and I'll send back an honest quote. If your budget and the project don't match, I'll say so instead of stretching one to fit the other.",
  },
  {
    question: "Do I own the site, and can I edit it myself?",
    answer:
      "Yes, it's yours. The code, the domain, the content, none of it is locked to me. For most sites I set up a simple editor so you can change text, swap photos, and add a page without touching code or paying me for ten minutes of work. If you'd rather I handle updates, I'll do that too. It's your call, not a subscription you're stuck in.",
  },
  {
    question: "You use AI. Does that mean my site will look generic?",
    answer:
      "Fair thing to worry about, and the answer is no, because of where the AI actually sits. I don't type a prompt into a generator and hand you what comes out. The layout, the structure, and the words get decided on purpose for your business. The AI does the work behind the scenes: first drafts, automating email and marketing, chewing through repetitive tasks. What you see is custom and reviewed by a person, and that person is me. If anything ever feels templated, that's a bug and I'll fix it.",
  },
  {
    question: "What if I just need a website, not AI?",
    answer:
      "Then that's what we build. Plenty of my clients want a clean, fast, well made site and nothing else, and that's a completely reasonable thing to want. I add AI when it saves you real time or real money, and I leave it out when it doesn't. A good website is reason enough to work together.",
  },
  {
    question: "How do we work together, and what's the process?",
    answer:
      "It starts with a short conversation about your business and where the work piles up. No charge, no pressure. Then I send a fixed quote and a timeline. Once you're in, I design, you review, and we go back and forth until it's right. You'll always know what I'm working on and what comes next. Tahoe Teas is a good example: it started as one email flow replacing Klaviyo and turned into an AI system that drafts email, blog posts, and social tied to Shopify. The rhythm is the same whether the project is simple or complicated.",
  },
  {
    question: "Will Google — and AI tools like ChatGPT — actually find my site?",
    answer:
      "Yes. Search is splitting in two: some people still Google you, but a growing number ask ChatGPT or Perplexity and never see a list of links at all. If your site isn't built for that second group, you don't exist to them, no matter how good the site looks. Every site I build ships with the basics most small business sites skip: a sitemap, FAQ markup search engines and AI tools can read directly, and a robots.txt that lets those crawlers in instead of locking them out by default. That part is just how I build a site. Your Google Business Profile is the other half of it, and for a local business it's what people see before they ever reach your website. That's its own piece of work, and I'll tell you straight whether yours needs any.",
  },
];
