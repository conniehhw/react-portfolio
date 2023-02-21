import React from "react";
import React, { useState } from "react";
// import './style.css';

function ContactForm() {
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
}

const handleInputChange = (e) => {
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

const handleFormSubmit = (e) => {
  e.preventDefault();

  alert(`Hello ${name}`);
  setName("");
};

return (
  <div>
    <h1>Contact</h1>
    <p>Name: </p>
    <form className="form">
      <input
        value={firstName}
        name="name"
        //   onChange={handleInputChange}
        type="text"
        // placeholder="Name"
      />
      <p>Email: </p>
      <input
        // value={email}
        name="email"
        //   onChange={handleInputChange}
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

export default ContactForm;
