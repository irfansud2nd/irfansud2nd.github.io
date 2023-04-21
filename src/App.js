import React, { Component } from "react";
import NavigationBar from "./component/NavigationBar";
import "./App.css";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: <Home />,
    };
  }
  changePage = (event) => {
    switch (event.target.textContent) {
      case "Home":
        this.setState({
          content: <Home />,
        });
        break;
      case "About":
        this.setState({
          content: <About />,
        });
        break;
      case "Contact":
        this.setState({
          content: <Contact />,
        });
        break;
      default:
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavigationBar changePage={this.changePage} />
        <div className="content">{this.state.content}</div>
      </React.Fragment>
    );
  }
}
