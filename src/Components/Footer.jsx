import React from "react";
import { Link } from "react-router-dom";
import "./Styles/footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-copyright text-center">
          Developed by
          <a
            className="white-text"
            target="_blank"
            href="https://soham-official.github.io/"
          >
            {" "}
            Soham{" "}
          </a>
          and
          <a
            className="white-text"
            target="_blank"
            href="https://www.linkedin.com/in/srinjoy-pal-36a076183/"
          >
            {" "}
            Srinjoy{" "}
          </a>
          <br />
          &copy; All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
