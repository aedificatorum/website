import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./About";

function App() {
  return (
    <div>
      <img src="aedificatorum-logo.png" alt="aedificatorum-logo" className="logo-home"/>
      <h1>We are Aedificatorum</h1>
      <h2>/ɑədɪfɪkætɒrʊəm/</h2>
      {/* <NavLink to="/about">
        <h3>About</h3>
      </NavLink> */}
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
