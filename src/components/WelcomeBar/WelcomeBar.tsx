import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS and Popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./WelcomeBar.css"


export default function welcomeBar(){
    return(
        <div className="container welcomeBar">
        <h1>My Journey into Tech</h1>
        <p> Follow alongs as we walk though my journey into tech.</p>
        </div>
    )
}