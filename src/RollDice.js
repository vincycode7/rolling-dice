import React, { Component } from "react";

import Die from "./Die";
import "./RollDice.css";

class RollDie extends Component {
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }

  static defaultProps = {
    numOfDie: 2,
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  roll() {
    var rollbtn = document.getElementById("rollbtn");
    rollbtn.style.cursor = "progress";

    //   pick 2 new rolls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ rolling: true });
    setTimeout(() => {
      //  update die1 and die2
      this.setState({ die1: newDie1, die2: newDie2 });
      rollbtn.style.cursor = "pointer";

      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div>
          <Die dieFace={this.state.die1} rolling={this.state.rolling} />
          <Die dieFace={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button
          onClick={this.roll}
          id="rollbtn"
          disabled={this.state.rolling ? true : false}
        >
          {this.state.rolling ? "Rolling" : "RollDice"}
        </button>
      </div>
    );
  }
}

export default RollDie;
