import { useState } from "react";
import "./FlashCard.css";

const FlashCard = () => {
  const [selectedID, setSelectedID] = useState(null);

  const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];

  const handleClick = (id) => {
    setSelectedID(id !== selectedID ? id : null);
  };
  return (
    <div>
      <div className="flashcards">
        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            onClick={() => handleClick(id)}
            className={id === selectedID ? "selected" : ""}
          >
            <p>{id === selectedID ? answer : question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCard;
