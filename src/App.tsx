
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import WelcomeBar from "./components/WelcomeBar/WelcomeBar";
import About from "./components/About/about";
import Brewing from "./components/About/brewing";
import Tech from "./components/About/tech";
import "./App.css"

function App(){
  return(
    <div className="app-background">
       <Navbar />
       <WelcomeBar />
       <div className="flex-container">
       <div className ="flex-item"><About /></div>
       <div className ="flex-item"><Brewing /></div>
       <div className ="flex-item"><Tech /></div>

       </div>
       <Footer />
    
    
    
    </div>

  )
}



export default App;