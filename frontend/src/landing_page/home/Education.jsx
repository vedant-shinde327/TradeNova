import EducationImg from "../../assets/images/education.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Education() {
    return (
      <div className="container mt-1">
        <div className="row">
          <div className="col-6 p-5">
            <img src={EducationImg} style={{ width: "90%" }} />
          </div>


          <div className="col-6 p-5">
            <h2 className="text-muted fs-3 mb-4">
              Free and open market education
            </h2>

            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="fs-5" style={{ textDecoration: "none" }}>
              Varsity <FontAwesomeIcon icon={faArrowRight} />
            </a>

            <p className="mt-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="fs-5" style={{ textDecoration: "none" }}>
              TradingQ&A <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Education;