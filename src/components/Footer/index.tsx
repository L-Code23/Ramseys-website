import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JS and Popper.js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";

export default function Footer() {
  return (
    <>
      <div className="footer-div">
        <div className="flex-container">
          <div className="footer-h3">
            <h3 className="justify-self">Find me at: </h3>
          </div>
          <div>
            <a
              className="footer-links"
              href="https://www.linkedin.com/in/ramseyjlouder/"
            >
              LinkedIn
            </a>
          </div>
          <a className="footer-links" href="https://github.com/L-Code23/">
            GitHub
          </a>
        </div>

        <small>Louder Development © 2024</small>
      </div>
    </>
  );
}
