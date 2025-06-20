import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FeatureSection({ title, description, emoji, link, darkMode, colors }) {
  // Custom glow effect for emojis in FeatureSection
  const glowingEmojiStyle = {
    filter: `drop-shadow(0 0 4px ${colors.primary}) drop-shadow(0 0 8px ${colors.primary}80)`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.02]"
      style={{
        backgroundColor: darkMode ? colors.cardDark : colors.cardLight,
        color: darkMode ? colors.darkText : colors.lightText,
        boxShadow: darkMode ? '0 8px 25px rgba(0,0,0,0.5)' : '0 8px 25px rgba(0,0,0,0.1)',
      }}
    >
      <Link to={link}>
        <div className="flex items-center mb-4">
          <motion.span
            className="text-5xl mr-4 inline-block"
            animate={{ scale: [1, 1.1, 1] }} // Subtle pulse
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={glowingEmojiStyle} // Apply glow here
          >
            {emoji}
          </motion.span>
          <h3 className="text-3xl font-bold" style={{ color: colors.primary }}>{title}</h3>
        </div>
        <p className="text-lg leading-relaxed" style={{ color: darkMode ? colors.darkSecondaryText : colors.lightSecondaryText }}>{description}</p>
      </Link>
    </motion.div>
  );
}