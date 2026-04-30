import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiService } from "../../api/apiService";
import type { Blog } from "../../api/blogsData";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Clock, Calendar, ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    apiService.getBlogById(Number(id)).then(data => {
      setBlog(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50/50">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Article Not Found</h2>
          <button
            onClick={() => navigate("/blogs")}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
          >
            Back to Journal
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
            Back to All Articles
          </button>

          <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-10">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-green-50 text-green-700 font-bold text-sm px-4 py-1.5 rounded-full shadow-sm">
                {blog.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1.5" />
                {blog.date}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1.5" />
                {blog.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              {blog.title}
            </h1>

            {/* Image */}
            <div className="h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-lg bg-gray-100 flex items-center justify-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-wrap font-medium">
              {blog.content}
            </p>

            {/* Premium CTA */}
            <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100/50 p-8 rounded-2xl text-center shadow-inner relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200/20 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                Elevate Your Routine
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto mb-6">
                Explore our ethically sourced products designed specifically for your premium lifestyle needs.
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