import React from "react";

const styles = {
  card: {
    padding: 20,
  },
};

const Resume = () => {
  return (
    <div style={styles.card}>
      <h2>Resume</h2>
      <p>
        Download my
        <a href="https://google.ca" target="_blank" rel="noopener noreferrer">
          resume
        </a>
      </p>

      <h2>Front-end Proficiencies</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB</li>
      </ul>

      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget.
      </p>
    </div>
  );
};

export default Resume;
