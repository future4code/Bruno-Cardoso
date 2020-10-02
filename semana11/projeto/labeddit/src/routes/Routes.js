import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPosts from "../screens/FeedPosts";
import HomePage from "../screens/HomePage";
import PostPage from "../screens/PostPage";
import SignUpPage from "../screens/SignUpPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={"/cadastre-se"}>
          <SignUpPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={"/feed"}>
          <FeedPosts />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={"/posts/comentarios"}>
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
