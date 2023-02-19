import React from "react";
import "../styles/Nav.css";

export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "center",
          // "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <svg height="100" width="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="2"
            fill="white"
          />
        </svg>
        <div style={linkStyle}>
          <button>Home</button>
        </div>
        <div style={linkStyle}>
          <button>About me</button>
        </div>
        <div style={linkStyle}>
          <button>Porfolio</button>
        </div>
        <div style={linkStyle}>
          <button>Contact</button>
        </div>
        <div style={linkStyle}>
          <button>Resume</button>
        </div>
      </section>
    </nav>

    //A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio
  );
}
