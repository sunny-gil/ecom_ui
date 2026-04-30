import { useState, useEffect, useCallback, useRef } from "react";
import Header from "../../components/layout/Header";
import { motion, AnimatePresence } from "framer-motion";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import Products from "../Products/Products";
import type { Variants } from "framer-motion";
import { apiService } from "../../api/apiService";
import type { SlideData } from "../../api/homeData";
import { HeroSkeleton } from "../../components/common/Skeleton";

import "./HeroSlider.css";

// ─── Slide Data ──────────────────────────────────────────────
// ─── Auto-slide interval ─────────────────────────────────────
const SLIDE_INTERVAL = 5000;

// ─── Animation Variants ──────────────────────────────────────

const leftVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 80 : -80,
    scale: 0.96,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeInOut",
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    scale: 0.96,
    transition: { duration: 0.45, ease: "easeInOut" },
  }),
};

const rightVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 120 : -120,
    rotateY: dir > 0 ? 20 : -20,
    scale: 0.85,
  }),
  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.75, ease: "easeInOut", delay: 0.1 },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -120 : 120,
    rotateY: dir > 0 ? -20 : 20,
    scale: 0.85,
    transition: { duration: 0.45, ease: "easeInOut" },
  }),
};

const childFadeUp: Variants = {
  enter: { opacity: 0, y: 28 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

// ─── Typewriter Hook ─────────────────────────────────────────
const useTypewriter = (text: string, speed = 32, startDelay = 500) => {
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayText("");
    indexRef.current = 0;

    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        setDisplayText(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(delayTimer);
  }, [text, speed, startDelay]);

  return displayText;
};

// ─── Auto-Progress Hook ───────────────────────────────────────
const useProgress = (slideId: number, interval: number) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const step = 50;
    const increment = (step / interval) * 100;
    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + increment, 100));
    }, step);
    return () => clearInterval(timer);
  }, [slideId, interval]);

  return progress;
};

