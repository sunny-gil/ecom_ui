import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const news = [
    {
        id: 1,
        title: "New Ayurvedic Research Breakthrough",
        content:
            "Recent studies in Ayurveda have shown improvement in treating diseases...",
        image: "/assets/news1.jpg",
    },
    {
        id: 2,
        title: "Free Health Camp Organized",
        content:
            "Our clinic organized a free health camp offering consultations...",
        image: "/assets/news2.jpg",
    },
    {
        id: 3,
        title: "Award for Best Ayurvedic Clinic",
        content:
            "We are honored to receive the Best Ayurvedic Clinic award...",
        image: "/assets/news3.jpg",
    },
    {
        id: 4,
        title: "New Fistula Therapy Introduced",
        content:
            "New Ayurvedic therapy introduced for fistula treatment...",
        image: "/assets/news4.jpg",
    },
    {
        id: 5,
        title: "Diet Awareness Seminar",
        content:
            "Seminar conducted to educate people about diet importance...",
        image: "/assets/news5.jpg",
    },
    {
        id: 6,
        title: "Patient Recovery Success",
        content:
            "Patients recovered naturally with Ayurvedic treatments...",
        image: "/assets/news6.jpg",
    },
    {
        id: 7,
        title: "Ayurveda Day Celebration",
        content:
            "Celebrated Ayurveda Day with awareness sessions...",
        image: "/assets/news7.jpg",
    },
    {
        id: 8,
        title: "New Branch Opening",
        content:
            "We are opening a new branch to expand services...",
        image: "/assets/news8.jpg",
    },
    {
        id: 9,
        title: "Online Consultation Launched",
        content:
            "Patients can now consult doctors online...",
        image: "/assets/news9.jpg",
    },
    {
        id: 10,
        title: "Special Discount Announced",
        content:
            "Limited time discounts available on treatments...",
        image: "/assets/news10.jpg",
    },
    {
        id: 11,
        title: "Herbal Awareness Drive",
        content:
            "Campaign conducted to promote herbal medicine...",
        image: "/assets/news11.jpg",
    },
    {
        id: 12,
        title: "Yoga & Wellness Workshop",
        content:
            "Workshop conducted on yoga and healthy lifestyle...",
        image: "/assets/news12.jpg",
    },
];

export default function News() {
    const navigate = useNavigate();

    return (
        <section className="relative py-20 px-6 bg-gradient-to-b from-white to-green-50">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Latest News & Updates
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Stay updated with our latest treatments, events and achievements
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {news.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => navigate(`/news/${item.id}`)}
                            className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <span className="text-xs text-green-600 font-medium">
                                    Health News
                                </span>

                                <h3 className="text-xl font-semibold mt-2 text-gray-900 group-hover:text-green-600 transition">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 mt-2">
                                    {item.content}
                                </p>

                                <div className="mt-4 text-green-600 font-medium text-sm">
                                    Read Full Article →
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}