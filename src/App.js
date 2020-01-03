import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Chips from "./Chips";
import Missing from "./Missing";
import Navbar from "./NavBar";
function App() {
  console.log(
    "Vending Machine icon icon by Icons8",
    "https://icons8.com/icons/set/vending-machine"
  );

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />

        <Route
          exact
          path="/vending-machine"
          render={() => <VendingMachine />}
        />
        <Route exact path="/soda" render={() => <Soda />} />

        <Route path="/chips" render={() => <Chips />} />
        <Route path="/sardines" render={() => <Sardines />} />

        <Route component={Missing} />
      </Switch>
    </div>
  );
}

export default App;
