export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, your goals, and what you need. Free, no obligation.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "We create a custom website tailored to your brand. You review it and we refine until it's perfect.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Your site goes live with your domain, SEO, and everything configured. Ready for customers.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We maintain, update, and optimize your site month after month so it keeps working for you.",
  },
];
