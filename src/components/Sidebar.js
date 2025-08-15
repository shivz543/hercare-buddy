import React from "react";
import { Moon, Sun } from "lucide-react"; // Assuming Lucide icons are still desired

export default function Sidebar({ darkMode, toggleDarkMode }) {
  const colors = {
    primary: "#FF6B6B",
    secondary: "#A2D5C6",
    lightBg: "#FDFDFD",
    darkBg: "#1A202C",
    lightText: "#333333",
    darkText: "#E2E8F0",
    cardLight: "#FFFFFF",
    cardDark: "#2C3E50",
  };

  return (
    <div
      className="fixed left-0 top-0 h-full w-48 flex flex-col items-center justify-between py-10 shadow-xl transition-colors duration-300 ease-in-out"
      style={{
        backgroundColor: darkMode ? colors.cardDark : colors.primary,
        boxShadow: darkMode ? '5px 0 15px rgba(0,0,0,0.5)' : `5px 0 15px ${colors.primary}40`,
      }}
    >
      {/* HerCare Logo/Title */}
      <h1
        className="text-3xl font-extrabold mb-12"
        style={{ color: colors.cardLight }}
      >
        HerCare
      </h1>

      {/* Navigation/Action Buttons */}
      <div className="flex flex-col items-center gap-8 mt-auto">
        {/* Dark Mode Toggle ONLY */}
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110"
          style={{
            backgroundColor: colors.cardLight,
            color: colors.primary,
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
        style={{ color: colors.cardLight }}
      >
        🌟 You're resilient
      </div>
    </div>
  );
}
