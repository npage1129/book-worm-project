import React from "react";
import "./Header.css";
import bookwormlogo from "../base/images/Bookworm.png";

function Header() {
  return (
    <div className="Header">
      <img src={bookwormlogo} alt="Bookworm" />

      <nav className="navBar">
        <ul>
          <li>
            <a href="./Home">Home</a>
          </li>

          <li>
            <a href="./Ages">Ages</a>
          </li>
          <li>
            <a href="./bestsellers">Best Sellers</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
