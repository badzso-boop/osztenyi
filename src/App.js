import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Navbar.js";

import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Education from "./Pages/Education.js";
import ProfessionalExperience from "./Pages/ProfessionalExperience.js";
import Publications from "./Pages/Publications.js";
import Volunteering from "./Pages/Volunteering.js";

const App = () => {
  return (
    <div className="h-screen">
        <Router basename="/osztenyi">
          <div>
            <Nav />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/education" exact element={<Education />} />
              <Route path="/professionalexperience" exact element={<ProfessionalExperience />} />
              <Route path="/publications" exact element={<Publications />} />
              <Route path="/volunteering" exact element={<Volunteering />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
};

export default App;
