// Import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css import
import "./App.css";
import ProfileCard from "./Projects/ProfileCard";
import Home from "./Pages/Home";
import DateCounter from "./Projects/DateCounter";
import FarAwayTravel from "./Projects/FarAwayTravel";
import FlashCard from "./Projects/FlashCard";
import Accordion from "./Projects/Accordion";
import PropsChildren from "./Projects/PropsChildren";
import TipCalculator from "./Projects/TipCalculator";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-card" element={<ProfileCard />} />
          <Route path="/date-counter" element={<DateCounter />} />
          <Route path="/far-away-travel" element={<FarAwayTravel />} />
          <Route path="/flashcard" element={<FlashCard />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/tip-calculator" element={<TipCalculator />} />
          <Route path="/props-children" element={<PropsChildren />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
