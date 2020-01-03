import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Chips.css";

export default class Chips extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact className="back">
          Back
        </NavLink>
        <h1>Chips</h1>
        <h2>Take as many chips as you like</h2>
      </div>
    );
  }
}
