import React, { Component } from "react";
import NavigationBar from "./component/NavigationBar";
import "./App.css";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

let timer;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "Home",
    };
  }

  changePage = (event) => {
    if (event.target.textContent === "Irfansud's Website") {
      event.target.textContent = "Home";
    }
    clearInterval(timer);
    if (this.state.content != event.target.textContent) {
      this.addAnimation(this.state.content);
      timer = setInterval(() => {
        this.setState({
          content: event.target.textContent,
        });
      }, 1000);
    }
  };

  addAnimation = (comp) => {
    switch (comp) {
      case "Home":
        document.querySelector("img").style.animation = "toLeftPc 1s forwards";
        document.querySelector(
          ".animated-title > div.text-top div"
        ).style.animation = "toBottom 1s forwards";
        document.querySelector(
          ".animated-title > div.text-bottom div"
        ).style.animation = "toTop 1s forwards";
        document.querySelector(
          ".animated-title > div.text-top"
        ).style.animation = "fadeOut 1s forwards";
        break;
      case "About":
        document.getElementById("left-section").style.animation =
          "toLeftA 1s forwards";
        document.getElementById("right-section").style.animation =
          "toRightA 1s forwards";
        break;
      case "Contact":
        document.querySelector(".top-box h1").style.animation =
          "toBottomC 1s forwards";
        document.querySelector(".bottom-box-content").style.animation =
          "toTopC 1s forwards";
        document.querySelector(".top-box").style.animation =
          "fadeOutC 1s forwards";
        break;
      default:
        break;
    }
  };

  render() {
    let content;
    switch (this.state.content) {
      case "About":
        content = <About />;
        break;
      case "Home":
        content = <Home />;
        break;
      case "Contact":
        content = <Contact />;
        break;
      default:
        content = <Home />;
        break;
    }
    return (
      <React.Fragment>
        <NavigationBar changePage={this.changePage} />
        <div className="content">{content}</div>
      </React.Fragment>
    );
  }
}
