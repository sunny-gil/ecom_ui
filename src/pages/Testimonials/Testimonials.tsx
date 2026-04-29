import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

type Props = {
  isPreview?: boolean;
};

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    text: "Best Ayurvedic treatment I have ever experienced.",
    image: "/assets/user1.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    text: "Very professional doctor and effective treatment.",
    image: "/assets/user2.jpg",
  },
  {
    id: 3,
    name: "Amit Singh",
    text: "Natural healing without surgery.",
    image: "/assets/user3.jpg",
  },
  {
    id: 4,
    name: "Sneha Patel",
    text: "Staff is very supportive and treatment works well.",
    image: "/assets/user4.jpg",
  },
  {
    id: 5,
    name: "Vikas Kumar",
    text: "Pain-free treatment and quick recovery.",
    image: "/assets/user5.jpg",
  },
  {
    id: 6,
    name: "Neha Jain",
    text: "Best clinic for Ayurvedic treatment.",
    image: "/assets/user6.jpg",
  },
];

export default function Testimonials({ isPreview = false }: Props) {
  const navigate = useNavigate();
  const controls = useAnimation();

  const visible = isPreview ? testimonials.slice(0, 6) : testimonials;

  // ▶ start animation
  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    });
  };

  // ⏸ pause animation
  const stopAnimation = () => {
    controls.stop();
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#f6fbf6] overflow-hidden">

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12">
          Patient Testimonials
        </h2>

        <div
          className="overflow-hidden"
          onMouseEnter={stopAnimation}
          onMouseLeave={startAnimation}
          onMouseDown={stopAnimation}      // 👈 PRESS HOLD
          onMouseUp={startAnimation}       // 👈 RELEASE
          onTouchStart={stopAnimation}     // 👈 MOBILE HOLD
          onTouchEnd={startAnimation}
        >

          <motion.div
            className="flex gap-6 w-max"
            animate={controls}
            onViewportEnter={startAnimation}
          >
            {[...visible, ...visible].map((t, i) => (
              <div
                key={i}
                className="min-w-[280px] bg-white p-6 rounded-2xl shadow-md"
              >
                <img
                  src={t.image}
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                />

                <h3 className="mt-4 font-semibold">
                  {t.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {t.text}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

        {isPreview && (
          <button
            onClick={() => navigate("/testimonials")}
            className="mt-10 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl"
          >
            View All Testimonials
          </button>
        )}

      </div>
    </section>
  );
}