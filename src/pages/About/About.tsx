import { motion } from "framer-motion";
import aboutImg from "../../assets/2.jpg";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const About = () => {
  return (
    <>
    <Header />
    <section className="relative pt-[100px] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f1f8e9] to-white" />

      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-300/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Abhyudaya
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide natural Ayurvedic treatment focused on long-term healing
            for piles, fissure and fistula.
          </p>
        </motion.div>

        {/* ================= ABOUT CONTENT ================= */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="about"
              className="rounded-2xl shadow-2xl"
            />

            <div className="absolute -bottom-6 left-6 bg-white px-4 py-3 rounded-xl shadow">
              ⭐ Trusted by 500+ Patients
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our goal is to treat the root cause of diseases using Ayurveda,
              not just temporary relief. We focus on safe, natural and long-term healing.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With years of experience and patient trust, we deliver reliable and
              effective treatments.
            </p>
          </motion.div>
        </div>


        {/* ================= JOURNEY ================= */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Our Journey
          </h2>

          <div className="mt-10 space-y-6 max-w-3xl mx-auto">
            {[
              { year: "2015", text: "Clinic started with Ayurvedic vision." },
              { year: "2018", text: "100+ successful treatments completed." },
              { year: "2022", text: "Advanced Ayurvedic therapies introduced." },
              { year: "2025", text: "Trusted by 500+ patients." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-[var(--color-primary)] font-bold">
                  {item.year}
                </div>
                <div className="text-gray-600">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PROCESS ================= */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Our Treatment Process
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation",
                desc: "Complete diagnosis of your condition.",
              },
              {
                title: "Personalized Treatment",
                desc: "Customized Ayurvedic plan.",
              },
              {
                title: "Recovery",
                desc: "Continuous follow-up and healing.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow text-center hover:scale-105 transition"
              >
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= VALUES ================= */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              "Patient First",
              "Natural Healing",
              "Long-term Results",
            ].map((val, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white shadow rounded-lg text-gray-600"
              >
                ✔ {val}
              </div>
            ))}
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "500+", label: "Patients" },
            { num: "10+", label: "Years" },
            { num: "4.9★", label: "Rating" },
            { num: "100%", label: "Natural" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow"
            >
              <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                {stat.num}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
};

export default About;