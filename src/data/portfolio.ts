export interface PortfolioItem {
  name: string;
  category: string;
  image: string;
  tall?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    name: "Island Eats Restaurant",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Pacific Plumbing Co.",
    category: "Home Services",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop&q=80",
    tall: true,
  },
  {
    name: "Aloha Fitness Studio",
    category: "Health & Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Kailua Coffee House",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=500&fit=crop&q=80",
    tall: true,
  },
  {
    name: "Maui Landscaping",
    category: "Home Services",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "North Shore Auto",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=600&h=400&fit=crop&q=80",
  },
];
