import React from "react";
import pomodoro from "../../img/pomodoro.png";
import calculator from "../../img/calculator.png";
import numbers from "../../img/4numbers.png";
import "../../css/carousel-detail.css";

export default function Carousel({ getContent }) {
  const detailContent = [
    {
      id: "detail-calculator",
      img: "cd",
      detail:
        "ini adalah detail dari project calculator,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam laboriosam nam sapiente beatae asperiores a tempora atque possimus. Deserunt quidem explicabo at, nihil totam dolores reiciendis officiis recusandae distinctio ea libero adipisci repellat eum laboriosam? Adipisci aut, id sapiente ad explicabo numquam, distinctio ducimus nihil tempore illum sunt? Adipisci, repudiandae?",
      techStack: ["react", "vanilla CSS"],
      visit: "https://codepen.io/irfansud2nd/pen/yLQLEZp",
    },
    {
      id: "detail-pomodoro",
      img: "pomodoroDetail",
      detail:
        "ini adalah detail dari project pomodoro,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam laboriosam nam sapiente beatae asperiores a tempora atque possimus. Deserunt quidem explicabo at, nihil totam dolores reiciendis officiis recusandae distinctio ea libero adipisci repellat eum laboriosam? Adipisci aut, id sapiente ad explicabo numquam, distinctio ducimus nihil tempore illum sunt? Adipisci, repudiandae?",
      techStack: ["react", "vanilla CSS"],
      visit: "https://codepen.io/irfansud2nd/details/PoxoaRq",
    },
    {
      id: "detail-numbers",
      img: "numbersDetail",
      detail:
        "ini adalah detail dari project numbers,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam laboriosam nam sapiente beatae asperiores a tempora atque possimus. Deserunt quidem explicabo at, nihil totam dolores reiciendis officiis recusandae distinctio ea libero adipisci repellat eum laboriosam? Adipisci aut, id sapiente ad explicabo numquam, distinctio ducimus nihil tempore illum sunt? Adipisci, repudiandae?",
      techStack: ["vanilla JS", "vanilla CSS"],
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
    if (element.classList.contains("showed")) {
      element.style.animation = "growInverse 1s forwards";
      [...document.getElementsByClassName("detail-items")].map(
        (elm) => (elm.style.animation = "fadeOutCD 1s forwards")
      );
      setTimeout(() => {
        element.style.top = `${
          target.getBoundingClientRect().top + window.scrollY
        }px`;
        element.style.left = `${
          target.getBoundingClientRect().left + window.scrollX
        }px`;
        target.style.display = "block";
        element.classList.toggle("showed");
      }, 1000);
    } else {
      [...document.getElementsByClassName("detail-items")].map(
        (elm) => (elm.style.animation = "fadeInCD 1s forwards")
      );
      element.style.top = `${
        target.getBoundingClientRect().top + window.scrollY
      }px`;
      element.style.left = `${
        target.getBoundingClientRect().left + window.scrollX
      }px`;
      target.style.display = "none";
      element.style.animation = "grow 1s forwards";
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
            <div className="carousel-item">
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
