import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* العمود الأول */}
      <div className="footer-column footer-brand">
        <FaMeta style={{ color: "#333" }} />
        <p>Copyright © Meta Platforms, Inc</p>
        <p>uwu?</p>
      </div>

      {/* العمود الثاني */}
      <div className="footer-column">
        <h3>Learn React</h3>
        <ul>
          <li><a href="#">Quick Start</a></li>
          <li><a href="#">Installation</a></li>
          <li><a href="#">Describing the UI</a></li>
          <li><a href="#">Adding Interactivity</a></li>
          <li><a href="#">Managing State</a></li>
          <li><a href="#">Escape Hatches</a></li>
        </ul>
      </div>

      {/* العمود الثالث */}
      <div className="footer-column">
        <h3>API Reference</h3>
        <ul>
          <li><a href="#">React APIs</a></li>
          <li><a href="#">React DOM APIs</a></li>
        </ul>
      </div>

      {/* العمود الرابع */}
      <div className="footer-column">
        <h3>Community</h3>
        <ul>
          <li><a href="#">Code of Conduct</a></li>
          <li><a href="#">Meet the Team</a></li>
          <li><a href="#">Docs Contributors</a></li>
          <li><a href="#">Acknowledgements</a></li>
        </ul>
      </div>

      {/* العمود الخامس */}
      <div className="footer-column">
        <h3>More</h3>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">React Native</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
        <div className="social-icons">
        <FaFacebook style={{ color: "#333" }} />
        <FaTwitter style={{ color: "#333" }} />
        <FaGithub style={{ color: "#333" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
