import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/styles.scss";
import AppRoute from "./routers/AppRoute";
import { signin, logout } from "./actions/auth";

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>, document.getElementById("root"));

const token = localStorage.getItem("token");

if (token) {
  store.dispatch(signin(token))
} else {
  store.dispatch(logout());
}
