import { useParams, useNavigate } from "react-router-dom";

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

export default function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) return <div className="text-center py-20">Not Found</div>;

    return (
        <section className="py-20 px-6 bg-white">

            <div className="max-w-4xl mx-auto">

                {/* Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-[var(--color-primary)] font-medium"
                >
                    ← Back
                </button>

                {/* Image */}
                <img
                    src={blog.image}
                    className="w-full h-64 object-cover rounded-2xl shadow-md"
                />

                {/* Title */}
                <h1 className="mt-6 text-3xl font-bold text-gray-900">
                    {blog.title}
                </h1>

                {/* Content */}
                <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                    {blog.content}
                </p>

                {/* CTA */}
                <div className="mt-10 bg-[#f6fbf6] p-6 rounded-2xl text-center shadow-sm">
                    <h3 className="text-xl font-semibold">
                        Need Consultation?
                    </h3>

                    <button
                        onClick={() => navigate("/book-appointment")}
                        className="mt-4 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl"
                    >
                        Book Appointment
                    </button>
                </div>

            </div>
        </section>
    );
}