import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";
import { apiService } from "../../api/apiService";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { CardSkeleton } from "../../components/common/Skeleton";

type Props = {
  isPreview?: boolean;
};

export default function Testimonials({ isPreview = false }: Props) {
  const controls = useAnimation();
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getTestimonials().then(data => {
      setTestimonials(data);
      setLoading(false);
    });
  }, []);

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
    <section className="py-24 px-6 bg-gradient-to-b from-white to-green-50/30 dark:from-slate-950 dark:to-slate-900 overflow-hidden text-gray-900 dark:text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,163,74,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="text-green-600 font-bold tracking-widest text-sm uppercase bg-green-50 dark:bg-green-900/20 px-4 py-1.5 rounded-full border border-green-100 dark:border-green-800/30">
          Wall of Love
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg mb-16">
          Hold down to pause and read the outstanding reviews from our community.
        </p>

        {loading ? (
          <div className="py-20 w-full">
            <CardSkeleton count={3} />
          </div>
        ) : (
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
                  className="w-[320px] md:w-[360px] bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:border-green-100 dark:hover:border-green-800 transition-all duration-300 flex flex-col justify-between"
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
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-medium mb-6 italic text-left">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto border-t border-gray-50 dark:border-slate-700 pt-4 text-left">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-extrabold rounded-full flex items-center justify-center shadow-inner">
                      {t.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-950 dark:text-white text-base leading-none">
                        {t.name}
                      </h3>
                      <span className="text-gray-400 dark:text-gray-500 text-xs mt-1 block">
                        Verified Enthusiast
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}
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