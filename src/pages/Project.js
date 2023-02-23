import React from "react";

// this renders the projects and links to the corresponding gitHub repository when the image is clicked
// missing function where upon hover over each project image; user to see links to both the deployed applications and the corresponding GitHub repository

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
        <a
          href="https://github.com/conniehhw/team-profile-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={styles.projectCard}
            src="team-pro-gen.jpg"
            alt="Team Profile Gen"
            width="200"
            height="150"
          ></img>
        </a>
        <a
          href="https://github.com/Jon-Ledo/FullStack-My-Personal-Bookshelf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={styles.projectCard}
            src="bookshelf.jpg"
            alt="Collaboration Bookshelf"
            width="200"
            height="150"
          ></img>
        </a>
        <a
          href="https://github.com/bleachevil/Project1-Workout"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={styles.projectCard}
            src="customfit.jpg"
            alt="Collaboration CustomFit"
            width="200"
            height="150"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
