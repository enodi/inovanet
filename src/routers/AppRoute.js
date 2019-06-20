import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import IndexPage from "../components/Home";
import SignInPage from "../components/Signin/SignInPage";
import Dashboard from "../components/Dashboard";
import NotFoundPage from "../common/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRoute = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" exact component={IndexPage}/>
      <PublicRoute path="/signin" component={SignInPage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);

export default AppRoute;