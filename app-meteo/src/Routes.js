import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Result from "./components/Result/Result";
import Home from "./components/Home/Home";
import history from './history';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/result">
                <Result />
            </Route>
        </Switch>
    </Router>
    )
}
export default Routes;