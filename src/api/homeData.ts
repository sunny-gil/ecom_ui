import heroCoffee from "../assets/hero-coffee.png";
import heroFood from "../assets/hero-food.png";
import heroCosmetics from "../assets/hero-cosmetics.png";
import heroWater from "../assets/hero-water.png";

export interface SlideData {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  titleEnd: string;
  tagline: string;
  typewriterText: string;
  desc: string;
  chips: string[];
  image: string;
  bgClass: string;
  accent: string;
  accentAlt: string;
  glow: string;
  orbColors: [string, string, string];
  floatCards: { icon: string; text: string }[];
  stats: { value: string; label: string }[];
}

export const slides: SlideData[] = [
  {
    id: 0,
    badge: "✦ Premium Coffee",
    title: "Craft Your Perfect ",
    highlight: "Coffee Experience",
    titleEnd: "",
    tagline: "☕ Artisan Roasted · Ethically Sourced · Brewed with Passion",
    typewriterText:
      "Handcrafted from the finest Arabica beans — roasted to perfection, brewed with love ☕",
    desc: "Discover artisanal roasts from world-renowned plantations. Every cup tells a story of passion, flavor, and the finest hand-picked beans.",
    chips: ["Single Origin", "Dark Roast", "Cold Brew", "Espresso"],
    image: heroCoffee,
    bgClass: "hero-slider__bg--coffee",
    accent: "#e6a34f",
    accentAlt: "#f0c878",
    glow: "rgba(230, 163, 79, 0.35)",
    orbColors: ["#c87533", "#e6a34f", "#fff8e8"],
    floatCards: [
      { icon: "☕", text: "100% Arabica" },
      { icon: "⭐", text: "4.9 Rating" },
    ],
    stats: [
      { value: "50+", label: "Varieties" },
      { value: "12K+", label: "Customers" },
      { value: "4.9★", label: "Rating" },
    ],
  },
  {
    id: 1,
    badge: "✦ Organic Food",
    title: "Fresh & Organic ",
    highlight: "Food Delivered",
    titleEnd: " Daily",
    tagline: "🥦 Farm to Table · Zero Preservatives · Pure Nutrition",
    typewriterText:
      "Farm-fresh organic produce delivered to your doorstep — zero preservatives, pure nutrition 🥦",
    desc: "Farm-to-table freshness with zero preservatives. Nourish your body with nature's finest organic produce and gourmet meal kits.",
    chips: ["Gluten Free", "Vegan", "Non-GMO", "Seasonal"],
    image: heroFood,
    bgClass: "hero-slider__bg--food",
    accent: "#4caf50",
    accentAlt: "#81c784",
    glow: "rgba(76, 175, 80, 0.35)",
    orbColors: ["#2e7d32", "#66bb6a", "#e8f5e9"],
    floatCards: [
      { icon: "🥬", text: "100% Organic" },
      { icon: "🚚", text: "Free Delivery" },
    ],
    stats: [
      { value: "200+", label: "Products" },
      { value: "25K+", label: "Orders" },
      { value: "99%", label: "Fresh Rate" },
    ],
  },
  {
    id: 2,
    badge: "✦ Luxury Cosmetics",
    title: "Unveil Your ",
    highlight: "Natural Glow",
    titleEnd: "",
    tagline: "✨ Rare Botanicals · Cruelty Free · Science Backed",
    typewriterText:
      "Luxury skincare crafted with rare botanicals — unveil your most radiant self ✨",
    desc: "Premium skincare and beauty products crafted with rare botanicals. Experience the art of self-care with science-backed formulations.",
    chips: ["Cruelty Free", "Vegan", "Dermatologist Tested", "Natural"],
    image: heroCosmetics,
    bgClass: "hero-slider__bg--cosmetics",
    accent: "#e91e9c",
    accentAlt: "#f48fb1",
    glow: "rgba(233, 30, 156, 0.35)",
    orbColors: ["#ad1457", "#f06292", "#fce4ec"],
    floatCards: [
      { icon: "💄", text: "Cruelty Free" },
      { icon: "✨", text: "Bestseller" },
    ],
    stats: [
      { value: "80+", label: "Products" },
      { value: "15K+", label: "Reviews" },
      { value: "4.8★", label: "Rating" },
    ],
  },
  {
    id: 3,
    badge: "✦ Pure Hydration",
    title: "Crystal Pure ",
    highlight: "Mineral Water",
    titleEnd: "",
    tagline: "💧 Mountain Springs · pH Balanced · Essential Minerals",
    typewriterText:
      "Sourced from pristine mountain springs — pure hydration enriched with essential minerals 💧",
    desc: "Sourced from pristine mountain springs. Every drop is enriched with essential minerals for optimal health and unmatched purity.",
    chips: ["pH 7.4", "Alkaline", "BPA Free", "Zero Calories"],
    image: heroWater,
    bgClass: "hero-slider__bg--water",
    accent: "#29b6f6",
    accentAlt: "#81d4fa",
    glow: "rgba(41, 182, 246, 0.35)",
    orbColors: ["#0277bd", "#4fc3f7", "#e1f5fe"],
    floatCards: [
      { icon: "💧", text: "pH Balanced" },
      { icon: "🏔️", text: "Mountain Source" },
    ],
    stats: [
      { value: "100%", label: "Natural" },
      { value: "50M+", label: "Bottles Sold" },
      { value: "4.9★", label: "Rating" },
    ],
  },
];
