import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { apiService } from "../../api/apiService";
import type { Product } from "../../api/productsData";
import { useCart } from "../../context/CartContext";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { DetailSkeleton } from "../../components/common/Skeleton";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"description" | "usage" | "precautions" | "storage">("description");
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    Promise.all([
      apiService.getProductById(id!),
      apiService.getProducts()
    ]).then(([productData, allProducts]) => {
      setProduct(productData);
      if (productData) {
        setRelatedProducts(
          allProducts
            .filter((p: Product) => p.category === productData.category && p.id !== productData.id)
            .slice(0, 3)
        );
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <DetailSkeleton />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Product Not Found</h2>
            <button
              onClick={() => navigate("/products")}
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Back to Products
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/products")}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 mb-8 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </button>

          <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Product Image Section */}
              <div className="bg-green-50 dark:bg-slate-900/50 p-10 flex items-center justify-center relative">
                <span className="absolute top-6 left-6 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide shadow-md">
                  {product.category}
                </span>
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                />
              </div>

              {/* Product Info Section */}
              <div className="p-10 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>

                  {/* Rating & Reviews */}
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 ml-2 text-sm">({product.reviews} reviews)</span>
                  </div>

                  <p className="text-3xl font-extrabold text-green-700 dark:text-green-500 mb-6">₹{product.price}</p>

                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {product.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <button
                      onClick={() => product && addToCart(product)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => navigate("/book-appointment")}
                      className="flex-1 bg-white dark:bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 py-4 rounded-xl font-bold text-lg transition-all"
                    >
                      Consult Doctor
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="border-t border-gray-100 dark:border-slate-700 p-10 bg-white dark:bg-slate-800/50">
              <div className="flex flex-wrap gap-4 border-b border-gray-200 dark:border-slate-700 pb-4 mb-8">
                {['description', 'usage', 'precautions', 'storage'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`pb-4 px-2 text-lg font-medium capitalize border-b-2 transition-colors ${activeTab === tab ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
                      }`}
                    style={{ marginBottom: '-17px' }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed min-h-[150px]"
              >
                {activeTab === "description" && <p>{product.longDesc}</p>}
                {activeTab === "usage" && <p>{product.usage}</p>}
                {activeTab === "precautions" && (
                  <ul className="list-disc pl-5 space-y-2">
                    {product.precautions.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                )}
                {activeTab === "storage" && <p>{product.storage}</p>}
              </motion.div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Related Products</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProducts.map((rp, i) => (
                  <motion.div
                    key={rp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => navigate(`/products/${rp.id}`)}
                    className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2 group border border-gray-100 dark:border-slate-700"
                  >
                    <div className="h-48 overflow-hidden bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
                      <img
                        src={rp.image}
                        alt={rp.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{rp.name}</h3>
                      <p className="text-green-600 dark:text-green-500 font-bold text-lg">₹{rp.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>

  );
};

export default ProductDetail;
