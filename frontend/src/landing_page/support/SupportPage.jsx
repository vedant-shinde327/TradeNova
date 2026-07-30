import Hero from "./Hero";
import SupportContent from "./SupportContent";
import "./Support.css";

function SupportPage() {
    return (
      <>
        <div className="support-page">
          <Hero />
          <SupportContent />
        </div>
      </>
    );
}

export default SupportPage;