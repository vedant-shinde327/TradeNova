import Logo from "../assets/images/TradeNova-logo.png";
import "../../src/index.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top border-bottom">
      <div className="container ">
        <a className="navbar-brand" href="#">
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
        </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
