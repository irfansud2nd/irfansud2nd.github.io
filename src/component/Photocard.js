import React from "react";
import profile from "../img/profile.png";
import "./../css/photocard.css";

export default function Photocard() {
  return (
    <div id="photocard">
      <img src={profile} className="rounded-circle img-fluid" />
    </div>
  );
}
