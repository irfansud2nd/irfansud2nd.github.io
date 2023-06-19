import React from "react";
import "./../css/about.css";
import Carousel from "./aboutComponents/Carousel";
import Skills from "./aboutComponents/Skills";
import Certifications from "./aboutComponents/Certifications";
import AboutMe from "./aboutComponents/AboutMe";
import Education from "./aboutComponents/Education";
import podomoro from "../img/podomoro.png";

export default function About() {
  const hideDetail = () => {
    document.getElementById("detail-podomoro").click();
  };
  return (
    <div className="container mt-1" id="about">
      <div className="hidden-test">
        Detail
        <div className="row align-items-center h-100" id="detail-content">
          <div className="col-md-4">
            <img src={podomoro} className="w-100" onClick={hideDetail} />
          </div>
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              natus ipsam recusandae saepe adipisci, culpa labore quae tenetur!
              Veniam neque quos, architecto voluptates perspiciatis qui
              consectetur iure sunt deserunt quae blanditiis, pariatur vero rem
              amet ducimus quibusdam debitis doloribus maiores recusandae,
              nostrum doloremque deleniti. Tenetur quos in reprehenderit eaque
              consequuntur.
            </p>
          </div>
        </div>
      </div>
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
