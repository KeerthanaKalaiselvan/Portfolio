import React from "react";
import "./ContactForm.css";
export const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>

        <input
          type="text"
          name="email"
          placeholder="Email"
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows={3}></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};
