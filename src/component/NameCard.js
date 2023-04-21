import React from "react";
import "./../css/namecard.css";

export default function NameCard() {
  return (
    <div id="name-card" className="p-1">
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Hi,</span>
            <span>i'm Irfansud</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>A Frontend Developer</div>
        </div>
      </div>
    </div>
  );
}
