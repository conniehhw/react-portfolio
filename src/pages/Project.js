import React from "react";


const styles = {
  card: {
    padding: 20,
  },
  projectCard: {
    border: "solid 1px #8c92ac",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    rowGap: 30,
  },
};

const ProjectCard = () => {
  return (
    <div style={styles.card}>
      <h2>Portfolio</h2>
      <div style={styles.container}>
        <a
          href="https://github.com/conniehhw/expressjs-note-taker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img"
            // class="hide"
            style={styles.projectCard}
            src="note-taker.jpg"
            alt="Note Taker"
            width="200"
            height="150"
          ></img>
        </a>
        <a
          href="https://github.com/conniehhw/weather-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          class="cornerLink"
        >
          <img
            style={styles.projectCard}
            src="weather-dash.jpg"
            alt="Weather Dashboard"
            width="200"
            height="150"
          ></img>
        </a>
        <a
          href="https://github.com/conniehhw/password-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={styles.projectCard}
            src="password-gen.jpg"
            alt="Password Generatorr"
            width="200"
            height="150"
          ></img>
        </a>
        <img
          style={styles.projectCard}
          src="note-taker.jpg"
          alt="Note Taker"
          width="200"
          height="150"
        ></img>
        <img
          style={styles.projectCard}
          src="weather-dash.jpg"
          alt="Note Taker"
          width="200"
          height="150"
        ></img>
        <img
          style={styles.projectCard}
          src="password-gen.jpg"
          alt="Note Taker"
          width="200"
          height="150"
        ></img>
      </div>
    </div>
  );
};

export default ProjectCard;
