import React from "react";
import logoPolman from "../../img/logo-polman.png";

export default function Education() {
  return (
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
    </div>
  );
}
