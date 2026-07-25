import { Link } from "react-router-dom";
import "../../src/index.css";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 text-muted fs-2">404 NOT FOUND</h1>
        <p className="fs-5 p-3 text-muted">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="footer-links">Go Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
