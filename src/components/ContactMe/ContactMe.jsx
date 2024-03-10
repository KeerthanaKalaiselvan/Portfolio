import React from "react";
import "./ContactMe.css";
import { ContactCard } from "./ContactCard/ContactCard";
import { ContactForm } from "./ContactForm/ContactForm";

export const ContactMe = () => {
  return (
    <section
      className="contact-container"
      id="contact">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactCard
            iconUrl="./assets/images/icons8-mail-64.png"
            text="mailto:keerthanajk24@gmail.com"
            info="Gmail"
          />
          <ContactCard
            iconUrl="./assets/images/icons8-github-50.png"
            text="https://github.com/KeerthanaKalaiselvan"
            info="github"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
