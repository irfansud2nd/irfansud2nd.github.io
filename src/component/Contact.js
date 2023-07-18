import React, { Component } from "react";
import "./../css/contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div
        className="container d-flex flex-column justify-content-center align-items-center h-100"
        id="contact"
      >
        <div className="top-box">
          <h1 className="text-center">
            Let's work together <i className="bi bi-emoji-smile"></i>
          </h1>
        </div>
        <div className="bottom-box">
          <div className="bottom-box-content">
            <div className="d-flex justify-content-evenly">
              <a href="mailto: irfansudiningrat@gmail.com">
                <i className="bi bi-envelope"></i> Email
              </a>
              <a href="https://www.linkedin.com/in/irfansud/">
                <i className="bi bi-linkedin"></i> Linkedin
              </a>
              <a href="https://github.com/irfansud2nd">
                <i className="bi bi-github"></i> Github
              </a>
              <a href="https://codepen.io/irfansud2nd">
                <i className="bi bi-box"></i> Codepen
              </a>
            </div>
            <a
              href="https://github.com/irfansud2nd/irfansud2nd.github.io"
              target="_blank"
              className="badge visit-bottom mt-1 d-flex justify-content-center"
            >
              Visit repo of this website
            </a>
          </div>
        </div>
      </div>
    );
  }
}
