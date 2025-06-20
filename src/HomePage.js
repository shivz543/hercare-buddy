import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 p-6">
      <h1 className="text-4xl font-bold text-rose-700 text-center mb-10 animate-glow">
        Welcome to HerCare Buddy 💖
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Cards for each feature */}
        {[
          { name: "PCOD Tracker", path: "/tracker", emoji: "📅" },
          { name: "Mood Board & Articles", path: "/articles", emoji: "🧠" },
          { name: "AI Therapist Chatbot", path: "/chatbot", emoji: "💬" },
          { name: "Doctor Consultancy", path: "/doctors", emoji: "👩‍⚕️" },
          { name: "Symptom Analyzer", path: "/analyzer", emoji: "🩺" },
          { name: "Health Board", path: "/health", emoji: "🥗" },
        ].map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="bg-white shadow-xl hover:shadow-2xl transition duration-300 p-6 rounded-2xl text-center flex flex-col justify-center items-center text-rose-700 font-semibold text-lg hover:bg-rose-50"
          >
            <div className="text-4xl mb-2">{item.emoji}</div>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
