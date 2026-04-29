import { motion } from "framer-motion";
import * as Icons from "lucide-react";

console.log(Icons);
const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#1b5e20]" />

      {/* Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-green-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-yellow-300/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-white">

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4"> <img
                      src="/logo.png"
                      alt="Logo"
                      className="h-15 sm:h-18 md:h-20 w-auto object-contain"
                    /></h2>
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
              <Icons.Phone size={16} /> +91 9876543210
            </li>

            <li className="flex items-center gap-2">
              <Icons.Mail size={16} /> info@abhyudaya.com
            </li>

            <li className="flex items-center gap-2">
              <Icons.MapPin size={16} /> Pune, India
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

          {/* <div className="flex gap-4">
            <div className="p-3 bg-white/10 rounded-xl hover:bg-white/20 cursor-pointer transition">
              <Icons.Facebook size={18} />
            </div>

            <div className="p-3 bg-white/10 rounded-xl hover:bg-white/20 cursor-pointer transition">
              <Icons.Instagram size={18} />
            </div>
          </div> */}
        </motion.div>

      </div>

      {/* Bottom bar */}
      <div className="relative z-10 text-center text-white/70 text-sm pb-6">
        © {new Date().getFullYear()} Abhyudaya Ayurveda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;