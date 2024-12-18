import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const ReactRouter = () => {
  return (
    <div>
      <h1>React Router Implementation</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
      </div>
    </div>
  );
};
export default ReactRouter;
