import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { Sparkles, Leaf, Coffee, Droplet } from "lucide-react";

// Importing the 3 premium generated illustrations
import illustration1 from "../../assets/about_illustration.png";
import illustration2 from "../../assets/about_illustration_2.png";
import illustration3 from "../../assets/about_illustration_3.png";
import founderMale from "../../assets/founder_male.png";
import founderFemale from "../../assets/founder_female.png";

const illustrations = [illustration1, illustration2, illustration3];

// ─── 3D Tilt Card Component ──────────────────────────────────
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Cycle illustrations every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % illustrations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <section className="relative pt-24 overflow-hidden bg-gradient-to-b from-green-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-gray-900 dark:text-white">
        
        {/* Soft Background Orbs */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-200/30 dark:bg-green-500/10 blur-[120px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-amber-100/30 dark:bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
          
          {/* ================= HERO SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-green-700 dark:text-green-400 font-bold tracking-widest text-sm uppercase bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 px-6 py-2 rounded-full backdrop-blur-md"
            >
              ✦ Our Philosophy
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black mt-8 tracking-tighter leading-tight text-gray-900 dark:text-white">
              Elevating the Art of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-amber-600 to-green-700 dark:from-green-400 dark:via-amber-400 dark:to-green-500 animate-gradient">
                Everyday Living
              </span>
            </h1>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              We curate extraordinary everyday experiences—from the morning coffee that fuels you, to the skincare that nourishes you.
            </p>
          </motion.div>


          {/* ================= 3D IMAGE SECTION ================= */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            
            <TiltCard className="relative group cursor-pointer h-[550px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-amber-500 rounded-[30px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div 
                className="relative z-10 overflow-hidden rounded-[30px] border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-xl w-full h-[500px] flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIdx}
                    src={illustrations[currentIdx]}
                    alt="E-commerce Showcase"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="rounded-[20px] w-full h-full object-cover"
                    style={{ transform: "translateZ(30px)" }}
                  />
                </AnimatePresence>
                
                {/* Floating 3D tag */}
                <div 
                  className="absolute bottom-10 right-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-8 py-4 rounded-2xl border border-gray-100 dark:border-slate-800 z-20 shadow-xl"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <p className="text-green-700 dark:text-green-400 font-bold text-3xl tracking-tight">100%</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold tracking-wider">PURE SELECTION</p>
                </div>
              </div>

            </TiltCard>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Premium Brands. <br />Unrivaled Experience.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                Our e-commerce store was created for those who demand absolute quality. We bring carefully selected lifestyle goods under one premium roof.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                Whether it's single-origin coffee or clean beauty choices, every touchpoint is engineered for ultimate satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Premium Coffee",
                  "Organic Verified",
                  "Clean Cosmetics",
                  "Pure Hydration"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-3 bg-green-50/50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/40 transition-colors"
                  >
                    <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">Pillars of the Brand</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">Precision and care embedded within our DNA.</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Coffee className="w-8 h-8 text-amber-600" />, title: "Rich Taste", desc: "Expert selection." },
                { icon: <Leaf className="w-8 h-8 text-green-600" />, title: "Eco-Friendly", desc: "Green shipping." },
                { icon: <Sparkles className="w-8 h-8 text-pink-600" />, title: "Modern Design", desc: "Premium aesthetic." },
                { icon: <Droplet className="w-8 h-8 text-blue-600" />, title: "Deep Hydration", desc: "Purity springs." }
              ].map((pillar, i) => (
                <TiltCard key={i} className="cursor-pointer">
                  <div className="h-full p-8 bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-gray-100 dark:border-slate-700 rounded-[24px] text-center shadow-md hover:shadow-xl hover:bg-green-50/20 dark:hover:bg-green-900/20 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{pillar.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>

          </div>

          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">Meet Our Founders</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">The visionaries behind our premium lifestyle e-commerce store.</p>
            </div>


            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              
              {/* Founder 1 */}
              <TiltCard className="cursor-pointer">
                <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-[30px] border border-gray-100 dark:border-slate-700 shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-all duration-300">
                  <div className="w-48 h-48 rounded-[20px] overflow-hidden bg-gray-50 dark:bg-slate-900 flex-shrink-0 border border-gray-200 dark:border-slate-700">
                    <img src={founderMale} alt="Co-Founder & CEO" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-widest bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">
                      CEO & Co-Founder
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-2">Sunny Gill</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      "Our goal was simple: bring pure, uncompromising wellness products to people's doorsteps. We source quality, so you live beautifully."
                    </p>
                  </div>
                </div>
              </TiltCard>

              {/* Founder 2 */}
              <TiltCard className="cursor-pointer">
                <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-[30px] border border-gray-100 dark:border-slate-700 shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-all duration-300">
                  <div className="w-48 h-48 rounded-[20px] overflow-hidden bg-gray-50 dark:bg-slate-900 flex-shrink-0 border border-gray-200 dark:border-slate-700">
                    <img src={founderFemale} alt="Co-Founder & Creative Director" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm uppercase tracking-widest bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                      Creative Director
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-2">Rajkumari Jatt</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      "Design, experience, and clean formulas define our brand. Every product is a piece of curated luxury made for modern life."
                    </p>
                  </div>
                </div>
              </TiltCard>

            </div>

          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-800 to-green-900 rounded-[30px] px-10 py-16 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { num: "50K+", label: "Happy Customers" },
                { num: "150+", label: "Curated Skus" },
                { num: "4.95★", label: "User Reviews" },
                { num: "100%", label: "Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <motion.span 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2"
                  >
                    {stat.num}
                  </motion.span>
                  <span className="text-green-100 text-xs font-bold tracking-widest uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;