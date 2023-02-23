import React from "react";
import "../styles/Footer.css";
import { SocialIcon } from "react-social-icons";

// add social media logos & links
const Footer = () => (
  <nav className="a">
    <SocialIcon url="https://github.com/home" target="_blank" />
    <SocialIcon url="https://linkedin.com/home" target="_blank" />
    <SocialIcon url="https://stackoverflow.com/home" target="_blank" />
  </nav>
);

export default Footer;
