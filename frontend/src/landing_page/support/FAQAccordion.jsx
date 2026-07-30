import { FaChevronDown } from "react-icons/fa";
import "./Support.css";

function FAQAccordion({ category, isOpen, onToggle }) {
  return (
    <div className={`faq-accordion ${isOpen ? "faq-active" : ""}`}>
      <div className="faq-header" onClick={onToggle}>
        <h5>{category.title}</h5>

        <FaChevronDown className={`faq-arrow ${isOpen ? "rotate" : ""}`} />
      </div>

      {isOpen && (
        <div className="faq-body">
          {category.links.map((link, index) => (
            <a href="#" key={index} className="faq-link">
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default FAQAccordion;
