import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, Bell, ShoppingCart, Package, Moon, Sun, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [themeOpen, setThemeOpen] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        themeRef.current &&
        !themeRef.current.contains(event.target as Node)
      ) {
        setThemeOpen(false);
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
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "py-2 glass shadow-lg" 
            : "py-4 bg-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold text-[var(--color-primary)] m-0"
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
                  : "text-gray-700 dark:text-gray-300 hover:text-[var(--color-primary)]"
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
            
            {/* Theme Toggle */}
            <div className="relative" ref={themeRef}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setThemeOpen(!themeOpen)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm"
              >
                {resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>

              <AnimatePresence>
                {themeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-40 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden z-50 p-2"
                  >
                    <button 
                      onClick={() => { setTheme("light"); setThemeOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${theme === "light" ? "bg-green-50 text-green-700 font-bold" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800"}`}
                    >
                      <Sun size={16} /> Light
                    </button>
                    <button 
                      onClick={() => { setTheme("dark"); setThemeOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${theme === "dark" ? "bg-green-50 text-green-700 font-bold" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800"}`}
                    >
                      <Moon size={16} /> Dark
                    </button>
                    <button 
                      onClick={() => { setTheme("system"); setThemeOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${theme === "system" ? "bg-green-50 text-green-700 font-bold" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800"}`}
                    >
                      <Monitor size={16} /> System
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
                onClick={() => {
                  if (user) setProfileOpen(!profileOpen);
                  else navigate("/login");
                }}
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
                    className="absolute right-0 mt-3 w-52 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-gray-100 dark:border-slate-800 overflow-hidden z-50"
                  >
                    <ul>
                      <li 
                        onClick={() => { setProfileOpen(false); navigate("/notifications"); }}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer text-gray-700 dark:text-gray-300"
                      >
                        <Bell size={16} /> Notifications
                      </li>
                      <li 
                        onClick={() => { setProfileOpen(false); navigate("/cart"); }}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer text-gray-700 dark:text-gray-300"
                      >
                        <ShoppingCart size={16} /> Cart
                      </li>
                      <li 
                        onClick={() => { setProfileOpen(false); navigate("/orders"); }}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer text-gray-700 dark:text-gray-300"
                      >
                        <Package size={16} /> My Orders
                      </li>
                      <li 
                        onClick={() => { setProfileOpen(false); navigate("/profile"); }}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer text-gray-700 dark:text-gray-300"
                      >
                        <User size={16} /> Profile
                      </li>
                      <li
                        onClick={() => {
                          logout();
                          navigate("/login");
                        }}
                        className="px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 cursor-pointer"
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
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </button>

          </div>
        </div>
      </header>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[60]"
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
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 shadow-2xl z-[70] p-6"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-300">
                <X />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-[var(--color-primary)] font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>

  );
};

export default Header;