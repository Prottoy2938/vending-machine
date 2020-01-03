import React, { Component } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink exact to="/vending-machine" activeClassName="Navbar-active">
          Home
        </NavLink>
        <NavLink exact to="/soda" activeClassName="Navbar-active">
          Soda
        </NavLink>
        <NavLink exact to="/sardines" activeClassName="Navbar-active">
          Sardine
        </NavLink>
        <NavLink exact to="/chips" activeClassName="Navbar-active">
          Chips
        </NavLink>
      </div>
    );
  }
}
