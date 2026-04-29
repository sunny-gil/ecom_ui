import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

type Props = {
  isPreview?: boolean;
};

const testimonials = [
  {
    id: 1,
    name: "Sunny Gill",
    text: "The morning brew coffee kit literally upgraded my routine. The rich aroma and clean caffeine boost are incredible!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajkumari Jatt",
    text: "The organic face oils are so lightweight yet deeply hydrating. I've noticed a natural glow within two weeks.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    text: "I order the pure hydration electrolyte packs every month. Best recovery drink without any sugary nonsense.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Pooja Hegde",
    text: "The organic quinoa and extra virgin olive oil taste fundamentally different from supermarket ones. Highly recommend.",
    rating: 4,
  },
  {
    id: 5,
    name: "Sameer Joshi",
    text: "Ordered 50 luxury hampers for our corporate partners. Everyone loved the premium presentation and high-end goods.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sneha Patil",
    text: "I appreciate the eco-friendly cold shipping. The food arrives perfectly chilled and completely fresh every time.",
    rating: 4,
  },
  {
    id: 7,
    name: "Karan Johar",
    text: "Unrivaled premium quality. From the clean cosmetics to the mountain water, this e-commerce brand is top-tier.",
    rating: 5,
  }
];

export default function Testimonials({ isPreview = false }: Props) {
  const controls = useAnimation();

  const visible = testimonials;

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  const content = (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-green-50/30 overflow-hidden text-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,163,74,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="text-green-600 font-bold tracking-widest text-sm uppercase bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
          Wall of Love
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg mb-16">
          Hold down to pause and read the outstanding reviews from our community.
        </p>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={stopAnimation}
          onMouseLeave={startAnimation}
          onMouseDown={stopAnimation}
          onMouseUp={startAnimation}
          onTouchStart={stopAnimation}
          onTouchEnd={startAnimation}
        >
          <motion.div
            className="flex gap-8 w-max"
            animate={controls}
            onViewportEnter={startAnimation}
          >
            {[...visible, ...visible].map((t, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[360px] bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:border-green-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {Array.from({ length: Math.floor(t.rating) }).map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" />
                    ))}
                    {t.rating % 1 !== 0 && (
                      <Star key="half" size={18} className="opacity-70" fill="currentColor" />
                    )}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed font-medium mb-6 italic text-left">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-4 text-left">
                  <div className="w-12 h-12 bg-green-100 text-green-700 font-extrabold rounded-full flex items-center justify-center shadow-inner">
                    {t.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-950 text-base leading-none">
                      {t.name}
                    </h3>
                    <span className="text-gray-400 text-xs mt-1 block">
                      Verified Enthusiast
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

  if (isPreview) {
    return content;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">{content}</main>
      <Footer />
    </div>
  );
}