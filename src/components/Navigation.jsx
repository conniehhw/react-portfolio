import React from "react";
import "../styles/Navigation.css";

// setting up event listener for which item on the nav is clicked
const Navigation = ({ handlePageChange }) => {
  return (
    <div className="nav">
      <div className="nav-item">
        <a href="#About" onClick={() => handlePageChange("About")}>
          About
        </a>
      </div>
      <div className="nav-item">
        <a href="#Project" onClick={() => handlePageChange("Project")}>
          Project
        </a>
      </div>
      <div className="nav-item">
        <a href="#Resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </a>
      </div>
      <div className="nav-item">
        <a href="#Contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navigation;
