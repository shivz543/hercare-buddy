import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import HomePage from "./HomePage"; 
import PeriodTracker from "./PeriodTracker";
import SymptomAnalyzer from "./SymptomAnalyzer";
import ForumPage from './ForumPage';
import AITherapistDoctorPage from "./components/AITherapistDoctorPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tracker" element={<PeriodTracker />} />
        <Route path="/analyzer" element={<SymptomAnalyzer />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/doctor-support" element={<AITherapistDoctorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
