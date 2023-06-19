import React from "react";
import podomoro from "../../img/podomoro.png";
import calculator from "../../img/calculator.png";
import numbers from "../../img/4numbers.png";

export default function Carousel() {
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
                <a
                  href="https://codepen.io/irfansud2nd/pen/yLQLEZp"
                  target="_blank"
                  className="button-visit badge"
                >
                  Visit on Codepen
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={podomoro} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 style={{ marginBottom: "5px" }}>React Podomoro Timer</h5>
                <a
                  href="https://codepen.io/irfansud2nd/details/PoxoaRq"
                  target="_blank"
                  className="button-visit badge"
                >
                  Visit on Codepen
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={numbers} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 style={{ marginBottom: "5px" }}>Guess The 4 Numbers</h5>
                <a
                  href="https://irfansud2nd.github.io/guess-the-4-numbers/"
                  target="_blank"
                  className="button-visit badge"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/irfansud2nd/guess-the-4-numbers"
                  target="_blank"
                  className="button-visit badge"
                  style={{ marginLeft: "5px" }}
                >
                  Repo
                </a>
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
