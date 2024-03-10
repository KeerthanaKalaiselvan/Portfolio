import React from 'react'
import './ContactCard.css'

export const ContactCard = ({iconUrl,text,info}) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <a href={text}>
          <img
            src={iconUrl}
            alt={text}
          />
        </a>
      </div>
      <p>{info}</p>
    </div>
  );
}
