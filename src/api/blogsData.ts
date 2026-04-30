import coffeeGuide from "../assets/hero-coffee.png";
import coffeeBenefits from "../assets/product1.jpg";
import coffeeBeans from "../assets/1.jpg";
import saladRecipe from "../assets/hero-food.png";
import farmToTable from "../assets/product2.jpg";
import skincareRoutine from "../assets/hero-cosmetics.png";
import skinOils from "../assets/product3.jpg";
import waterElectrolytes from "../assets/hero-water.png";

export interface Blog {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  content: string;
  image: string; // The imported image object
  date: string;
  readTime: string;
}

export const blogsData: Blog[] = [
  // Coffee Culture
  {
    id: "1",
    title: "The Perfect Pour-Over Guide",
    category: "Coffee Culture",
    shortDesc: "Master the art of brewing at home.",
    content: "Brewing the perfect pour-over coffee requires precision, patience, and high-quality beans. To start, grind your beans to a medium-coarse consistency. Use a water temperature between 90°C and 95°C. Wet the paper filter to remove papery taste, add the coffee, and pour a small amount of water to let it bloom for 30 seconds. Continue pouring in steady, concentric circles. The result? A exceptionally clean, highly nuanced cup that reveals the bean's true flavor notes.",
    image: coffeeGuide,
    date: "April 28, 2026",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Health Benefits of Dark Roast",
    category: "Coffee Culture",
    shortDesc: "More than just a caffeine boost.",
    content: "Dark roast coffee is not only deeply rich and satisfying, but it also packs a punch of health benefits. Studies show that dark roasts are high in antioxidants like glutathione, which helps fight cellular damage. They are also known to be easier on the stomach compared to light roasts because they contain a compound that prevents excess stomach acid buildup.",
    image: coffeeBenefits,
    date: "April 20, 2026",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Why Single Origin Beans Matter",
    category: "Coffee Culture",
    shortDesc: "Traceability and distinct flavor profiles.",
    content: "Single-origin coffee means that the beans come from one specific location—often a single farm or a cooperative in a single country. This provides complete traceability and highlights the distinct environmental factors (soil, altitude, climate) that shape the coffee's flavor. From the fruity notes of Ethiopia to the chocolatey body of Colombia, single-origin takes you on a global taste journey.",
    image: coffeeBeans,
    date: "March 15, 2026",
    readTime: "6 min read",
  },

  // Organic Food
  {
    id: "4",
    title: "5 Quick Superfood Salad Recipes",
    category: "Organic Food",
    shortDesc: "Wholesome, delicious, and easy to prep.",
    content: "Superfoods are nutrient powerhouses. Incorporating them into daily salads takes minutes but offers amazing vitality. Mix organic kale, roasted quinoa, blueberries, walnuts, and top with an olive oil-lemon dressing. These raw combinations improve digestion and energy immediately.",
    image: saladRecipe,
    date: "April 22, 2026",
    readTime: "3 min read",
  },
  {
    id: "5",
    title: "Farm-to-Table: Why Organic?",
    category: "Organic Food",
    shortDesc: "The truth about clean eating.",
    content: "Choosing organic produce reduces your exposure to artificial pesticides, herbicides, and toxic heavy metals. Organic farming prioritizes healthy soil systems, which results in food that is richer in essential vitamins and pure micronutrients.",
    image: farmToTable,
    date: "April 10, 2026",
    readTime: "5 min read",
  },

  // Luxury Beauty
  {
    id: "6",
    title: "Build a 10-Min Skincare Routine",
    category: "Luxury Beauty",
    shortDesc: "Simplicity meets ultimate hydration.",
    content: "You don't need a 12-step routine for glowing skin. Focus on cleansing gently, applying active Vitamin C serums in the morning, and sealing hydration with botanical moisturizers at night. Consistency transforms skin barrier health effortlessly.",
    image: skincareRoutine,
    date: "April 25, 2026",
    readTime: "4 min read",
  },
  {
    id: "7",
    title: "Botanical Oils for Glowing Skin",
    category: "Luxury Beauty",
    shortDesc: "Harnessing natural radiance.",
    content: "Pure plant oils like Squalane, Rosehip, and Jojoba mirror the skin's natural oils. They provide deep nourishment, soothe redness, and balance sebum production without leaving greasy residue.",
    image: skinOils,
    date: "March 28, 2026",
    readTime: "5 min read",
  },

  // Pure Hydration
  {
    id: "8",
    title: "The Power of Post-Workout Electrolytes",
    category: "Pure Hydration",
    shortDesc: "Rapid recovery made simple.",
    content: "Sweat removes crucial minerals from the body. Drinking pure water mixed with balanced electrolytes (magnesium, potassium, sodium) speeds up cellular recovery, stops cramping, and provides sustained stamina.",
    image: waterElectrolytes,
    date: "April 18, 2026",
    readTime: "3 min read",
  }
];
