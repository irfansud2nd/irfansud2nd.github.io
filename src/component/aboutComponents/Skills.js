import React from "react";
import logoHtml from "../../img/logo-html.png";
import logoCss from "../../img/logo-css.png";
import logoBootstrap from "../../img/logo-bootstrap.png";
import logoSass from "../../img/logo-sass1.png";
import logoJs from "../../img/logo-js.png";
import logoNodejs from "../../img/logo-nodejs.png";
import logoReact from "../../img/logo-react.png";
import logoFirebase from "../../img/logo-firebase.png";
import "./../../css/skills.css";

export default function Skills() {
  return (
    <div id="skills">
      <h4 className="mb-3 section-title">Skills</h4>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={logoHtml} alt="logo HTML" />
          </div>
          <div className="slide">
            <img src={logoCss} alt="Logo CSS" />
          </div>
          <div className="slide">
            <img src={logoJs} alt="Logo JS" />
          </div>
          <div className="slide">
            <img src={logoBootstrap} alt="Logo Bootstrap" />
          </div>
          <div className="slide">
            <img src={logoSass} alt="Logo Sass" />
          </div>
          <div className="slide">
            <img src={logoNodejs} alt="Logo Node JS" />
          </div>
          <div className="slide">
            <img src={logoReact} alt="Logo React" />
          </div>
          <div className="slide">
            <img src={logoFirebase} alt="Logo Firebase" />
          </div>
          {/* duplicate slides */}
          <div className="slide">
            <img src={logoHtml} alt="logo HTML" />
          </div>
          <div className="slide">
            <img src={logoCss} alt="Logo CSS" />
          </div>
          <div className="slide">
            <img src={logoJs} alt="Logo JS" />
          </div>
          <div className="slide">
            <img src={logoBootstrap} alt="Logo Bootstrap" />
          </div>
          <div className="slide">
            <img src={logoSass} alt="Logo Sass" />
          </div>
          <div className="slide">
            <img src={logoNodejs} alt="Logo Node JS" />
          </div>
          <div className="slide">
            <img src={logoReact} alt="Logo React" />
          </div>
          <div className="slide">
            <img src={logoFirebase} alt="Logo Firebase" />
          </div>
        </div>
      </div>
    </div>
  );
}
