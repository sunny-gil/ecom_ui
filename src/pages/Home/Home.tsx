import Header from "../../components/layout/Header";
import { motion } from "framer-motion";
import Hero3D from "../../components/common/Hero3D";
import heroImg from "../../assets/hero.png";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import Products from "../Products/Products";

const Home = () => {
     const navigate = useNavigate(); // 🔥 YEH LINE MISSING THI
    return (
        <>
            <Header />

            <section className="relative w-full overflow-hidden pt-[80px]">

                {/* 3D Background */}
                <div className="absolute inset-0 opacity-20 hidden lg:block">
                    <Hero3D />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-[2px]" />

                {/* Glow */}
                <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-300/20 blur-3xl rounded-full" />
                <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-200/20 blur-3xl rounded-full" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24">

                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                                Ayurvedic Treatment for{" "}
                                <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                                    Piles & Digestive Health
                                </span>
                            </h1>

                            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl">
                                Safe, natural and long-term healing for piles, fissure and fistula
                                without surgery.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate("/book-appointment")}
                                    className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl shadow-lg hover:scale-105 transition"
                                >
                                    Book Appointment
                                </button>

                                <button className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-xl hover:bg-green-50">
                                    Learn More
                                </button>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
                                <div>✔ 100% Natural</div>
                                <div>✔ No Surgery</div>
                                <div>✔ Expert Doctors</div>
                            </div>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="flex justify-center relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-3 shadow-2xl"
                            >
                                <motion.img
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    src={heroImg}
                                    alt="Ayurveda"
                                    className="rounded-2xl w-[80%] sm:w-[70%] md:w-[100%] max-w-[420px]"
                                />

                                {/* reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl" />
                            </motion.div>

                            <div className="absolute -bottom-4 left-4 bg-white px-4 py-2 rounded-xl shadow text-sm">
                                ⭐ 4.9 Rating
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
         <Products isPreview={true} />
         <Services isPreview={true} />
            <Testimonials />
            <Footer />
        </>

    );
};

export default Home;