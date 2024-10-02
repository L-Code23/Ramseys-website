import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JS and Popper.js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";

export default function Footer() {
  return (
    <>
      <div className="footer-div">
        
          <h3 className="footer-h1">Find me at: </h3>
          <a
            className="nav-link footer-links"
            href="https://www.linkedin.com/in/ramseyjlouder/"
          >
            LinkedIn
          </a>
          <a
            className="nav-link footer-links"
            href="https://github.com/L-Code23/"
          >
            GitHub
          </a>
        

        <small>Louder Development © 2024</small>
      </div>
    </>
  );
}
