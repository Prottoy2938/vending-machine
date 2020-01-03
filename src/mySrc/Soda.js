import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Soda.scss";

export default class Sardines extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact className="back">
          Back
        </NavLink>
        <h1> Get as many as you want</h1>

        {/* <!-- Inicial --> */}
        <div class="wrapper-box">
          {/* <!-- Massa --> */}
          <div class="massa"></div>

          {/* <!-- Recheio --> */}
          <div class="salada"></div>
          <div class="salada s1"></div>
          <div class="salada s2"></div>
          <div class="salada s3"></div>
          <div class="salada s4"></div>
          <div class="salada s5"></div>
          <div class="salada s6"></div>
          <div class="salada s7"></div>
          <div class="salada s8"></div>
          <div class="salada s9"></div>

          {/* <!-- Eyes --> */}
          <div class="eyes -left"></div>
          <div class="eyes -rigth"></div>

          {/* <!-- Massa Back --> */}
          <div class="massa back"></div>

          {/* <!-- Mordida  --> */}
          <div class="mordida"></div>
          <div class="mordida2"></div>
          <div class="mordida3"></div>
        </div>
      </div>
    );
  }
}
