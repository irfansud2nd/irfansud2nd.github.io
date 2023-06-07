import React from "react";
import logoPolman from "../img/logo-polman.png";
import logoSmansa from "../img/logo-smansa.png";
import logoHtml from "../img/logo-html.png";
import logoCss from "../img/logo-css.png";
import logoJs from "../img/logo-js.png";
import logoReact from "../img/logo-react.png";
import podomoro from "../img/podomoro.jpg";
import calculator from "../img/calculator.jpg";
import numbers from "../img/4numbers.png";
import "./../css/about.css";

export default function About() {
  return (
    <div className="container mt-1" id="about">
      <div className="row " id="test">
        <div className="col-md-5" id="left-section">
          <div id="education">
            <h4 className="mb-3 section-title">Education</h4>
            <div className="row">
              <div className="d-flex">
                <img
                  alt="logo-polman"
                  src={logoPolman}
                  className="section-img mr-5"
                  id="inline"
                />
                <div>
                  <h6>Politeknik Manufaktur Bandung</h6>
                  <p>Mechatronic | GPA : 3.47</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-flex">
                <img
                  alt="logo-smansa"
                  className="section-img"
                  src={logoSmansa}
                />
                <div>
                  <h6>SMA Negeri 1 Bandung</h6>
                  <p>Ilmu Pengetahuan Alam | GPA : 3.47</p>
                </div>
              </div>
            </div>
          </div>
          <div id="skills">
            <h4 className="mb-3 section-title">Skills</h4>
            <div className="row">
              <div className="d-flex">
                <img alt="logo-html" src={logoHtml} className="section-img" />
                <div>
                  <h6>HTML</h6>
                  <p>Semantics, Forms and Validations</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-flex">
                <img alt="logo-css" src={logoCss} className="section-img" />
                <div>
                  <h6>CSS</h6>
                  <p>Vanilla, Bootstrap, Sass</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-flex">
                <img alt="logo-js" src={logoJs} className="section-img" />
                <div>
                  <h6>Javascript</h6>
                  <p>DOM, Asynchronous</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-flex">
                <img alt="logo-react" src={logoReact} className="section-img" />
                <div>
                  <h6>React</h6>
                  <p>Conditional Rendering, React Hooks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7" id="right-section">
          <h4 className="mb-3 section-title about-me">About me</h4>
          <p>
            I'm a mechhatronic's fresh graduate who seek for new opportunities,
            experiences and carreers in software engineering world. I am a
            self-taught front end developer, so i am so happy if you can give me
            the opportunity to present my skills and gain new knowledge in a
            profesional career. &nbsp;
            <a
              href="https://drive.google.com/file/d/1nLa4hx7Qy2J5MwA-zrYj0lY5DDqkhh4o/view"
              target="_blank"
              className="button-cv badge"
            >
              View CV
            </a>
          </p>
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
                    <h5 style={{ marginBottom: "5px" }}>
                      React Podomoro Timer
                    </h5>
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
                      href="https://irfansud2nd.github.io/guess-the-4-numbers/"
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
      </div>
      <div className="row" id="certifications">
        <div className="col-lg-3 d-flex align-items-center">
          <h4 className="mb-3 section-title-side ">Certifications</h4>
        </div>
        <div className="col-lg-4 d-flex align-items-center certification">
          <div>
            <h6>Responsive Web Design</h6>
            <p>freeCodeCamp.org</p>
          </div>
          <div>
            <a
              href="https://www.freecodecamp.org/certification/fcc9ff89252-49db-4f88-b62c-99edbc088d36/responsive-web-design"
              target="_blank"
              className="button-view badge"
            >
              View
            </a>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center certification">
          <div>
            <h6>Front End Development Libraries</h6>
            <p>freeCodeCamp.org</p>
          </div>
          <div>
            <a
              href="https://www.freecodecamp.org/certification/fcc9ff89252-49db-4f88-b62c-99edbc088d36/front-end-development-libraries"
              target="_blank"
              className="button-view badge"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
