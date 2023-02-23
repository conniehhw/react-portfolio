import React from "react";
import aboutLogo from "../images/aboutme.jpg";

const styles = {
  card: {
    padding: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
};

const About = () => {
  return (
    <div style={styles.card}>
      <h2>About Me</h2>
      <img style={styles.img} src={aboutLogo} alt="about me logo" />
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
};

export default About;
