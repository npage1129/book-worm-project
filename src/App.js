import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Ages from "./Ages";
import BestSellerTab from "./BestSellerTab";
import Header from "./base/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ages" element={<Ages />} />
          <Route path="/bestsellers" element={<BestSellerTab />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
