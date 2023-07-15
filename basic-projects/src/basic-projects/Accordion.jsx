import { useState } from "react";
import "./Accordion.css";

// If you need your accordion open when click other accodion then watch accordion exercise v1

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const Accordion = () => {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          num={i}
          curOpen={curOpen}
          onOpen={setIsOpen}
          key={el.title}
          title={el.title}
          text={el.text}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;


//Accordion Item

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  const handleClick = () => {
    onOpen(num);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p className="number"> {num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={() => handleClick()}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}
