import React, { useState } from "react";

import "./Navbar.css";
import { MobileNav } from "./MobileNav/MobileNav";


export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
     const toggleMenu = () => {
       setOpenMenu(!openMenu);
     };
  return (
    <>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
      />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            src="./assets/logo.svg"
            alt="keerthana"
            className="logo"
          />
          <ul>
            <li>
              <a
                href="#navbar"
                className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#workExperience"
                className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="menu-item">
                Contact Me
              </a>
            </li>
            <button
              className="contact-btn"
              onClick={(e) => {
                window.location = "mailto:keerthanajk24@gmail.com";
              }}>
              Hire Me
            </button>
          </ul>
          <button className="menu-btn">
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
              onClick={toggleMenu}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
