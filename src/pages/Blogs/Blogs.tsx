import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const blogs = [
    {
        id: 1,
        title: "Ayurvedic Treatment for Piles",
        shortDesc: "Safe and natural piles treatment.",
        content:
            "Ayurvedic treatment for piles focuses on eliminating the root cause using herbal medicines, diet correction, and lifestyle changes. It provides long-term relief without surgery and helps prevent recurrence.",
        image: "/assets/blog1.jpg",
    },
    {
        id: 2,
        title: "How to Improve Digestion Naturally",
        shortDesc: "Boost digestion with Ayurveda.",
        content:
            "Digestive health can be improved through Ayurvedic herbs, proper meal timing, and mindful eating. Avoid processed food and include natural detox practices.",
        image: "/assets/blog2.jpg",
    },
    {
        id: 3,
        title: "Skin Care with Ayurveda",
        shortDesc: "Natural glowing skin tips.",
        content:
            "Ayurveda promotes detoxification, herbal pastes, and a balanced diet to achieve healthy glowing skin without harmful chemicals.",
        image: "/assets/blog3.jpg",
    },
    {
        id: 4,
        title: "Benefits of Herbal Medicine",
        shortDesc: "Why choose herbal treatments?",
        content:
            "Herbal medicines are natural, safe, and focus on root cause healing. They reduce side effects and improve overall health.",
        image: "/assets/blog4.jpg",
    },
    {
        id: 5,
        title: "Daily Ayurvedic Routine (Dinacharya)",
        shortDesc: "Healthy lifestyle habits.",
        content:
            "Dinacharya includes waking early, oil pulling, yoga, and a balanced diet to maintain physical and mental health.",
        image: "/assets/blog5.jpg",
    },
    {
        id: 6,
        title: "Yoga for Better Health",
        shortDesc: "Simple yoga for daily life.",
        content:
            "Yoga improves flexibility, reduces stress, and supports overall well-being when practiced regularly.",
        image: "/assets/blog6.jpg",
    },
    {
        id: 7,
        title: "Natural Remedies for Constipation",
        shortDesc: "Improve gut health naturally.",
        content:
            "Constipation can be treated using Ayurvedic herbs, hydration, and fiber-rich foods.",
        image: "/assets/blog7.jpg",
    },
    {
        id: 8,
        title: "Importance of Detox in Ayurveda",
        shortDesc: "Cleanse your body naturally.",
        content:
            "Detoxification removes toxins and improves digestion, immunity, and energy levels.",
        image: "/assets/blog8.jpg",
    },
    {
        id: 9,
        title: "How to Boost Immunity Naturally",
        shortDesc: "Strong immune system tips.",
        content:
            "Immunity can be improved through herbs, proper sleep, diet, and stress management.",
        image: "/assets/blog9.jpg",
    },
    {
        id: 10,
        title: "Ayurvedic Diet Guide",
        shortDesc: "Eat according to body type.",
        content:
            "Ayurvedic diet depends on your body type (dosha) and helps maintain balance and health.",
        image: "/assets/blog10.jpg",
    },
    {
        id: 11,
        title: "Stress Management with Ayurveda",
        shortDesc: "Reduce stress naturally.",
        content:
            "Meditation, breathing exercises, and herbs help in managing stress effectively.",
        image: "/assets/blog11.jpg",
    },
    {
        id: 12,
        title: "Hair Care Using Ayurveda",
        shortDesc: "Strong and healthy hair.",
        content:
            "Herbal oils and proper nutrition help prevent hair fall and improve scalp health.",
        image: "/assets/blog12.jpg",
    },
    {
        id: 13,
        title: "Natural Treatment for Acidity",
        shortDesc: "Control acidity naturally.",
        content:
            "Ayurvedic herbs and proper diet can help manage acidity and improve digestion.",
        image: "/assets/blog13.jpg",
    },
    {
        id: 14,
        title: "Benefits of Meditation",
        shortDesc: "Improve mental health.",
        content:
            "Meditation enhances focus, reduces stress, and improves emotional well-being.",
        image: "/assets/blog14.jpg",
    },
    {
        id: 15,
        title: "Healthy Sleep Routine",
        shortDesc: "Improve sleep naturally.",
        content:
            "Ayurveda suggests regular sleep timing, herbal drinks, and relaxation techniques for better sleep.",
        image: "/assets/blog15.jpg",
    },
];

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#f6fbf6]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Our Blogs
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Read health tips, Ayurvedic insights, and lifestyle guidance.
        </p>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/blogs/${blog.id}`)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
            >

              {/* Image */}
              <img
                src={blog.image}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-left">

                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {blog.shortDesc}
                </p>

                <span className="text-[var(--color-primary)] text-sm mt-3 inline-block">
                  Read More →
                </span>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}