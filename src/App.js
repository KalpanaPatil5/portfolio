import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";
import TechStack from "./routes/TechStack";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/techStack" element={<TechStack />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
