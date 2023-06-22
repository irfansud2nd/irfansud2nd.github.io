import React from "react";
import pomodoro from "../../img/pomodoro.png";
import calculator from "../../img/calculator.png";
import numbers from "../../img/4numbers.png";
import calculatorDetail from "../../img/calculator-detail.png";
import "../../css/carousel-detail.css";

export default function Carousel({ getContent }) {
  const detailContent = [
    {
      id: "detail-calculator",
      img: "calculatorDetail",
      detail:
        "This is a project that i built to complete the react development course from freeCodeCamp. It is built on React and have passed all the requirements demanded by freeCodeCamp, like negative number math operations, replacing operator. you can see the full requirements on codepen, just click visit button below. ",
      techStack: ["React", "Vanilla CSS"],
      visit: "https://codepen.io/irfansud2nd/pen/QWZXJVL",
    },
    {
      id: "detail-pomodoro",
      img: "pomodoroDetail",
      detail:
        "This is a project that i built to complete the react development course from freeCodeCamp. This app helps you to implement the pomodoro technique, a technique to increase your producivity by taking short break periodically. It is built on React and have passed all the requirements demanded by freeCodeCamp, this project is using React Hook to change the state every second for countdown timer. you can see the full requirements on codepen, just click visit button below.",
      techStack: ["React", "Vanilla CSS"],
      visit: "https://codepen.io/irfansud2nd/pen/oNaKebd",
    },
    {
      id: "detail-numbers",
      img: "numbersDetail",
      detail:
        "This is a simple game project that i built because i like to play this kind of game. In this game you need to guess a 4 numbers combination, the combination consists 4 different numbers, the games just gonna give you 2 clues which is correct number and correct position. you can read the full tutorial and try to play the game.",
      techStack: ["Vanilla JS", "Vanilla CSS"],
      visit: "https://irfansud2nd.github.io/guess-the-4-numbers/",
      repo: "https://github.com/irfansud2nd/guess-the-4-numbers",
    },
  ];
  const showHidden = (event) => {
    getContent(
      detailContent[
        detailContent.findIndex((elm) => elm.id === event.currentTarget.id)
      ],
      detailContent.findIndex((elm) => elm.id === event.currentTarget.id)
    );
    const target = document.getElementById(event.currentTarget.id);
    const element = document.querySelector(".hidden-test");
    const ref = document.getElementById("about");
    if (element.classList.contains("showed")) {
      element.style.animation = "growInverse 1s forwards";
      element.style["-webkit-transform"] = "growInverse 1s forwards";
      [...document.getElementsByClassName("detail-items")].map((elm) => {
        elm.style.animation = "fadeOutCD 1s forwards";
      });
      setTimeout(() => {
        target.style.display = "block";
        element.classList.toggle("showed");
      }, 1000);
    } else {
      console.log(
        target.getBoundingClientRect().top - ref.getBoundingClientRect().top
      );
      element.style.top = `${
        target.getBoundingClientRect().top - ref.getBoundingClientRect().top
      }px`;
      element.style.left = `${
        target.getBoundingClientRect().left - ref.getBoundingClientRect().left
      }px`;
      [...document.getElementsByClassName("detail-items")].map((elm) => {
        elm.style.animation = "fadeInCD 1s forwards";
      });
      target.style.display = "none";
      element.style.animation = "grow 1s forwards";
      element.style["-webkit-transform"] = "grow 1s forwards";
      element.classList.toggle("showed");
    }
  };
  return (
    <div>
      <h4 className="mb-3 section-title">Portfolio</h4>
      <div id="portfolios">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={numbers} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 style={{ marginBottom: "5px" }}>Guess The 4 Numbers</h5>
                <button
                  className="button-detail"
                  id="detail-numbers"
                  onClick={showHidden}
                >
                  Detail
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={calculator} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 style={{ marginBottom: "5px" }}>React Calculator</h5>
                <button
                  className="button-detail"
                  id="detail-calculator"
                  onClick={showHidden}
                >
                  Detail
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pomodoro} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 style={{ marginBottom: "5px" }}>React Pomodoro Timer</h5>
                <button
                  className="button-detail"
                  id="detail-pomodoro"
                  onClick={showHidden}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
