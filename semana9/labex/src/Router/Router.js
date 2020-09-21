import React from "react";
import HomePage from "../pages/HomePage/";
import AdmLoginPage from "../pages/AdmLoginPage/";
import CandidateSignUpPage from "../pages/CandidateSignUpPage/";
import TripsPage from "../pages/TripsPage/";
import TripDetailsPage from "../pages/TripDetailsPage/";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
        <Route exact path="/viagens/detalhes">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
