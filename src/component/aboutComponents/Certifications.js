import React from "react";

export default function Certifications() {
  return (
    <div id="certifications">
      <h4 className="mb-3 section-title">Certifications</h4>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h6>Responsive Web Design</h6>
          <p>freeCodeCamp.org</p>
        </div>
        <a
          href="https://www.freecodecamp.org/certification/fcc9ff89252-49db-4f88-b62c-99edbc088d36/responsive-web-design"
          target="_blank"
          className="button-view badge"
        >
          View
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h6>Front End Development Libraries</h6>
          <p>freeCodeCamp.org</p>
        </div>
        <a
          href="https://www.freecodecamp.org/certification/fcc9ff89252-49db-4f88-b62c-99edbc088d36/front-end-development-libraries"
          target="_blank"
          className="button-view badge"
        >
          View
        </a>
      </div>
    </div>
  );
}
