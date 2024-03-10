import React from "react";
import { PROJECTS } from "../../../utils/data";
import "./ProjectCard.css";

export const ProjectCard = ({ index, handleClick }) => {
  const projectDetail = PROJECTS[index];
  const { title, imageURL, skill, about, gitHub, websiteLink } = projectDetail;

  return (
    <>
      <span
        class="material-symbols-outlined"
        onClick={() => handleClick(title)}>
        arrow_circle_left
      </span>
      <div className="procard-container">
        <a
          href={websiteLink}
          target="blank">
          <img
            src={imageURL}
            alt={title}
            className="procard-img"
            style={{ flex: 1 }}
          />
        </a>
        <div className="procard-content">
          <h5 className="procard-title">{title}</h5>
          <h5 className="procard-skill">{skill}</h5>
          <a
            href={websiteLink}
            target="blank">
            Project Link
          </a>
          <p className="procard-about">{about}</p>
        </div>
      </div>
    </>
  );
};
