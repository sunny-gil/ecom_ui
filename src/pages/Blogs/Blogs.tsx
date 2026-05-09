import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/apiService";
import type { Blog } from "../../api/blogsData";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { CardSkeleton } from "../../components/common/Skeleton";

export default function Blogs() {
  const navigate = useNavigate();
  const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getBlogs().then(data => {
      setVisibleBlogs(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50/30 to-white dark:from-slate-900 dark:to-slate-950">
      <Header />

      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-widest text-sm uppercase bg-green-50 dark:bg-green-900/20 px-4 py-1.5 rounded-full">
              Read & Learn
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-4 mb-4">
              Our Premium Journal
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
              Tips, recipes, and lifestyle guides crafted by industry experts.
            </p>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="py-20 w-full">
              <CardSkeleton count={6} />
            </div>
          ) : (
            <motion.div
              layout
              className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {visibleBlogs.map((blog) => (
                  <motion.div
                    layout
                    key={blog.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -8 }}
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                    className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 dark:border-slate-700 flex flex-col group"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        {blog.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors mb-2 leading-snug">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {blog.shortDesc}
                      </p>

                      <span className="mt-auto flex items-center text-green-600 dark:text-green-500 font-bold text-sm group-hover:text-green-800 dark:group-hover:text-green-400 transition">
                        Read Full Article
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}