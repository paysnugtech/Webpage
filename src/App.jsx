import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import LandingPage from "./Pages/LandingPage";
import Business from "./Pages/Business";
import Company from "./Pages/Company";
import Help from "./Pages/Help";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="background-container">
        <CustomNavbar />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business" element={<Business />} />
        <Route path="/company" element={<Company />} />
        <Route path="/help" element={<Help />} />
        {/* <Route path="/registration" element={<RegistrationForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
