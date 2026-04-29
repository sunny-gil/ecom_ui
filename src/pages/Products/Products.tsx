import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
  isPreview?: boolean;
};

const products = [
  {
    id: 1,
    name: "Piles Care Kit",
    shortDesc: "Relief without surgery.",
    longDesc:
      "Complete Ayurvedic treatment kit for piles including herbal medicine and lifestyle guidance.",
    price: 999,
    tags: ["Doctor Recommended", "Herbal"],
    image: "/assets/product1.jpg",
  },
  {
    id: 2,
    name: "Digestive Powder",
    shortDesc: "Improve digestion.",
    longDesc:
      "Natural digestive powder that reduces acidity and improves gut health.",
    price: 499,
    tags: ["Daily Use", "Safe"],
    image: "/assets/product2.jpg",
  },
  {
    id: 3,
    name: "Skin Glow Pack",
    shortDesc: "Healthy glowing skin.",
    longDesc:
      "Ayurvedic herbs that detox skin and improve natural glow.",
    price: 799,
    tags: ["Skin Care"],
    image: "/assets/product3.jpg",
  },
];

const Products = ({ isPreview = false }: Props) => {
  const navigate = useNavigate();

  const visibleProducts = isPreview ? products.slice(0, 3) : products;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Explore All Products</h2>
          <p className="text-gray-600 mt-2">
            Browse through a wide range of categories tailored for your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {visibleProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group border"
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  className="w-full h-52 object-cover group-hover:scale-105 transition"
                />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                  Ayurvedic
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {isPreview ? product.shortDesc : product.longDesc}
                </p>

                {!isPreview && (
                  <>
                    {/* Price */}
                    <p className="mt-3 text-lg font-bold text-green-700">
                      ₹{product.price}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {product.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-green-100 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-5 flex gap-3">

                      {/* Buy */}
                      <button className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:scale-[1.02] transition">
                        Buy Now
                      </button>

                      {/* Consult */}
                      <button
                        onClick={() => navigate("/book-appointment")}
                        className="flex-1 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
                      >
                        Consult
                      </button>

                    </div>
                  </>
                )}
              </div>

            </motion.div>
          ))}

        </div>

        {/* Home button */}
        {isPreview && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/products")}
              className="px-8 py-3 bg-green-600 text-white rounded-xl"
            >
              View All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;