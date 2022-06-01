import React from "react";
import "../Navigator/navigator.css";
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <Link
        to="/"
        id="brand"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        QRad
      </Link>
    </header>

  );
}
export default Header;

