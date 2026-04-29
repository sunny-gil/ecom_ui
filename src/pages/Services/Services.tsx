import { motion } from "framer-motion";
import {
  Coffee,
  Sparkles,
  Droplet,
  Gift,
  Utensils,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Importing images for premium look
import coffeeImg from "../../assets/hero-coffee.png";
import foodImg from "../../assets/hero-food.png";
import cosmeticsImg from "../../assets/hero-cosmetics.png";
import waterImg from "../../assets/hero-water.png";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";

type Props = {
  isPreview?: boolean;
};

const servicesList = [
  {
    id: 1,
    icon: <Utensils size={32} />,
    title: "Personalized Nutrition Planning",
    shortDesc: "Custom diet plans from expert nutritionists.",
    longDesc:
      "Get custom diet and meal plans tailored to your goals using our farm-fresh organic produce and superfoods.",
    image: foodImg,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    id: 2,
    icon: <Sparkles size={32} />,
    title: "Skin & Beauty Consultation",
    shortDesc: "Find the perfect skincare routine.",
    longDesc:
      "Enjoy a 1-on-1 virtual consultation with beauty experts to build your perfect luxury skincare and makeup regimen.",
    image: cosmeticsImg,
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    id: 3,
    icon: <Coffee size={32} />,
    title: "Master Barista Workshops",
    shortDesc: "Learn the art of brewing the perfect coffee.",
    longDesc:
      "Master latte art, grinding techniques, and manual brewing methods like Pour-Over and French Press with our master roasters.",
    image: coffeeImg,
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    id: 4,
    icon: <Droplet size={32} />,
    title: "Hydration & Detox Coaching",
    shortDesc: "Optimize your wellness and hydration.",
    longDesc:
      "Work with holistic coaches to clean your gut, improve your hydration strategy, and feel energized 24/7.",
    image: waterImg,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: 5,
    icon: <Gift size={32} />,
    title: "Bespoke Gift Hamper Styling",
    shortDesc: "Tailor-made gifts for any occasion.",
    longDesc:
      "Curate the ultimate corporate gifts, wedding favors, or birthday baskets with customized packaging and premium goodies.",
    image: img1,
    gradient: "from-purple-500/10 to-violet-500/10",
  },
  {
    id: 6,
    icon: <Truck size={32} />,
    title: "Eco-Friendly Express Delivery",
    shortDesc: "Zero-emission cold-chain delivery.",
    longDesc:
      "We guarantee absolute freshness with our ultra-fast, cold-controlled shipping powered by green energy.",
    image: img2,
    gradient: "from-teal-500/10 to-green-500/10",
  },
];

const Services = ({ isPreview = false }: Props) => {
  const navigate = useNavigate();

  // On preview, we might just show first 3
  const visibleServices = isPreview ? servicesList.slice(0, 3) : servicesList;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Background soft glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest text-sm uppercase bg-green-50 px-4 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 tracking-tight">
            Premium Lifestyle Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We don't just sell premium products; we curate exceptional experiences to elevate your everyday living.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group`}
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-md text-green-700">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {isPreview ? service.shortDesc : service.longDesc}
                </p>
                
                <div className="mt-auto">
                  <button
                    onClick={() => navigate("/services")}
                    className="flex items-center text-green-600 font-bold hover:text-green-800 transition"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BUTTON ONLY ON HOME */}
        {isPreview && (
          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/services")}
              className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              View All Services
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;