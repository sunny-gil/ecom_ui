import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { newsData } from "../../api/newsData";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function News() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50/20 to-white text-gray-900">
      <Header />
      
      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-widest text-sm uppercase bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
              Company Updates
            </span>
            <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4">
              Latest News & Press
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Follow our journey of growth, sustainability, and uncompromising quality.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/news/${item.id}`)}
                className="group cursor-pointer bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2 block">
                    {item.date}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3 group-hover:text-green-700 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.shortDesc}
                  </p>

                  <div className="mt-auto flex items-center text-green-600 font-bold text-sm group-hover:text-green-800 transition">
                    Read Official Release 
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}