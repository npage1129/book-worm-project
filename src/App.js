import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Ages from "./Ages";
import BestSellerTab from "./BestSellerTab";

function App() {
  return (
    <div>
<<<<<<< Updated upstream
  <Router>
  <Routes>
      <Route path= "/" element = {<Home/>}/>
      <Route path= "/home" element = {<Home/>}/>
      <Route path= '/ages' element = {<Ages/>}/>
      <Route path = '/bestsellertab' element = {<BestSellerTab/>}/>
    </Routes>
  </Router>
=======
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ages" element={<Ages />} />
          <Route path="/bestsellertab" element={<BestSellerTab />} />
        </Routes>
      </Router>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
