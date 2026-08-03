import smallcaseImg from "../../assets/images/smallcaseLogo.png";
import sensibullImg from "../../assets/images/sensibullLogo.svg";
import tijoriImg from "../../assets/images/goldenpiLogo.png";
import streakImg from "../../assets/images/streakLogo.png";
import dittoImg from "../../assets/images/dittoLogo.png";
import zerodhafund from "../../assets/images/zerodhaFundhouse.png";

import { useNavigate } from "react-router-dom";

function Universe() {

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center fs-2 mt-5">The TradeNova Universe</h1>
        <p className="text-center pt-3 fs-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5">
          <img
            src={zerodhafund}
            style={{ width: "50%", marginLeft: "3rem" }}
            className="p-2"
          />
          <p className="text-small text-muted text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-5">
          <img
            src={sensibullImg}
            style={{ width: "60%", marginLeft: "3rem" }}
            className="p-2"
          />
          <p className="text-small text-muted text-center">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-5">
          <img
            src={tijoriImg}
            style={{ width: "60%", marginLeft: "3rem" }}
            className="p-2"
          />
          <p className="text-small text-muted text-center">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-5">
          <img
            src={streakImg}
            style={{ width: "60%", marginLeft: "3rem" }}
            className="p-2"
          />
          <p className="text-small text-muted text-center">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-5">
          <img src={smallcaseImg} />
          <p className="text-small text-muted text-center">
            Thematic investing platform that helps you invest in deversified
            baskets o stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-5">
          <img
            src={dittoImg}
            style={{ width: "40%", marginLeft: "4rem" }}
            className="p-2"
          />
          <p className="text-small text-muted text-center">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignup}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
