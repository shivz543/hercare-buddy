import { useState } from "react";

const symptomsList = [
  { name: "Cramps", emoji: "🤕" },
  { name: "Heavy Bleeding", emoji: "🩸" },
  { name: "Mood Swings", emoji: "😠" },
  { name: "Bloating", emoji: "😣" },
  { name: "Breast Tenderness", emoji: "🫃" },
  { name: "Acne", emoji: "😞" },
  { name: "Nausea", emoji: "🤢" },
  { name: "Back Pain", emoji: "💢" },
  { name: "Fatigue", emoji: "🥱" },
  { name: "Headache", emoji: "🤯" },
];

const severityScore = {
  mild: 1,
  moderate: 2,
  severe: 3,
};

const severityColors = {
  mild: "bg-green-200 text-green-800 border-green-400",
  moderate: "bg-yellow-200 text-yellow-800 border-yellow-400",
  severe: "bg-red-200 text-red-800 border-red-400",
};

function SymptomAnalyzer() {
  const [symptoms, setSymptoms] = useState({});
  const [result, setResult] = useState("");
  const [showDoctorCTA, setShowDoctorCTA] = useState(false);

  const handleChange = (symptom, level) => {
    setSymptoms((prev) => ({
      ...prev,
      [symptom]: level,
    }));
  };

  const analyze = () => {
    const levels = Object.values(symptoms);

    if (levels.length === 0) {
      setResult("📝 Please select severity for at least one symptom.");
      setShowDoctorCTA(false);
      return;
    }

    const score = levels.reduce((total, level) => total + severityScore[level], 0);

    if (score >= 7) {
      setResult("❗ Based on your input, we recommend consulting a doctor.");
      setShowDoctorCTA(true);
    } else if (score >= 4) {
      setResult("⚠️ Keep track of your symptoms. Take rest and hydrate.");
      setShowDoctorCTA(false);
    } else {
      setResult("✅ You're experiencing mild symptoms. Take care 💖");
      setShowDoctorCTA(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 p-6 flex flex-col items-center relative">
        {/* Floating Emoji Background */}
<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
  {[...Array(15)].map((_, i) => (
    <span
      key={i}
      className={`absolute text-3xl opacity-20 animate-float`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 5}s`,
      }}
    >
      {["💗", "🌼", "💕", "🌸", "💫"][i % 5]}
    </span>
  ))}
</div>
      <h1 className="text-4xl font-extrabold text-rose-700 mb-8 tracking-wider animate-fade-in">🩺 Symptom Analyzer</h1>

      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-3xl w-full space-y-6">
        {symptomsList.map((symptom, i) => (
          <div key={i} className="pb-2 border-b">
            <p className="text-lg font-semibold text-gray-800 mb-3">
              {symptom.emoji} {symptom.name}
            </p>
            <div className="flex gap-4">
              {["mild", "moderate", "severe"].map((level) => (
                <button
                  key={level}
                  onClick={() => handleChange(symptom.name, level)}
                  className={`px-4 py-1 text-sm rounded-full border font-medium capitalize shadow-sm transition-all duration-150
                    ${
                      symptoms[symptom.name] === level
                        ? severityColors[level]
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={analyze}
          className="mt-6 w-full bg-rose-500 text-white text-lg font-semibold px-4 py-3 rounded-xl hover:bg-rose-600 transition transform hover:scale-[1.01]"
        >
          💡 Analyze Symptoms
        </button>

        {result && (
          <div className="mt-6 bg-rose-100 border border-rose-300 p-4 rounded-lg text-rose-800 text-center font-medium text-lg shadow-sm animate-fade-in">
            {result}
          </div>
        )}
      </div>

      {/* Floating CTA */}
      {showDoctorCTA && (
        <div className="fixed bottom-5 right-5 bg-white border-l-4 border-rose-500 shadow-xl p-4 rounded-xl flex items-center space-x-4 animate-bounce transition">
          <span className="text-rose-600 text-lg font-bold">👩‍⚕️ Need help?</span>
          <a
            href="/consultation"
            className="bg-rose-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-rose-600"
          >
            Consult Doctor
          </a>
        </div>
      )}
    </div>
  );
}

export default SymptomAnalyzer;
