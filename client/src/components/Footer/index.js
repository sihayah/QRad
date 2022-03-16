import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-container">
        <h4 className="footer-header">
          Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
          <br></br>
          by Marcio Araujo, Patricia Cancio, Christian Diaz, Sihaya Harris, and
          Hilary Purrington
        </h4>
      </div>
    </footer>
  );
};

// export default Footer;
