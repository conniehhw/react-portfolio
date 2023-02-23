import React from "react";
import "../styles/Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  // <div className="footer">
  //   <p class="a">This is a footer</p>
  // </div>
  <nav className="a">
    <SocialIcon url="https://github.com/home" target="_blank" />
    <SocialIcon url="https://linkedin.com/home" target="_blank" />
    <SocialIcon url="https://stackoverflow.com/home" target="_blank" />
  </nav>
);

// add social media logos & links

export default Footer;
