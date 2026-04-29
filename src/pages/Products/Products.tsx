import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../api/productsData";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

type Props = {
  isPreview?: boolean;
  categoryLimit?: string;
};

const Products = ({ isPreview = false, categoryLimit }: Props) => {
  const navigate = useNavigate();
  const categories = ["All", ...Array.from(new Set(productsData.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  let visibleProducts = productsData;
  
  if (categoryLimit) {
    const categoryGroups: { [key: string]: typeof productsData } = {};
    productsData.forEach(p => {
      if (!categoryGroups[p.category]) categoryGroups[p.category] = [];
      if (categoryGroups[p.category].length < 1) {
        categoryGroups[p.category].push(p);
      }
    });
    visibleProducts = Object.values(categoryGroups).flat();
  } else if (isPreview) {
    visibleProducts = productsData.slice(0, 4);
  } else {
    visibleProducts = activeCategory === "All" 
      ? productsData 
      : productsData.filter((p) => p.category === activeCategory);
  }

  const mainContent = (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            {isPreview ? "Our Premium Range" : "Explore All Products"}
          </h2>
          <p className="text-gray-600 mt-2">
            Browse through a wide range of categories tailored for your needs.
          </p>
        </div>

        {!isPreview && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-green-600 text-white shadow-md scale-105"
                    : "bg-white text-gray-600 hover:bg-green-100 border border-gray-200 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <motion.div 
          layout
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {visibleProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/products/${product.id}`)}
                className="bg-white rounded-2xl shadow-md overflow-hidden group border border-gray-100 cursor-pointer flex flex-col"
              >
                <div className="relative h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mt-1 mb-4 line-clamp-2 min-h-[40px]">
                    {product.shortDesc}
                  </p>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-xl font-bold text-green-700">
                        ₹{product.price}
                      </p>
                      <div className="flex items-center text-sm font-medium text-gray-600">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.rating}
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                      className="w-full py-2 bg-green-50 text-green-700 font-semibold rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {isPreview && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/products")}
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 hover:-translate-y-1 transition-all"
            >
              Explore Products
            </button>
          </div>
        )}
      </div>
    </section>
  );

  if (isPreview) {
    return mainContent;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {mainContent}
      </main>
      <Footer />
    </div>
  );
};

export default Products;