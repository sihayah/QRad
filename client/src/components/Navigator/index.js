import React from "react";
import "./navigator.css";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";

function Navigator() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <div className="navBar">
        <div className="navContainer">
          <div className="navLinks">
            <NavLink
              to="/"
              id="brand"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              QRad
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              my profile
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              my contacts
            </NavLink>

            {Auth.loggedIn() ? (
              <>
                <a href="/" onClick={logout}>
                  Log out
                </a>
              </>
            ) : (
              <>
                <NavLink to="/login" className="navLink">
                  log in
                </NavLink>
                <NavLink to="/signup" className="navLink">
                  sign up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigator;
