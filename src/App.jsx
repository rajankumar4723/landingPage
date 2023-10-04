import { useState } from "react";
import "./App.css";
import Nabar from "./components/Navbar";
import Header from "./components/Header";
import Macbook from "./components/Macbook";
import Features from "./components/Features";
import Footer from "./components/Footer";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    
    <div className="container">
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button className="btn" onClick={toggleDarkMode}><i class="fa fa-moon"></i></button>
      <Nabar />
      <Header />
      <Macbook />
      <Features/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
