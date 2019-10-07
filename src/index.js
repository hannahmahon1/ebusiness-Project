import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import PartialPassword from "./PartialPassword";
import Success from "./Success";

const Routes = () => (
  //re routes you to partial password page when entered correctly, will add a success page also
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/partialPassword" component={PartialPassword} />
      <Route path="/success" component={Success} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
