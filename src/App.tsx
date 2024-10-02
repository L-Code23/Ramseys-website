
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer";
import WelcomeBar from "./components/WelcomeBar/WelcomeBar";
import Brewing from "./components/About/Brewing";
import About from "./components/About/About";
import Tech from "./components/About/Tech";

function App(){
  return(
    <div className="app-background">
       <Navbar />
       <WelcomeBar />
       <div className="row col-md">
       <About />
       <Brewing />
       <Tech />

       </div>
       <Footer />
    
    
    
    </div>

  )
}



export default App;