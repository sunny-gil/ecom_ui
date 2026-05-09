import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#1b5e20] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]" />

      {/* Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-green-400/20 dark:bg-green-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-yellow-300/20 dark:bg-amber-500/10 blur-3xl rounded-full" />


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-white">

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-15 sm:h-18 md:h-20 w-auto object-contain"
            />
          </h2>
          <p className="text-sm text-white/80">
            Experience better living with thoughtfully selected premium products—designed for quality and convenience.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@lifestyle-ecom.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Pune, India
            </li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 8, backgroundColor: "#1877F2" }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </motion.a>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: -8, background: "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)" }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </motion.a>

            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 8, backgroundColor: "#1DA1F2" }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Bottom bar */}
      <div className="relative z-10 text-center text-white/70 text-sm pb-6">
        © {new Date().getFullYear()} Lifestyle & Wellness E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 