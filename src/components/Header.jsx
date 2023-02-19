// A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio
import React from "react";
import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "orange",
    border: "solid 1px black",
    // flexWrap: "wrap",
  },
  headingStyle: {
    fontSize: "50px",
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome</h1>

      <h2>Hello World, this is my portfolio. My name is Connie.</h2>
    </header>
  );
}

export default Header;
