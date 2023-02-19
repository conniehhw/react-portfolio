import React from "react";

export default function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          //   onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          //   onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          //   onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
