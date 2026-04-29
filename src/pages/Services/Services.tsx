import { motion } from "framer-motion";
import {
  Leaf,
  Activity,
  HeartPulse,
  Droplets,
  Wind,
  Zap,
  Shield,
  Smile,
  Stethoscope,
  Flower,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  isPreview?: boolean;
};

const services = [
  {
    id: 1,
    icon: <Leaf size={28} />,
    title: "Piles Treatment",
    shortDesc: "Safe Ayurvedic treatment without surgery.",
    longDesc:
      "Our Ayurvedic piles treatment focuses on root-cause healing using herbal medicines, diet correction, and lifestyle improvements for long-term relief.",
    image: "/assets/piles.jpg",
  },
  {
    id: 2,
    icon: <Activity size={28} />,
    title: "Fissure Care",
    shortDesc: "Natural healing with minimal pain.",
    longDesc:
      "Advanced herbal solutions to heal fissure naturally and pain-free with faster recovery and comfort.",
    image: "/assets/fissure.jpg",
  },
  {
    id: 3,
    icon: <HeartPulse size={28} />,
    title: "Fistula Therapy",
    shortDesc: "Long-term Ayurvedic healing.",
    longDesc:
      "Our fistula therapy uses traditional Ayurvedic methods combined with modern care to ensure complete healing and prevent recurrence.",
    image: "/assets/fistula.jpg",
  },
  {
    id: 4,
    icon: <Droplets size={28} />,
    title: "Digestive Care",
    shortDesc: "Improve digestion naturally.",
    longDesc:
      "Treat acidity, constipation, and digestion issues with Ayurvedic medicines and diet correction.",
    image: "/assets/digestive.jpg",
  },
  {
    id: 5,
    icon: <Wind size={28} />,
    title: "Gas Relief",
    shortDesc: "Relief from gas & bloating.",
    longDesc:
      "Natural herbal treatment to reduce gas, bloating, and improve gut health long-term.",
    image: "/assets/gas.jpg",
  },
  {
    id: 6,
    icon: <Zap size={28} />,
    title: "Pain Management",
    shortDesc: "Natural pain relief therapy.",
    longDesc:
      "Treat joint and muscle pain with Ayurvedic oils, therapies, and herbal medicine.",
    image: "/assets/pain.jpg",
  },
  {
    id: 7,
    icon: <Shield size={28} />,
    title: "Immunity Boost",
    shortDesc: "Strengthen your immunity.",
    longDesc:
      "Boost immunity naturally with Ayurvedic herbs and lifestyle guidance.",
    image: "/assets/immunity.jpg",
  },
  {
    id: 8,
    icon: <Smile size={28} />,
    title: "Skin Care",
    shortDesc: "Healthy glowing skin.",
    longDesc:
      "Treat acne, pigmentation, and skin issues with natural Ayurvedic care.",
    image: "/assets/skin.jpg",
  },
  {
    id: 9,
    icon: <Stethoscope size={28} />,
    title: "Consultation",
    shortDesc: "Expert doctor advice.",
    longDesc:
      "Get personalized Ayurvedic consultation and treatment plans.",
    image: "/assets/consultation.jpg",
  },
  {
    id: 10,
    icon: <Flower size={28} />,
    title: "Lifestyle Therapy",
    shortDesc: "Holistic wellness guidance.",
    longDesc:
      "Improve daily habits, diet, and routine for long-term wellness.",
    image: "/assets/lifestyle.jpg",
  },
];

const Services = ({ isPreview = false }: Props) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12">Our Treatments</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--color-primary)] text-white mb-4 mx-auto">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold">{service.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mt-2">
                {isPreview ? service.shortDesc : service.longDesc}
              </p>

              {/* IMAGE ONLY ON SERVICE PAGE */}
              {!isPreview && (
                <img
                  src={service.image}
                  className="w-full h-40 object-cover rounded-lg mt-4"
                />
              )}
            </motion.div>
          ))}

        </div>

        {/* BUTTON ONLY ON HOME */}
        {isPreview && (
          <button
            onClick={() => navigate("/services")}
            className="mt-10 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl"
          >
            View All Services
          </button>
        )}

      </div>
    </section>
  );
};

export default Services;