import Logo from "../assets/images/TradeNova-logo.png";
import "../../src/index.css";
import { Link } from "react-router-dom";  

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top border-bottom">
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="TradeNova"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold fs-4" style={{ color: "#387ed1" }}>
            TradeNova
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
