import React, { useRef } from "react";
import "./WorkExperience.css";
import Slider from "react-slick";
import { ExperienceCard } from "./ExperienceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../utils/data";

export const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section
      className="experience-container"
      id="workExperience">
      <h5>Work Wxperience</h5>
      <div className="experience-content">
        <Slider
          ref={sliderRef}
          {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard
              key={item.title}
              details={item}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
