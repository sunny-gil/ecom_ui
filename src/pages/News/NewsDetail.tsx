import { useParams, useNavigate } from "react-router-dom";
import { newsData } from "../../api/newsData";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { ArrowLeft, Calendar } from "lucide-react";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = newsData.find((n) => n.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Article Not Found</h2>
          <button 
            onClick={() => navigate("/news")} 
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
          >
            Back to Newsroom
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Header />
      
      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center text-gray-600 hover:text-green-700 font-bold transition group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Releases
          </button>

          <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-10">
            
            {/* Meta */}
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="bg-green-50 text-green-700 font-bold text-sm px-4 py-1.5 rounded-full shadow-sm">
                {item.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1.5" />
                {item.date}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              {item.title}
            </h1>

            {/* Image */}
            <div className="h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-lg bg-gray-50 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-wrap font-medium">
              {item.content}
            </p>

            {/* Premium CTA */}
            <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100/50 p-8 rounded-2xl text-center shadow-inner relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200/20 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                Elevate Your Everyday
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto mb-6">
                Ready to experience uncompromising purity? Explore our product portal.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Shop Our Collection
              </button>
            </div>

          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
}