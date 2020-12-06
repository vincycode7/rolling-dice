import React, { Component } from "react";

import "./Die.css";

class Die extends Component {
  state = {};
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.dieFace} ${
          this.props.rolling ? "Die-animate" : ""
        }`}
      ></i>
    );
  }
}

export default Die;
