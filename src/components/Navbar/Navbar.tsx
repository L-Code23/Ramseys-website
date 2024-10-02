// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS and Popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './navbar.css'


export default function navbar (){
    return(
        <div className="navbar">
           <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ramsey's Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="http://localhost:5173/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/ramseyjlouder/">LinkedIn</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Portfolio
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"> <a className="dropdown-item" href="https://github.com/L-Code23/TicketSystemFrontEnd">IT Ticket App</a> </a></li>
            <li><a className="dropdown-item" href="#"> <a className="dropdown-item" href="https://github.com/L-Code23/MsLoudersLibrary">Library C# back end</a> </a></li>
            <li><a className="dropdown-item" href="#"> <a className="dropdown-item" href="https://github.com/kyra-moore21/ProcrastinationFrontEnd">Prioritizzer App</a> </a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
        </div>

    )

      
    
}