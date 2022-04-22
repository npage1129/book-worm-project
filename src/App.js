import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CommentPage from "./CommentPage";
import Header from "../src/base/Header.js";
import Footer from "../src/base/Footer.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ages" element={<About />} />
          <Route path="/bestsellers" element={<CommentPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
