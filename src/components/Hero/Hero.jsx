import React from "react";
import "./Hero.css";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
export const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Designer", "Engineer", "Consultant"],
      typeSpeed: 100,
      backSpeed: 100,
      backdelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="hero-container"
      id="navbar">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate <span ref={el}></span>
          <br />
          Transforming Ideas into Seamless and Visually Stunning Web Solutions
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
