import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS and Popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MainPage.css'
import Navbar from '../Navbar/Navbar';
import About from '../About/about';
import Brewing from '../About/brewing';
import Tech from '../About/tech';
import Footer from '../Footer';




export default function  MainPage() {
    return (
      <div className="app-background">
        <Navbar />
        
        <div className="flex-container">
          <div className="flex-item">
            <About />
          </div>
          <div className="flex-item">
            <Brewing />
          </div>
          <div className="flex-item">
            <Tech />
          </div>
        </div>
        <Footer />
      </div>
    );
  }