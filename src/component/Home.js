import React from "react";
import "./../css/home.css";
import NameCard from "./NameCard";
import Photocard from "./Photocard";

export default function Home() {
  return (
    <div id="home" className="p-2">
      <div className="row h-100">
        <div className="col-md-4 offset-md-1 my-auto">
          <NameCard />
        </div>
        <div className="col-md-4 offset-md-2 my-auto text-center">
          <Photocard />
        </div>
      </div>
    </div>
  );
}
