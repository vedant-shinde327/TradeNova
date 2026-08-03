import HeroImg from "../../assets/images/homeHero.png";

import { useNavigate } from "react-router-dom";

function Hero() {
  
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src={HeroImg}
          className="m-auto"
          alt="HeroImg"
          style={{ width: "70%" }}
        />

        <h1 className="mt-5 text-muted fs-2">Invest in everything</h1>
        <p className="fs-5 p-3 text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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

export default Hero;
