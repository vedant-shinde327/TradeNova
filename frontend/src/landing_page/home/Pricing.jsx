import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingImg from "../../assets/images/pricing-eq.svg";
import OtherPricingImg from "../../assets/images/other-trades.svg"

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5">
          <h2 className="fs-3">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="fs-5" style={{ textDecoration: "none" }}>
            See pricing <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="col-lg-7 p-5">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img src={PricingImg} width="90" alt="" />
              <small className="text-muted ms-2">
                Free account <br />
                opening
              </small>
            </div>

            <div className="d-flex align-items-center">
              <img src={PricingImg} width="90" alt="" />
              <small className="text-muted ms-2">
                Free equity delivery <br />
                and direct mutual funds
              </small>
            </div>

            <div className="d-flex align-items-center">
              <img src={OtherPricingImg} width="90" alt="" />
              <small className="text-muted ms-2">
                Intraday and <br />
                F&O
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
