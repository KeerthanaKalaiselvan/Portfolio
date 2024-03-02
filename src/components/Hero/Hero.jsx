import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section
      className="hero-container"
      id="navbar">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img
              src="./assets/images/icons8-react-native-64.png"
              alt=""
            />
          </div>

          <img
            src="./assets/images/cherry-689.png"
            alt="programer"
          />
        </div>
        <div>
          <div className="tech-icon">
            <img
              src="./assets/images/icons8-html-64.png"
              alt="html"
            />
          </div>
          <div className="tech-icon">
            <img
              src="./assets/images/icons8-css-48.png"
              alt="css"
            />
          </div>
          <div className="tech-icon">
            <img
              src="./assets/images/icons8-javascript-48.png"
              alt="js"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
