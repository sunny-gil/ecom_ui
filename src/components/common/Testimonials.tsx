import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aman Varma",
    role: "Verified Buyer",
    comment: "The morning brew coffee kit literally upgraded my routine. The rich aroma and clean caffeine boost are incredible!",
    rating: 5,
  },
  {
    id: 2,
    name: "Shreya Ghoshal",
    role: "Skincare Enthusiast",
    comment: "The organic face oils are so lightweight yet deeply hydrating. I've noticed a natural glow within two weeks.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Fitness Coach",
    comment: "I order the pure hydration electrolyte packs every month. Best recovery drink without any sugary nonsense.",
    rating: 4,
  },
  {
    id: 4,
    name: "Pooja Hegde",
    role: "Home Chef",
    comment: "The organic quinoa and extra virgin olive oil taste fundamentally different from supermarket ones. Worth the premium.",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Sameer Joshi",
    role: "Corporate Executive",
    comment: "Ordered 50 luxury hampers for our stakeholders. Everyone loved the presentation and the pure lifestyle goods inside.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sneha Patil",
    role: "Eco Blogger",
    comment: "I appreciate the zero-emission cold shipping. The food arrives perfectly chilled and completely fresh every time.",
    rating: 4,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 3.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Calculate visible testimonials (3 at a time in large screen, 1 in mobile)
  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % total],
      testimonials[(currentIndex + 2) % total],
    ];
  };

  return (
    <section className="py-24 bg-green-950 text-white relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-bold tracking-widest text-sm uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            Customer Love
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
            Voices of Satisfaction
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Hear from our elite members who elevated their daily lives with our pure goods.
          </p>
        </div>

        {/* Carousel Container (Mouse events to pause/unpause) */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="relative cursor-pointer"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((test, index) => (
                <motion.div
                  key={`${test.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:bg-white/10 transition-colors"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 text-amber-400">
                      {Array.from({ length: Math.floor(test.rating) }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                      {test.rating % 1 !== 0 && (
                        <Star key="half" size={18} className="opacity-70" fill="currentColor" />
                      )}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                      "{test.comment}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-400 text-green-950 font-bold rounded-full flex items-center justify-center text-sm shadow-md">
                      {test.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base leading-none">
                        {test.name}
                      </h4>
                      <span className="text-gray-400 text-xs mt-1 block">
                        {test.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pause Indicator */}
          <div className="text-center mt-8 text-xs text-gray-400 tracking-wider">
            {isPaused ? "⏸ Auto-scroll Paused" : "▶ Hover to Pause & Read"}
          </div>
        </div>

      </div>
    </section>
  );
}
