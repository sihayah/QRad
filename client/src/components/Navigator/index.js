import React from "react";
import "./navigator.css";
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

function Navigator() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav>
          {Auth.loggedIn() ? (
            <div id="loggedin-link-container">
              <Link
                to="/profile"
                className=
                {({ isActive }) => (isActive ? "active" : "inactive")}
                >
                Profile
              </Link>
              <Link
                to="/contacts"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Contacts
              </Link>
              <a href="/" className="nav-link" onClick={logout}>
                Log out
              </a>
            </div>
          ) : (
            <div id="loggedout-link-container">
              <Link to="/login" className="nav-link">
                log in
              </Link>
              <Link to="/signup" className="nav-link">
                sign up
              </Link>
            </div>
          )}
    </nav>
  );
}
export default Navigator;
