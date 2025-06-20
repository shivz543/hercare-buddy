import React from "react";
import { Moon, Sun } from "lucide-react"; // Assuming Lucide icons are still desired

export default function Sidebar({ darkMode, toggleDarkMode }) {
  // Define colors for consistent use
  const colors = {
    primary: "#FF6B6B", // Soft Coral - now used for sidebar background in light mode
    secondary: "#A2D5C6", // Muted Sage Green
    lightBg: "#FDFDFD", // Very light cream
    darkBg: "#1A202C", // Deep, soft dark blue/gray
    lightText: "#333333", // Dark charcoal
    darkText: "#E2E8F0", // Soft white
    cardLight: "#FFFFFF", // White for light mode cards (buttons)
    cardDark: "#2C3E50", // Slightly lighter dark background for dark mode cards (and sidebar)
  };

  return (
    <div
      className="fixed left-0 top-0 h-full w-48 flex flex-col items-center justify-between py-10 shadow-xl transition-colors duration-300 ease-in-out"
      style={{
        backgroundColor: darkMode ? colors.cardDark : colors.primary, // Sidebar background: Soft Coral in light, Card Dark in dark
        boxShadow: darkMode ? '5px 0 15px rgba(0,0,0,0.5)' : `5px 0 15px ${colors.primary}40`, // Soft, color-tinted shadow
      }}
    >
      {/* HerCare Logo/Title */}
      <h1
        className="text-3xl font-extrabold mb-12"
        style={{ color: colors.cardLight }} // White text for brand name, always
      >
        HerCare
      </h1>

      {/* Navigation/Action Buttons */}
      <div className="flex flex-col items-center gap-8 mt-auto">
        {/* Login Button */}
        <button
          className="font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: colors.cardLight, // White background for the button
            color: colors.primary, // Primary coral text
            boxShadow: `0 4px 10px -2px ${colors.cardLight}30`, // Softer shadow for white button
          }}
        >
          Login
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110"
          style={{
            backgroundColor: colors.cardLight, // White background for the toggle
            color: colors.primary, // Primary coral icon
            boxShadow: `0 4px 10px -2px ${colors.cardLight}30`,
          }}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {/* Empowering Motto */}
      <div
        className="mt-auto text-base font-medium"
        style={{ color: colors.cardLight }} // White text for motto
      >
        🌟 You're resilient
      </div>
    </div>
  );
}