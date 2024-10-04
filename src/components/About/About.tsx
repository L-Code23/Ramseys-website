import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JS and Popper.js
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./About.css";
import { Link } from "react-router-dom";


export default function about() {
  return (
    <>
      <div className="row">
        <div className="card col-sm">
          <div className="card-width: 18rem ">
            <img
              src="src\assets\Beer-Motivation.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              With a passion for problem-solving and a hands-on approach to
              learning, I’ve transitioned into the tech industry after spending
              12 years as a professional brewer...
              <div>
                 <Link to="/about"> 
                  <button className="btn btn-success">About</button>
                 </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
