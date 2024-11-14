import React from "react";
import "./App.css";
import "boxicons";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import Home from "./Components/Portfolio/Home";
import Services from "./Components/Services/Services";
import Resume from "./Components/Resume/Resume";
import MainExperience from "./Components/Resume/ContentBar/MainExperience/MainExperience";
import MainEducation from "./Components/Resume/ContentBar/MainEducation/MainEducation";
import MainSkills from "./Components/Resume/ContentBar/MainSkills/MainSkills";
import MainAbout from "./Components/Resume/ContentBar/MainAbout/MainAbout";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<MainExperience />} />
          <Route path="/education" element={<MainEducation />} />
          <Route path="/skills" element={<MainSkills />} />
          <Route path="/about" element={<MainAbout />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
