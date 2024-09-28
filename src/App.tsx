
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer";
import WelcomeBar from "./components/WelcomeBar/WelcomeBar";



function App(){
  return(
    <div className="app-background">
       <Navbar />
       <WelcomeBar />
       <About />
       <Footer />
    
    
    
    </div>

  )
}



export default App;