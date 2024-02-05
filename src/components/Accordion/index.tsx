import React, { useState } from "react";

const AccordionData = [
  {
    id: 1,
    question: "What is the first item?",
    answer: "The answer to the first item goes here.",
  },
  {
    id: 2,
    question: "Tell me about the second item.",
    answer: "The answer to the second item goes here.",
  },
  {
    id: 3,
    question: "What is the third item?",
    answer: "The answer to the third item goes here.",
  },
  {
    id: 4,
    question: "Explain the fourth item.",
    answer: "The answer to the fourth item goes here.",
  },
  {
    id: 5,
    question: "Describe the fifth item.",
    answer: "The answer to the fifth item goes here.",
  },
  {
    id: 6,
    question: "What is unique about the sixth item?",
    answer: "The answer to the sixth item goes here.",
  },
  {
    id: 7,
    question: "Tell me about the seventh item.",
    answer: "The answer to the seventh item goes here.",
  },
];

const Accordion = () => {
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);
  const [allowMultipleOpenAccordions, setAllowMultipleOpenAccordions] =
    useState(false);

  const toggleAccordion = (accordionId: number) => {
    if (allowMultipleOpenAccordions) {
      return setOpenAccordions(() =>
        openAccordions.includes(accordionId) ? [] : [accordionId]
      );
    }

    if (openAccordions.includes(accordionId)) {
      setOpenAccordions((prev) => prev.filter((id) => id !== accordionId));
    } else {
      setOpenAccordions((prev) => [...prev, accordionId]);
    }
  };

  const toggleAllowMultipleOpenAccordions = () => {
    setAllowMultipleOpenAccordions((prev) => !prev);
    setOpenAccordions((prevOpenAccordions) => prevOpenAccordions.slice(0, 1));
  };

  return (
    <section className="accordions_wrapper">
      <div className="accordion__head">
        <h2 className=" section__heading">Accordion Component</h2>
        <button
          className="accordion__toggle-multiple-accordions"
          onClick={toggleAllowMultipleOpenAccordions}
          style={{
            backgroundColor: allowMultipleOpenAccordions ? "green" : "red",
          }}
        >
          {allowMultipleOpenAccordions
            ? "Allow Multiple Accordions"
            : "Disable Multiple Accordions"}
        </button>
      </div>
      {AccordionData.map((accordion) => (
        <React.Fragment key={accordion.id}>
          <div
            className="accordion"
            onClick={() => toggleAccordion(accordion.id)}
            aria-expanded={openAccordions.includes(accordion.id)}
          >
            <div
              role="button"
              aria-label="accordion"
              className="accordion__question"
            >
              <h3>Q: {accordion.question}</h3>
              <span className="plus_icon">+</span>
            </div>
            {openAccordions.includes(accordion.id) && <p>{accordion.answer}</p>}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Accordion;
