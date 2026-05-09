import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/apiService";
import { CardSkeleton } from "../../components/common/Skeleton";
type Props = {
  isPreview?: boolean;
};

const Services = ({ isPreview = false }: Props) => {
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getServices().then(data => {
      setServicesList(data);
      setLoading(false);
    });
  }, []);

  // On preview, we might just show first 3
  const visibleServices = isPreview ? servicesList.slice(0, 3) : servicesList;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      
      {/* Background soft glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest text-sm uppercase bg-green-50 dark:bg-green-900/20 px-4 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4 tracking-tight">
            Premium Lifestyle Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just sell premium products; we curate exceptional experiences to elevate your everyday living.
          </p>
        </div>


        {loading ? (
          <div className="py-20 w-full">
            <CardSkeleton count={6} />
          </div>
        ) : (
          <>
            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-zinc-800 transition-all duration-500 flex flex-col group cursor-pointer`}
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

          </>
        )}

      </div>
    </section>
  );
};

export default Services;