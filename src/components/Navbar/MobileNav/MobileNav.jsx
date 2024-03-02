
import "./MobileNav.css"

export const MobileNav = ({ isOpen, toggleMenu }) => {
   
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>
        <div className="mobile-menu-container">
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
                href="#contact"
                className="menu-item">
                Contact Me
              </a>
            </li>
            <button
              className="contact-btn"
              onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
