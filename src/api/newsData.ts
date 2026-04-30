import coffeeNews from "../assets/hero-coffee.png";
import coffeeAward from "../assets/product1.jpg";
import cosmeticNews from "../assets/hero-cosmetics.png";
import waterNews from "../assets/hero-water.png";
import founderNews from "../assets/founder_male.png";
import foodNews from "../assets/hero-food.png";

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  content: string;
  shortDesc: string;
  image: string;
  date: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "New Ethical Sourcing Breakthrough",
    category: "Corporate",
    shortDesc: "Partnering with premium organic estates.",
    content: "We are thrilled to announce our long-term exclusive partnership with sustainable high-altitude organic estates. This guarantees our customers only the cleanest ingredients, free from microplastics and pesticides.",
    image: coffeeNews,
    date: "April 29, 2026"
  },
  {
    id: "2",
    title: "Eco-Friendly Packaging Award",
    category: "Milestones",
    shortDesc: "Recognized for our zero-plastic design.",
    content: "Our lifestyle brand proudly received the 2026 Sustainable Design award. Every product now ships in completely biodegradable, plant-based materials.",
    image: coffeeAward,
    date: "April 22, 2026"
  },
  {
    id: "3",
    title: "Free Virtual Skincare Masterclass",
    category: "Events",
    shortDesc: "Expert consultants show how to glow naturally.",
    content: "Join us this weekend for an immersive virtual workshop outlining easy ways to lock in ultimate skin moisture using our eco-certified botanical routines.",
    image: cosmeticNews,
    date: "April 15, 2026"
  },
  {
    id: "4",
    title: "Pure Mountain Springs Supply Boost",
    category: "Distribution",
    shortDesc: "Expanding our healthy reach to 5 more metros.",
    content: "Due to high demand, our elite recovery water shipments have officially doubled. Fresh hydration packs now ship directly from local cold storage centers.",
    image: waterNews,
    date: "April 08, 2026"
  },
  {
    id: "5",
    title: "Founders Discuss the Clean-Living Future",
    category: "Interviews",
    shortDesc: "Sunny Gill and Rajkumari Jatt share brand philosophy.",
    content: "In a recent business segment, our founders explained why transparency and uncompromised purity are the main priorities moving the brand forward.",
    image: founderNews,
    date: "March 29, 2026"
  },
  {
    id: "6",
    title: "Fresh Seasonal Superfoods Arriving",
    category: "Releases",
    shortDesc: "Stock up on limited spring crops.",
    content: "Our newest harvest of premium organic seeds and extra virgin botanical extracts has cleared testing and is fully available on the online portal.",
    image: foodNews,
    date: "March 12, 2026"
  }
];
