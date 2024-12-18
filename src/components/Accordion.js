import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItems = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
    { title: "Section 3", content: "Content for Section 3" },
  ];
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {accordionItems.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleAccordion(index)}>{item.title}</button>
          {openIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </>
  );
};

export default Accordion;
