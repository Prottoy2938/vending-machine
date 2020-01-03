import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Sardines.css";

export default class Sardines extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact className="back">
          Back
        </NavLink>
        <h1>Don't eat sardines or else they will eat you</h1>
      </div>
    );
  }
}
