import React, { useState } from "react";

const styles = {
  card: {
    padding: 20,
  },
};

// sets up contact us form to be empty string upon load useState("")

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target; // function to test if keys pressed are captured
    console.log("name", firstName);
    console.log("email", email);
    console.log("message", message);
    console.log("value", e.target.value);

    switch (name) {
      case "name":
        return setFirstName(value);
      case "email":
        return setEmail(value);
      case "message":
        return setMessage(value);
    }
  };

  // a function is needed to check if user clicks outside the input fields:
  // if (firstName && Email & Message === "") {
  //   return <div>This field is required</div>
  //   }

  // when submit button is handled, alert msg to notifer user their msg has been sent & clears the form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${firstName} your message has been sent`);
    setFirstName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.card}>
      <h2>Contact</h2>
      <p>Name: </p>
      <form className="form">
        <input
          value={firstName}
          name="name"
          onChange={handleInputChange}
          type="text"
          // placeholder="Name"
        />
        <p>Email: </p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          // placeholder="email"
        />
        <p>Message: </p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          // placeholder="Message"
        />

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
