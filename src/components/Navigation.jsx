import React from "react";
import "../styles/Navigation.css";

const Navigation = ({ handlePageChange }) => {
  return (
    <div class="topnav-right">
      <div>
        <a href="#About" onClick={() => handlePageChange("About")}>
          About
        </a>
        <a href="#Project" onClick={() => handlePageChange("Project")}>
          Project
        </a>
        <a href="#Resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </a>
        <a href="#Contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navigation;
