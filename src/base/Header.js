import React from "react";
import "./Header.css";
import bookwormlogo from "../base/images/Bookworm.png";

function Header() {
  return (
    <div className="header">
      <img src={bookwormlogo} alt="Bookworm" />

      <nav className="navBar">
        <ul style={{ color: "white" }}>
          <li>
            <a href="./Home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
          </li>

          <li>
            <a href="./Ages" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
          </li>
          <li>
            <a
              href="./bestsellers"
              style={{ color: "white", textDecoration: "none" }}
            >
              Comments
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
