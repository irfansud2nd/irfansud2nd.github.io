import React, { useState } from "react";
import "./../css/about.css";
import Carousel from "./aboutComponents/Carousel";
import Skills from "./aboutComponents/Skills";
import Certifications from "./aboutComponents/Certifications";
import AboutMe from "./aboutComponents/AboutMe";
import Education from "./aboutComponents/Education";
import calculatorDetail from "../img/calculator-detail.png";
import pomodoroDetail from "../img/pomodoro-detail.png";
import numbersDetail from "../img/4numbers-detail.png";
import sudGarageDetail from "../img/sudGarage-detail.png";

export default function About() {
  window.onclick = (event) => {
    if (
      !event.target.closest(".hidden-test") &&
      data !== 0 &&
      event.target.className !== "button-detail"
    ) {
      document.getElementById("detail-close").click();
    }
  };
  const [data, setData] = useState(0);
  const [imgIndex, setImgIndex] = useState("");

  const imgCollection = [
    calculatorDetail,
    pomodoroDetail,
    numbersDetail,
    sudGarageDetail,
  ];

  const hideDetail = (id) => {
    document.getElementById(id).click();
    setData(0);
  };
  const getContent = (data, i) => {
    setData(data);
    setImgIndex(i);
  };
  return (
    <div className="container" id="about">
      <div className="hidden-test">
        <button
          className="detail-items"
          id="detail-close"
          onClick={() => {
            hideDetail(data.id);
          }}
        >
          X
        </button>
        <div className="detail-items mt-4" id="detail-title">
          Detail
        </div>
        <div
          className="row align-items-center w-100 p-2 detail-items mh-100"
          id="detail-content"
        >
          <div className="col-md-4 ">
            <img
              src={imgCollection[imgIndex]}
              className="mh-100 mw-100"
              id="detail-img"
            />
          </div>
          <div className="col-md-8">
            <p className=" text-justify">{data.detail}</p>
            <div className="d-flex">
              {data.techStack
                ? data.techStack.map((item) => {
                    return <p className="tech-stack">{item}</p>;
                  })
                : ""}
            </div>
            <a
              href={data.visit}
              target="_blank"
              className="button-visit badge mb-2"
            >
              Visit
            </a>
            {data.repo ? (
              <a
                href={data.repo}
                target="_blank"
                className="button-visit badge "
                style={{ marginLeft: "5px" }}
              >
                Repo
              </a>
            ) : (
              ""
            )}
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
          <Carousel getContent={getContent} />
          <Skills />
        </div>
      </div>
    </div>
  );
}
