import React from "react";
import HomePage from "../pages/HomePage/";
import AdmLoginPage from "../pages/AdmLoginPage/";
import CandidateSignUpPage from "../pages/CandidateSignUpPage/";
import TripsPage from "../pages/TripsPage/";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <AdmLoginPage />
        </Route>
        <Route exact path="/viagens/cadastrar">
          <CandidateSignUpPage />
        </Route>
        <Route exact path="/viagens">
          <TripsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
