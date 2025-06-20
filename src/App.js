import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import HomePage from "./HomePage"; 
import PeriodTracker from "./PeriodTracker";
import SymptomAnalyzer from "./SymptomAnalyzer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tracker" element={<PeriodTracker />} />
        <Route path="/analyzer" element={<SymptomAnalyzer />} />
      </Routes>
    </Router>
  );
}

export default App;
