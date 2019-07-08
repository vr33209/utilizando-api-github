import React from "react";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./Pages/Main";
import Repository from "./Pages/Repository";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Repository/:repository" component={Repository} />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}
