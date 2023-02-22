import React, { useState } from "react";
// import "./style.css";

const styles = {
  card: {
    padding: 20,
  },
};

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // // when the state changes run this callback
  // useEffect() => {

  // }

  const handleInputChange = (e) => {
    // getting the action of keystroke out of form to trigger change?
    const { name, value } = e.target;
    console.log("name", firstName);
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

  // if (firstName && Email & Message === "") {
  //   return <div>This field is required</div>
  //   }
  //    return <div>Your message has been sent</div>
  // };

  // Create conditional upon handleFormSubmit, if firstName, Email & Message is empty, return statement
  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${firstName} your message has been sent`); // alert user msg has been sent and clear the inputs
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
          onChange={handleInputChange} // how to note
          type="text"
          // placeholder="Name"
        />
        <p>Email: </p>
        <input
          // value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          // placeholder="email"
        />
        <p>Message: </p>
        <input
          // value={message}
          name="message"
          //   onChange={handleInputChange}
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
