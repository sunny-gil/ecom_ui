import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, Bell, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();



  const menuRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "News", path: "/news" },
  ];

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-1">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-[var(--color-primary)] m-0"
          style={{ opacity: 1, transform: "none" }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-15 sm:h-18 md:h-20 w-auto object-contain"
          />
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition ${location.pathname === link.path
                ? "text-[var(--color-primary)]"
                : "text-gray-700 hover:text-[var(--color-primary)]"
                }`}
            >
              {link.name}

              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-primary)]"
                />
              )}
            </Link>
          ))}
        </nav>


        {/* Right side */}
        <div className="flex items-center gap-4">
          {!user && (
            <button
              onClick={() => navigate("/login")}
              className="text-[var(--color-primary)] font-medium"
            >
              Login
            </button>
          )}

          {/* Avatar */}
          <div className="relative" ref={profileRef}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center cursor-pointer shadow"
            >
              <User size={18} />
            </motion.div>

            {/* Dropdown */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-lg border overflow-hidden z-50"
                >
                  <ul>
                    <li className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                      <Bell size={16} /> Notifications
                    </li>
                    <li className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                      <ShoppingCart size={16} /> Cart
                    </li>
                    <li className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                      <User size={16} /> Profile
                    </li>
                    <li
                      onClick={() => {
                        logout();
                        navigate("/login");
                      }}
                      className="px-4 py-3 hover:bg-red-100 text-red-600 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setMenuOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-[var(--color-primary)]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;