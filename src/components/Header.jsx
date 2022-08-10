import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <h2>EnSysMod</h2>
      </div>
      <div className="login">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log in</Link>
      </div>
    </header>
  );
}

export default Header;
