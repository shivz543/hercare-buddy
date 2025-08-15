import React, { useState, useEffect } from "react";
import FeatureSection from "./components/FeatureSection";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? saved === "true" : false; // default to light mode
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const colors = {
    primary: "#FF6B6B",
    secondary: "#A2D5C6",
    lightBg: "#FFE4E6", // Changed to soft coral pink background for light mode
    darkBg: "#1A202C",
    lightText: "#333333",
    darkText: "#E2E8F0",
    lightSecondaryText: "#555555",
    darkSecondaryText: "#A0AEC0",
    cardLight: "#FFFFFF",
    cardDark: "#2C3E50",
    hoverLight: "#FFF5F5",
    hoverDark: "#37475A",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const glowingEmojiStyle = {
    filter: `drop-shadow(0 0 4px ${colors.primary}) drop-shadow(0 0 8px ${colors.primary}80)`,
  };

  return (
    <div
      className={darkMode ? "text-white" : "text-gray-800"}
      style={{ backgroundColor: darkMode ? colors.darkBg : colors.lightBg }}
    >
      {/* Sidebar removed */}

      <div className="px-6 py-10 space-y-24"> {/* Removed ml-48 */}

        {/* Hero Section */}
        <section id="hero" className="text-center mt-12 py-10 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-rose-500 opacity-10 rounded-full blur-3xl -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          ></motion.div>

          <motion.span
            className="absolute top-10 left-10 text-5xl"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ color: colors.secondary }}
          >
            🌿
          </motion.span>

          <motion.span
            className="absolute top-20 right-10 text-5xl"
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ color: colors.secondary }}
          >
            🌸
          </motion.span>

          <motion.h1
            className="text-6xl font-extrabold mb-4 leading-tight"
            style={{ color: colors.primary }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HerCare Buddy
          </motion.h1>
          <motion.h2
            className="text-3xl font-semibold mb-6"
            style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Every Woman, Every Step of the Way.
          </motion.h2>
          <motion.p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your personalized guide to holistic well-being, designed for the unique journey of womanhood. From daily wellness tracking to navigating complex health concerns, HerCare Buddy is your dedicated companion.
          </motion.p>
          {/* Removed Download and Learn More buttons */}
          <motion.p
            className="text-md mt-8 italic"
            style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            "Self-care is not selfish. It's essential." <span className="inline-block animate-pulse-subtle" style={glowingEmojiStyle}>✨</span>
          </motion.p>
        </section>

        {/* Core Promise Section */}
        <section id="about" className="text-center py-16 rounded-2xl shadow-xl overflow-hidden relative"
          style={{
            backgroundColor: darkMode ? colors.cardDark : colors.cardLight,
            boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <motion.span
            className="absolute bottom-5 right-5 text-4xl opacity-70"
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 0.7, rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            viewport={{ once: true }}
            style={{ color: colors.secondary }}
          >
            🌀
          </motion.span>

          <motion.h2
            className="text-4xl font-bold mb-8"
            style={{ color: darkMode ? colors.darkText : colors.lightText }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Navigate Your Health Journey with Confidence and Clarity.
          </motion.h2>
          <motion.p
            className="text-lg max-w-5xl mx-auto mb-12 leading-relaxed"
            style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            In a world that often overlooks the nuances of women's health, HerCare Buddy stands as your dedicated partner. We provide accurate information, supportive communities, and personalized insights, all within the palm of your hand.
          </motion.p>
          <motion.div
            className="flex justify-center flex-wrap gap-12 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-6xl mb-3" style={{ color: colors.primary, ...glowingEmojiStyle }}>💡</span>
              <p className="text-xl font-semibold" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Personalized Insights</p>
            </motion.div>
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-6xl mb-3" style={{ color: colors.secondary, ...glowingEmojiStyle }}>🤝</span>
              <p className="text-xl font-semibold" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Supportive Community</p>
            </motion.div>
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-6xl mb-3" style={{ color: colors.primary, ...glowingEmojiStyle }}>📖</span>
              <p className="text-xl font-semibold" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Reliable Information</p>
            </motion.div>
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-6xl mb-3" style={{ color: colors.secondary, ...glowingEmojiStyle }}>🗓️</span>
              <p className="text-xl font-semibold" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Cycle & Fertility Tracking</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Feature Sections */}
        <section id="features" className="grid gap-16">
          <motion.h2
            className="text-4xl font-bold text-center mb-8"
            style={{ color: darkMode ? colors.darkText : colors.lightText }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Discover the Power of HerCare Buddy's Intelligent Features:
          </motion.h2>

          <FeatureSection
            title="Comprehensive Cycle & Fertility Tracker"
            description="Master Your Cycle. Empower Your Choices. Track your periods, predict ovulation, monitor fertility windows, and understand your hormonal fluctuations with unparalleled accuracy. Gain valuable insights into your body's rhythm, whether you're trying to conceive or simply understand yourself better. Your body, your blueprint."
            link="/tracker"
            darkMode={darkMode}
            colors={colors}
          />

          <FeatureSection
            title="AI-Powered Symptom Analyzer & Insights"
            description="Your Questions, Answered. Your Health, Understood. Feeling off? Our intuitive AI symptom checker helps you understand what's going on, offering potential explanations and suggesting when to seek professional advice. Get personalized insights based on your unique health profile, not generic information. No more guessing. Just knowing."
            link="/analyzer"
            darkMode={darkMode}
            colors={colors}
          />

          <FeatureSection
  title="Discussion Forum & Support Community"
  description="Join the conversation with fellow HerCare Buddy users. Share experiences, ask questions, and find support in a safe, moderated community designed to empower and connect women on their health journeys."
  link="/forum"
  darkMode={darkMode}
  colors={colors}
/>

          <FeatureSection
            title="AI Therapist & Doctor Support"
            description="Connect. Share. Thrive. Chat with your friendly mental health bot 24/7. For more personalized guidance, connect with real doctors for advice or consultation. Access a vast library of doctor-reviewed articles, evidence-based information, and expert advice on a wide range of women's health topics. Reliable information, always at your fingertips. Because every woman deserves a sisterhood."
            link="/doctor-support"
            darkMode={darkMode}
            colors={colors}
          />

        </section>

        {/* Testimonials/Success Stories */}
        <section id="testimonials" className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            style={{ color: darkMode ? colors.darkText : colors.lightText }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Hear From Our Empowered Users:
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-8 rounded-xl shadow-lg italic transition duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? colors.cardDark : colors.cardLight,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
              }}
              variants={itemVariants}
            >
              <p className="text-lg mb-4 leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>
                "HerCare Buddy has completely transformed how I understand my body. The cycle tracker is spot-on, and the health articles are incredibly insightful!"
              </p>
              <p className="font-semibold text-lg" style={{ color: colors.primary }}>- Priya S., 32</p>
            </motion.div>
            <motion.div
              className="p-8 rounded-xl shadow-lg italic transition duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? colors.cardDark : colors.cardLight,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
              }}
              variants={itemVariants}
            >
              <p className="text-lg mb-4 leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>
                "Finally, an app that truly understands women's health. The community forums have been a lifeline for me."
              </p>
              <p className="font-semibold text-lg" style={{ color: colors.primary }}>- Aisha K., 28</p>
            </motion.div>
            <motion.div
              className="p-8 rounded-xl shadow-lg italic transition duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? colors.cardDark : colors.cardLight,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
              }}
              variants={itemVariants}
            >
              <p className="text-lg mb-4 leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>
                "I love the personalized insights. It's like having a health coach in my pocket!"
              </p>
              <p className="font-semibold text-lg" style={{ color: colors.primary }}>- Deepa L., 45</p>
            </motion.div>
          </motion.div>
        </section>

      </div>

      {/* Floating Dark/Light Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: darkMode ? "#2C3E50" : "#FF6B6B",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          padding: "12px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
}
