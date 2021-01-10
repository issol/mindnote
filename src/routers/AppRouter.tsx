import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Initializing from "../pages/Initializing";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Initializing} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/main" exact component={Main} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
