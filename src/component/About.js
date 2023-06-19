import React from "react";
import "./../css/about.css";
import Carousel from "./aboutComponents/Carousel";
import Skills from "./aboutComponents/Skills";
import Certifications from "./aboutComponents/Certifications";
import AboutMe from "./aboutComponents/AboutMe";
import Education from "./aboutComponents/Education";

export default function About() {
  return (
    <div className="container mt-1" id="about">
      <div className="row">
        <div
          className="col-lg-4 d-flex flex-column justify-content-between"
          id="left-section"
        >
          <AboutMe />
          <Education />
          <Certifications />
        </div>
        <div
          className="col-lg-8 d-flex flex-column justify-content-between"
          id="right-section"
        >
          <Carousel />
          <Skills />
        </div>
      </div>
    </div>
  );
}
