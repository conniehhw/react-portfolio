import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { findByLabelText } from "@testing-library/react";
import React from "react";

const styles = {
  card: {
    padding: 20,
  },
  projectCard: {
    border: "1px solid black",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    rowGap: 30,
  },
};

// const Project = () => {
//   return (
//     <div style={styles.card}>
//       <h2>Project</h2>
//       <div style={styles.projectCard}>
//         <a href="https://github.com/conniehhw/weather-dashboard">
//           Project Name
//         </a>
//       </div>
//     </div>
//   );
// };

const ProjectCard = () => {
  return (
    <div style={styles.card}>
      <h2>Portfolio</h2>
      <div style={styles.container}>
        <img
          style={styles.projectCard}
          src="note-taker.jpg"
          alt="Note Taker"
          width="200"
          height="150"
        ></img>
        <a href="https://github.com/conniehhw/weather-dashboard">
          <img
            style={styles.projectCard}
            src="weather-dash.jpg"
            alt="Note Taker"
            width="200"
            height="150"
          ></img>
        </a>
        <img
          style={styles.projectCard}
          src="password-gen.jpg"
          alt="Note Taker"
          width="200"
          height="150"
        ></img>
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

      <button>
        <a href="https://github.com/conniehhw/expressjs-note-taker">
          Note Taker
        </a>
      </button>
    </div>
  );
};

export default ProjectCard;

//https://github.com/conniehhw/expressjs-note-taker
