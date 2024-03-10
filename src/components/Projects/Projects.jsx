import {
  EffectCoverflow,
  Navigation,
  Pagination,
  FreeMode
} from "swiper/modules";
import { PROJECTS } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "./ProjectCard/ProjectCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

import "./Projects.css";
export const Projects = () => {
  const [active, setActive] = useState(false);

  const [index, setIndex] = useState(0);
  const handleClick = (index) => {
    handleIndex(index);
    setActive(!active);
  };
  const handleIndex = (index) => {
    setIndex(index);
  };
  return (
    <section id="projects">
      <h6>Projects</h6>
      <div className="project-container">
        <div>
          {active ? (
            <ProjectCard
              index={index}
              handleClick={handleClick}
            />
          ) : (
            <Swiper
              // install Swiper modules
              modules={[EffectCoverflow, Navigation, Pagination, FreeMode]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              spaceBetween={50}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                scale: 1
              }}
              slideShadows={false}
              navigation
              pagination={{ clickable: true }}
              freeMode={{ enabled: true }}
              className="swiper-container">
              {PROJECTS.map((item, index) => (
                <SwiperSlide className="swiper-slide">
                  <img
                    src={item.imageURL}
                    alt={item.title}
                  />
                  <button
                    className="swiper-button"
                    onClick={() => handleClick(index)}>
                    Know More!
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};
