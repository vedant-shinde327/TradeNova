import { useState } from "react";
import FAQAccordion from "./FAQAccordion";
import { supportCategories } from "../../data/supportData";
import "./Support.css";

function FAQSection() {
  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <h2 className="faq-title">Explore Support Topics</h2>

      {supportCategories.map((category) => (
        <FAQAccordion
          key={category.id}
          category={category}
          isOpen={activeId === category.id}
          onToggle={() =>
            setActiveId(activeId === category.id ? null : category.id)
          }
        />
      ))}
    </>
  );
}

export default FAQSection;
