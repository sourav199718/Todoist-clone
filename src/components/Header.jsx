import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
      </nav>
    </header>
  );
}

export default Header;
