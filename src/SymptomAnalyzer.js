import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Still using Framer Motion for more complex animations

// Import the new CSS file
import './SymptomAnalyzer.css'; // Make sure the path is correct relative to SymptomAnalyzer.jsx

const symptomsList = [
  { name: "Cramps", emoji: "💥" },
  { name: "Heavy Bleeding", emoji: "💧" },
  { name: "Mood Swings", emoji: "🎭" },
  { name: "Bloating", emoji: "🎈" },
  { name: "Breast Tenderness", emoji: "🍈" },
  { name: "Acne", emoji: "🌋" },
  { name: "Nausea", emoji: "🤢" },
  { name: "Back Pain", emoji: "🦴" },
  { name: "Fatigue", emoji: "💤" },
  { name: "Headache", emoji: "🤕" },
  { name: "Insomnia", emoji: "😴" },
  { name: "Irregular Cycle", emoji: "⏰" },
];

const severityScore = {
  mild: 1,
  moderate: 2,
  severe: 3,
};

// No longer need severityColors object here as styling is in CSS classes
// const severityColors = { ... };

function SymptomAnalyzer() {
  const [symptoms, setSymptoms] = useState({});
  const [result, setResult] = useState("");
  const [showDoctorCTA, setShowDoctorCTA] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleChange = (symptom, level) => {
    setSymptoms((prev) => ({
      ...prev,
      [symptom]: level,
    }));
  };

  const analyze = () => {
    setIsAnalyzing(true); // Start loading animation

    setTimeout(() => { // Simulate an API call or processing delay
      const levels = Object.values(symptoms);

      if (levels.length === 0) {
        setResult("📝 Please select severity for at least one symptom.");
        setShowDoctorCTA(false);
        setIsAnalyzing(false);
        return;
      }

      const score = levels.reduce((total, level) => total + severityScore[level], 0);

      let newResult = "";
      let newShowDoctorCTA = false;

      if (score >= 9) {
        newResult = "❗ Based on your input, we strongly recommend consulting a doctor immediately.";
        newShowDoctorCTA = true;
      } else if (score >= 6) {
        newResult = "⚠️ Your symptoms indicate a moderate concern. Consider tracking closely or consulting a professional if they persist.";
        newShowDoctorCTA = true;
      } else {
        newResult = "✅ You're experiencing mild symptoms. Focus on self-care, rest, and hydration.💖";
        newShowDoctorCTA = false;
      }

      setResult(newResult);
      setShowDoctorCTA(newShowDoctorCTA);
      setIsAnalyzing(false);
    }, 800); // Small delay for animation
  };

  // Framer Motion variants remain the same as they are JS objects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const resultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <div className="symptom-analyzer-container">
      {/* Background Doodles */}
      <div className="symptom-analyzer-background-doodles"></div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="symptom-analyzer-card"
      >
        <h1 className="symptom-analyzer-header">
          <span className="symptom-analyzer-header-emoji">💖</span>Symptom Sentinel
        </h1>
        <p className="symptom-analyzer-intro">
          Select the severity of your current symptoms to get personalized insights and recommendations.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="symptom-list-container"
        >
          {symptomsList.map((symptom, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="symptom-card"
            >
              <p className="symptom-name">
                <span className="symptom-emoji">{symptom.emoji}</span> {symptom.name}
              </p>
              <div className="severity-buttons-container">
                {["mild", "moderate", "severe"].map((level) => (
                  <button
                    key={level}
                    onClick={() => handleChange(symptom.name, level)}
                    className={`
                      severity-button
                      ${symptoms[symptom.name] === level
                          ? `severity-button-${level}-active`
                          : "severity-button-inactive"
                      }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={analyze}
          disabled={isAnalyzing}
          className="analyze-button"
        >
          {isAnalyzing ? (
            <svg className="analyze-button-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>🔮 Analyze Symptoms</>
          )}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              key="result-box"
              variants={resultVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="result-box"
            >
              {result}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating CTA */}
      <AnimatePresence>
        {showDoctorCTA && (
          <motion.div
            key="cta-box"
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="doctor-cta-section animate-pulse-fade-in"
          >
            <span className="doctor-cta-text">👩‍⚕️ Need expert advice?</span>
            <a
              href="/consultation"
              className="doctor-cta-button"
            >
              Connect with a Doctor
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SymptomAnalyzer;