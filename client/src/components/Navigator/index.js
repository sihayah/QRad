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
    <nav className="navBar">
      <div className="navContainer">
        <div className="navLinks">

          <Link
            to="/profile"
            className=
            {({ isActive }) => (isActive ? "active" : "inactive")}
          >
            my profile
          </Link>
          <Link
            to="/contacts"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            my contacts
          </Link>

          {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={logout}>
                Log out
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="navLink">
                log in
              </Link>
              <Link to="/signup" className="navLink">
                sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navigator;
