import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate("/home"), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-pink-200 flex flex-col justify-center items-center">
      
      {/* 💖 Floating Emojis */}
      <div className="absolute text-4xl animate-bounce left-10 top-10">💗</div>
      <div className="absolute text-5xl animate-pulse right-14 top-1/4">💞</div>
      <div className="absolute text-3xl animate-spin-slow left-1/3 bottom-20">💖</div>
      <div className="absolute text-5xl animate-ping-slow top-1/2 right-1/3">🌸</div>
      <div className="absolute text-4xl animate-float bottom-10 left-12">🧚‍♀️</div>
      <div className="absolute text-5xl animate-float delay-200 bottom-20 right-10">❤️</div>
      <div className="absolute animate-float">💞</div>


      {/* ✨ Glowing App Title */}
      <h1 className="text-5xl font-extrabold text-rose-700 mb-10 drop-shadow-lg animate-glow tracking-wide">
        HerCare Buddy 💖
      </h1>

      {/* 🌀 Circular Progress Bar */}
      <div className="w-48 h-48">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textColor: "#BE123C",
            pathColor: "#F43F5E",
            trailColor: "#FBCFE8",
            textSize: "18px",
          })}
        />
      </div>
    </div>
  );
}

export default SplashScreen;
