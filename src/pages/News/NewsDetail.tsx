import { useParams, useNavigate } from "react-router-dom";

const news = [
  {
    id: 1,
    title: "New Ayurvedic Research Breakthrough",
    content:
      "Recent studies in Ayurveda have shown significant improvement in treating chronic diseases using herbal formulations and lifestyle changes.",
    image: "/assets/news1.jpg",
  },
  {
    id: 2,
    title: "Free Health Camp Organized",
    content:
      "Our clinic organized a free health camp offering consultations and awareness programs.",
    image: "/assets/news2.jpg",
  },
  {
    id: 3,
    title: "Award for Best Ayurvedic Clinic",
    content:
      "We are honored to receive the Best Ayurvedic Clinic award.",
    image: "/assets/news3.jpg",
  },
  {
    id: 4,
    title: "New Fistula Therapy Introduced",
    content:
      "New Ayurvedic therapy introduced for fistula treatment.",
    image: "/assets/news4.jpg",
  },
  {
    id: 5,
    title: "Diet Awareness Seminar",
    content:
      "Seminar conducted to educate people about diet importance.",
    image: "/assets/news5.jpg",
  },
  {
    id: 6,
    title: "Patient Recovery Success",
    content:
      "Patients recovered naturally with Ayurvedic treatments.",
    image: "/assets/news6.jpg",
  },
  {
    id: 7,
    title: "Ayurveda Day Celebration",
    content:
      "Celebrated Ayurveda Day with awareness sessions.",
    image: "/assets/news7.jpg",
  },
  {
    id: 8,
    title: "New Branch Opening",
    content:
      "We are opening a new branch to expand services.",
    image: "/assets/news8.jpg",
  },
  {
    id: 9,
    title: "Online Consultation Launched",
    content:
      "Patients can now consult doctors online.",
    image: "/assets/news9.jpg",
  },
  {
    id: 10,
    title: "Special Discount Announced",
    content:
      "Limited time discounts available on treatments.",
    image: "/assets/news10.jpg",
  },
  {
    id: 11,
    title: "Herbal Awareness Drive",
    content:
      "Campaign conducted to promote herbal medicine.",
    image: "/assets/news11.jpg",
  },
  {
    id: 12,
    title: "Yoga & Wellness Workshop",
    content:
      "Workshop conducted on yoga and healthy lifestyle.",
    image: "/assets/news12.jpg",
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = news.find((n) => n.id === Number(id));

  if (!item) return <div className="text-center py-20">Not Found</div>;

  return (
    <section className="bg-gradient-to-b from-white to-[#f6fbf6] py-16 px-6">

      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-[var(--color-primary)] font-medium"
        >
          ← Back
        </button>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={item.image}
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-6">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">
            {item.title}
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 bg-[var(--color-primary)] mt-3 rounded"></div>

          {/* Content */}
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            {item.content}
          </p>

        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#f6fbf6] p-6 rounded-2xl text-center shadow-sm">
          <h3 className="text-xl font-semibold">
            Need expert advice?
          </h3>

          <p className="text-gray-600 mt-2">
            Book a consultation with our Ayurvedic specialist
          </p>

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