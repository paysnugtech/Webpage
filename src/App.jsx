import React from "react";
import CustomNavbar from "./Components/CustomNavbar";
import HeroSection from "./Components/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <CustomNavbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
