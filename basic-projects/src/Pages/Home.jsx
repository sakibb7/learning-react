import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Basic Projects from The Udemy Course By Jonas</h3>
      <nav>
        <Link to="/profile-card">Profile Card </Link>
        <Link to="/date-counter"> Date Counter </Link>
        <Link to="/far-away-travel"> Far Away Travel </Link>
        <Link to="/flashcard"> Flashcard </Link>
        <Link to="/accordion"> Accordion </Link>
        <Link to="/props-children"> Props-Children </Link>
        <Link to="/tip-calculator"> Tip-Calculator </Link>
      </nav>
    </div>
  );
};

export default Home;