// ─── Component ───────────────────────────────────────────────
const Home = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [loading, setLoading] = useState(true);
  const [[currentSlide, direction], setSlide] = useState<[number, number]>([0, 1]);

  useEffect(() => {
    apiService.getHomeSlides().then((data) => {
      setSlides(data);
      setLoading(false);
    });
  }, []);

  const paginate = useCallback((newDir: number) => {
    if (slides.length === 0) return;
    setSlide(([prev]) => {
      const next = (prev + newDir + slides.length) % slides.length;
      return [next, newDir];
    });
  }, [slides.length]);

  const goToSlide = useCallback((idx: number) => {
    setSlide(([prev]) => [idx, idx > prev ? 1 : -1]);
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => paginate(1), SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paginate]);

  const typedText = useTypewriter(slides[currentSlide]?.typewriterText || "", 32, 500);
  const progress = useProgress(currentSlide, SLIDE_INTERVAL);

  if (loading || slides.length === 0) {
    return (
      <>
        <Header />
        <HeroSkeleton />
        <Footer />
      </>
    );
  }

  const slide = slides[currentSlide];

  const cssVars = {
    "--slide-accent": slide.accent,
    "--slide-accent-alt": slide.accentAlt,
    "--slide-glow": slide.glow,
    "--orb-color-1": slide.orbColors[0],
    "--orb-color-2": slide.orbColors[1],
    "--orb-color-3": slide.orbColors[2],
  } as React.CSSProperties;

  return (
    <>
      <Header />

      {/* ═══ HERO SLIDER ═══ */}
      <section className="hero-slider" style={cssVars} id="hero-section">

        {/* Animated Background */}
        <div className={`hero-slider__bg ${slide.bgClass}`} />

        {/* Floating Orbs */}
        <div className="hero-slider__orb hero-slider__orb--1" />
        <div className="hero-slider__orb hero-slider__orb--2" />
        <div className="hero-slider__orb hero-slider__orb--3" />

        {/* Grid Overlay */}
        <div className="hero-slider__grid" />

        {/* Floating Particles */}
        <div className="hero-slider__particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="hero-slider__particle" />
          ))}
        </div>

        {/* ── Slide Counter (top-right) ── */}
        <div className="hero-slider__counter">
          <span className="hero-slider__counter-current">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span className="hero-slider__counter-sep" />
          <span className="hero-slider__counter-total">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* ── Auto-Progress Bar (top) ── */}
        <div className="hero-slider__progress-track">
          <motion.div
            className="hero-slider__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ─── Main Content ─── */}
        <div className="hero-slider__content">

          {/* LEFT — TEXT */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-${slide.id}`}
              className="hero-slider__left"
              variants={leftVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Badge */}
              <motion.div variants={childFadeUp} className="hero-slider__badge">
                <span className="hero-slider__badge-dot" />
                {slide.badge}
              </motion.div>

              {/* Main Title */}
              <motion.h1 variants={childFadeUp} className="hero-slider__title">
                {slide.title}
                <span className="hero-slider__title-highlight">
                  {slide.highlight}
                </span>
                {slide.titleEnd}
              </motion.h1>

              {/* Tagline — 3D float */}
              <motion.div variants={childFadeUp} className="hero-slider__tagline">
                {slide.tagline}
              </motion.div>

              {/* Feature Chips */}
              <motion.div variants={childFadeUp} className="hero-slider__chips">
                {slide.chips.map((chip, i) => (
                  <span key={i} className="hero-slider__chip">{chip}</span>
                ))}
              </motion.div>

              {/* Typewriter */}
              <motion.div variants={childFadeUp} className="hero-slider__typewriter">
                <span className="hero-slider__typewriter-text">{typedText}</span>
                <span className="hero-slider__typewriter-cursor">|</span>
              </motion.div>

              {/* Description */}
              <motion.p variants={childFadeUp} className="hero-slider__desc">
                {slide.desc}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={childFadeUp} className="hero-slider__cta">
                <button
                  className="hero-slider__btn-primary"
                  onClick={() => navigate("/products")}
                >
                  Shop Now
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  className="hero-slider__btn-secondary"
                  onClick={() => navigate("/about")}
                >
                  Explore More
                </button>
              </motion.div>

              {/* Stats Row */}
              <motion.div variants={childFadeUp} className="hero-slider__stats">
                {slide.stats.map((stat, idx) => (
                  <div key={idx} className="hero-slider__stat">
                    <span className="hero-slider__stat-value">{stat.value}</span>
                    <span className="hero-slider__stat-label">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT — IMAGE */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`img-${slide.id}`}
              className="hero-slider__right"
              variants={rightVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="hero-slider__img-wrapper">
                <div className="hero-slider__img-glow" />
                <div className="hero-slider__ring" />

                <div className="hero-slider__img-inner">
                  <img
                    src={slide.image}
                    alt={slide.badge}
                    className="hero-slider__img"
                  />
                </div>

                {slide.floatCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    className={`hero-slider__float-card ${idx === 0
                      ? "hero-slider__float-card--top-right"
                      : "hero-slider__float-card--bottom-left"
                      }`}
                    initial={{ opacity: 0, y: 24, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.85 }}
                    transition={{ delay: 0.5 + idx * 0.18, duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="hero-slider__float-card-icon">{card.icon}</div>
                    {card.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Arrows ─── */}
        <button
          className="hero-slider__arrow hero-slider__arrow--left"
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="hero-slider__arrow hero-slider__arrow--right"
          onClick={() => paginate(1)}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* ─── Dot Nav ─── */}
        <div className="hero-slider__nav">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              className={`hero-slider__dot ${idx === currentSlide ? "hero-slider__dot--active" : ""
                }`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ─── Scroll Down Indicator ─── */}
        <div className="hero-slider__scroll-hint">
          <div className="hero-slider__scroll-mouse">
            <div className="hero-slider__scroll-wheel" />
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      <Products isPreview={true} categoryLimit="true" />
      <Services isPreview={true} />
      <Testimonials isPreview={true} />
      <Footer />
    </>
  );
};

export default Home;