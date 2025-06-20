import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import FeatureSection from "./components/FeatureSection";
import { motion } from "framer-motion";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const colors = {
    primary: "#FF6B6B", // Soft Coral
    secondary: "#A2D5C6", // Muted Sage Green
    lightBg: "#FDFDFD", // Very light cream for backgrounds
    darkBg: "#1A202C", // Deep, soft dark blue/gray for dark mode backgrounds
    lightText: "#333333", // Dark charcoal for light mode text
    darkText: "#E2E8F0", // Soft white for dark mode text
    lightSecondaryText: "#555555", // Slightly lighter gray for secondary text
    darkSecondaryText: "#A0AEC0", // Light gray for dark mode secondary text
    cardLight: "#FFFFFF", // White for light mode cards
    cardDark: "#2C3E50", // Slightly lighter dark background for dark mode cards
    hoverLight: "#FFF5F5", // Very light pink for light mode hover
    hoverDark: "#37475A", // Slightly lighter dark background for dark mode hover
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

  // Custom glow effect for emojis
  const glowingEmojiStyle = {
    filter: `drop-shadow(0 0 4px ${colors.primary}) drop-shadow(0 0 8px ${colors.primary}80)`,
    // For dark mode, you might want a different glow color or intensity
    // filter: darkMode ? `drop-shadow(0 0 4px #A2D5C6) drop-shadow(0 0 8px #A2D5C680)` : `drop-shadow(0 0 4px ${colors.primary}) drop-shadow(0 0 8px ${colors.primary}80)`
  };

  return (
    <div
      className={darkMode ? "text-white" : "text-gray-800"}
      style={{ backgroundColor: darkMode ? colors.darkBg : colors.lightBg }}
    >
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="ml-48 px-6 py-10 space-y-24">

        {/* Hero Section */}
        <section id="hero" className="text-center mt-12 py-10 relative overflow-hidden">
          {/* Subtle background graphic for hero section */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-rose-500 opacity-10 rounded-full blur-3xl -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          ></motion.div>

          {/* Animated Sticker/Doodle 1 - top left */}
          <motion.span
            className="absolute top-10 left-10 text-5xl"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ color: colors.secondary }} // Use secondary color for doodles
          >
            🌿
          </motion.span>
          {/* Animated Sticker/Doodle 2 - top right */}
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
          <motion.div
            className="mt-10 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#features"
              className="font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundColor: colors.primary,
                color: colors.cardLight,
                boxShadow: `0 8px 16px -4px ${colors.primary}50`,
              }}
            >
              Download HerCare Buddy Now
            </a>
            <a
              href="#why-us"
              className="font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                borderColor: colors.primary,
                borderWidth: '2px',
                color: colors.primary,
                backgroundColor: 'transparent',
              }}
            >
              Learn More
            </a>
          </motion.div>
          <motion.p
            className="text-md mt-8 italic"
            style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            "Self-care is not selfish. It's essential." <span className="inline-block animate-pulse-subtle" style={glowingEmojiStyle}>✨</span> {/* Glowing emoji */}
          </motion.p>
        </section>

        {/* --- */}

        {/* Core Promise Section */}
        <section id="about"
          className="text-center py-16 rounded-2xl shadow-xl overflow-hidden relative" // Added relative for absolute positioning
          style={{
            backgroundColor: darkMode ? colors.cardDark : colors.cardLight,
            boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          {/* Small Doodle/Animated element - Bottom right */}
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
              <span className="text-6xl mb-3" style={{ color: colors.primary, ...glowingEmojiStyle }}>💡</span> {/* Glowing emoji */}
              <p className="text-xl font-semibold" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Personalized Insights</p>
            </motion.div>
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-6xl mb-3" style={{ color: colors.secondary, ...glowingEmojiStyle }}>🤝</span> {/* Glowing emoji */}
              <p className="text-xl font-semibold" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Supportive Community</p>
            </motion.div>
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-6xl mb-3" style={{ color: colors.primary, ...glowingEmojiStyle }}>📖</span> {/* Glowing emoji */}
              <p className="text-xl font-semibold" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Reliable Information</p>
            </motion.div>
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-6xl mb-3" style={{ color: colors.secondary, ...glowingEmojiStyle }}>🗓️</span> {/* Glowing emoji */}
              <p className="text-xl font-semibold" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Cycle & Fertility Tracking</p>
            </motion.div>
          </motion.div>
        </section>

        {/* --- */}

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

          {/* FeatureSection already has its own animation */}
          <FeatureSection
            title="Comprehensive Cycle & Fertility Tracker"
            emoji="🌸"
            description="Master Your Cycle. Empower Your Choices. Track your periods, predict ovulation, monitor fertility windows, and understand your hormonal fluctuations with unparalleled accuracy. Gain valuable insights into your body's rhythm, whether you're trying to conceive or simply understand yourself better. Your body, your blueprint."
            link="/tracker"
            darkMode={darkMode}
            colors={colors}
          />

          <FeatureSection
            title="AI-Powered Symptom Analyzer & Insights"
            emoji="🔎"
            description="Your Questions, Answered. Your Health, Understood. Feeling off? Our intuitive AI symptom checker helps you understand what's going on, offering potential explanations and suggesting when to seek professional advice. Get personalized insights based on your unique health profile, not generic information. No more guessing. Just knowing."
            link="/analyzer"
            darkMode={darkMode}
            colors={colors}
          />

          <FeatureSection
            title="Mood Board & Mental Wellness Tools"
            emoji="🧘‍♀️"
            description="Nurture Your Mind, Body, and Soul. Track and visualize your emotional well-being daily. From guided meditations and mindfulness exercises to mood trackers and personalized self-care routines, HerCare Buddy helps you prioritize your mental and emotional well-being, reducing stress and fostering inner peace. Your peace, our priority."
            darkMode={darkMode}
            colors={colors}
          />

          <FeatureSection
            title="AI Therapist & Doctor Support"
            emoji="💬"
            description="Connect. Share. Thrive. Chat with your friendly mental health bot 24/7. For more personalized guidance, connect with real doctors for advice or consultation. Access a vast library of doctor-reviewed articles, evidence-based information, and expert advice on a wide range of women's health topics. Reliable information, always at your fingertips. Because every woman deserves a sisterhood."
            darkMode={darkMode}
            colors={colors}
          />

          <FeatureSection
            title="Personalized Health Board"
            emoji="🍎"
            description="Knowledge is Power. Especially When It's Accurate. Get recommended food and exercises tailored to your unique needs and health goals. Our curated health library provides insights into nutrition, fitness, and overall well-being, helping you make informed choices for a healthier lifestyle."
            darkMode={darkMode}
            colors={colors}
          />

        </section>

        {/* --- */}

        {/* The HerCare Buddy Difference */}
        <section id="why-us"
          className="text-center py-16 rounded-2xl shadow-xl overflow-hidden relative" // Added relative
          style={{
            backgroundColor: darkMode ? colors.cardDark : colors.cardLight,
            boxShadow: darkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          {/* Animated Sticker/Doodle - top left */}
          <motion.span
            className="absolute top-8 left-8 text-6xl opacity-60"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ color: colors.secondary }}
          >
            💖
          </motion.span>
          {/* Animated Sticker/Doodle - bottom right */}
          <motion.span
            className="absolute bottom-8 right-8 text-6xl opacity-60"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ color: colors.primary }}
          >
            🌸
          </motion.span>

          <motion.h2
            className="text-4xl font-bold mb-8"
            style={{ color: darkMode ? colors.darkText : colors.lightText }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why Choose HerCare Buddy? <span className="inline-block animate-bounce-custom" style={glowingEmojiStyle}>💖</span> {/* Small bounce with glow */}
          </motion.h2>
          <motion.p
            className="text-lg max-w-5xl mx-auto mb-12 leading-relaxed"
            style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We understand that women's health is intricate and often underserved. HerCare Buddy is built on principles of:
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center p-8 rounded-xl shadow-md transition duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? colors.darkBg : colors.lightBg,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
              }}
              variants={itemVariants}
            >
              <span className="text-5xl mb-4" style={{ color: colors.primary, ...glowingEmojiStyle }}>💞</span>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Empathy & Understanding</h3>
              <p className="text-md leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>We recognize the unique challenges and triumphs of womanhood.</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-8 rounded-xl shadow-md transition duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? colors.darkBg : colors.lightBg,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
              }}
              variants={itemVariants}
            >
              <span className="text-5xl mb-4" style={{ color: colors.secondary, ...glowingEmojiStyle }}>🔬</span>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Scientific Accuracy</h3>
              <p className="text-md leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>All our information is meticulously researched and validated by medical professionals.</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-8 rounded-xl shadow-md transition duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? colors.darkBg : colors.lightBg,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
              }}
              variants={itemVariants}
            >
              <span className="text-5xl mb-4" style={{ color: colors.primary, ...glowingEmojiStyle }}>🔒</span>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Privacy & Security</h3>
              <p className="text-md leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>Your health data is sacred. We employ the highest standards of encryption and privacy protection.</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-8 rounded-xl shadow-md transition duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? colors.darkBg : colors.lightBg,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
              }}
              variants={itemVariants}
            >
              <span className="text-5xl mb-4" style={{ color: colors.secondary, ...glowingEmojiStyle }}>✨</span>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: darkMode ? colors.darkText : colors.lightText }}>User-Centric Design</h3>
              <p className="text-md leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>An intuitive, beautiful interface designed to make managing your health effortless.</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center p-8 rounded-xl shadow-md transition duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? colors.darkBg : colors.lightBg,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
              }}
              variants={itemVariants}
            >
              <span className="text-5xl mb-4" style={{ color: colors.primary, ...glowingEmojiStyle }}>🚀</span>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: darkMode ? colors.darkText : colors.lightText }}>Constant Innovation</h3>
              <p className="text-md leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>We're always evolving, adding new features and insights to serve you better.</p>
            </motion.div>
          </motion.div>
          <motion.p
            className="text-md mt-10 italic"
            style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            "The future of women's health is here."
          </motion.p>
        </section>

        {/* --- */}

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
              <p className="text-lg mb-4 leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>"HerCare Buddy has completely transformed how I understand my body. The cycle tracker is spot-on, and the health articles are incredibly insightful!"</p>
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
              <p className="text-lg mb-4 leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>"Finally, an app that truly understands women's health. The community forums have been a lifeline for me."</p>
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
              <p className="text-lg mb-4 leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>"I love the personalized insights. It's like having a health coach in my pocket!"</p>
              <p className="font-semibold text-lg" style={{ color: colors.primary }}>- Deepa L., 45</p>
            </motion.div>
          </motion.div>
        </section>

        {/* --- */}

        {/* Final Call to Action */}
        <section id="download"
          className="text-center py-20 rounded-2xl shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: colors.primary,
            boxShadow: `0 15px 30px -8px ${colors.primary}60`,
          }}
        >
          {/* Floating glowing emojis/stickers */}
          <motion.span
            className="absolute top-1/4 left-1/4 text-4xl opacity-50"
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: -50, opacity: 0.8 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={glowingEmojiStyle}
          >
            💖
          </motion.span>
          <motion.span
            className="absolute bottom-1/4 right-1/4 text-3xl opacity-50"
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: 50, opacity: 0.8 }}
            transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={glowingEmojiStyle}
          >
            ✨
          </motion.span>
          <motion.span
            className="absolute top-1/2 left-10 text-5xl opacity-40"
            initial={{ x: 0, opacity: 0.4 }}
            animate={{ x: 30, opacity: 0.6 }}
            transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ color: colors.secondary }}
          >
            🌱
          </motion.span>

          <motion.h2
            className="text-5xl font-bold mb-8"
            style={{ color: colors.cardLight }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Ready to Embrace Your Best Self?
          </motion.h2>
          <motion.p
            className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed"
            style={{ color: colors.cardLight }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join thousands of women who are taking control of their health and well-being with HerCare Buddy. Your journey to a healthier, happier you starts now.
          </motion.p>
          <motion.a
            href="#hero"
            className="font-bold py-4 px-12 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-xl"
            style={{
              backgroundColor: colors.cardLight,
              color: colors.primary,
              boxShadow: `0 8px 16px -4px rgba(0,0,0,0.2)`,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Download HerCare Buddy Today - It's Free!
          </motion.a>
          <motion.p
            className="text-md mt-6"
            style={{ color: colors.cardLight }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Available on iOS and Android.
          </motion.p>
        </section>

      </div>
    </div>
  );
}