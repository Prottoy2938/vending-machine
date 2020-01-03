import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./VendingMachine.css";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

export default class VendingMachine extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/getsoda" activeClassName="active" className="btn">
          Get Burger
        </NavLink>
        <NavLink activeClassName="active" exact to="/getchips" className="btn">
          Get Chips
        </NavLink>
        <NavLink
          activeClassName="active"
          exact
          to="/getsardines"
          className="btn"
        >
          Get Sardines
        </NavLink>

        <h1>Hello! I am a VendingMachine. What would you like to Eat?</h1>

        <Switch>
          <Route exact path="/getsoda" component={Soda} />
          <Route exact path="/getchips" component={Chips} />
          <Route exact path="/getsardines" component={Sardines} />
        </Switch>
      </div>
    );
  }
}
