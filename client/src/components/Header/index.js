import React from "react";
import "../Navigator/navigator.css";
import "./header.css";
import { Link } from 'react-router-dom';

function Navigator() {

  return (
          <Link
            to="/"
            id="brand"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            QRad
          </Link>
  );
}
export default Navigator;

