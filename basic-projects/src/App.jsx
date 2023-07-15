// Import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css import
import "./App.css";
import ProfileCard from "./basic-projects/ProfileCard";
import Home from "./Pages/Home";
import DateCounter from "./basic-projects/DateCounter";
import FarAwayTravel from "./basic-projects/FarAwayTravel";
import FlashCard from "./basic-projects/FlashCard";
import Accordion from "./basic-projects/Accordion";
import PropsChildren from "./basic-projects/PropsChildren";
import TipCalculator from "./basic-projects/TipCalculator";
import EatNSplit from "./basic-projects/eat-n-split/EatNSplit";

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
          <Route path="/eat-n-split" element={<EatNSplit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
