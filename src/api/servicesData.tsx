import {
  Coffee,
  Sparkles,
  Droplet,
  Gift,
  Utensils,
  Truck,
} from "lucide-react";

import coffeeImg from "../assets/hero-coffee.png";
import foodImg from "../assets/hero-food.png";
import cosmeticsImg from "../assets/hero-cosmetics.png";
import waterImg from "../assets/hero-water.png";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";

export const servicesList = [
  {
    id: "1",
    icon: <Utensils size={32} />,
    title: "Personalized Nutrition Planning",
    shortDesc: "Custom diet plans from expert nutritionists.",
    longDesc:
      "Get custom diet and meal plans tailored to your goals using our farm-fresh organic produce and superfoods.",
    image: foodImg,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    id: "2",
    icon: <Sparkles size={32} />,
    title: "Skin & Beauty Consultation",
    shortDesc: "Find the perfect skincare routine.",
    longDesc:
      "Enjoy a 1-on-1 virtual consultation with beauty experts to build your perfect luxury skincare and makeup regimen.",
    image: cosmeticsImg,
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    id: "3",
    icon: <Coffee size={32} />,
    title: "Master Barista Workshops",
    shortDesc: "Learn the art of brewing the perfect coffee.",
    longDesc:
      "Master latte art, grinding techniques, and manual brewing methods like Pour-Over and French Press with our master roasters.",
    image: coffeeImg,
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    id: "4",
    icon: <Droplet size={32} />,
    title: "Hydration & Detox Coaching",
    shortDesc: "Optimize your wellness and hydration.",
    longDesc:
      "Work with holistic coaches to clean your gut, improve your hydration strategy, and feel energized 24/7.",
    image: waterImg,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: "5",
    icon: <Gift size={32} />,
    title: "Bespoke Gift Hamper Styling",
    shortDesc: "Tailor-made gifts for any occasion.",
    longDesc:
      "Curate the ultimate corporate gifts, wedding favors, or birthday baskets with customized packaging and premium goodies.",
    image: img1,
    gradient: "from-purple-500/10 to-violet-500/10",
  },
  {
    id: "6",
    icon: <Truck size={32} />,
    title: "Eco-Friendly Express Delivery",
    shortDesc: "Zero-emission cold-chain delivery.",
    longDesc:
      "We guarantee absolute freshness with our ultra-fast, cold-controlled shipping powered by green energy.",
    image: img2,
    gradient: "from-teal-500/10 to-green-500/10",
  },
];
