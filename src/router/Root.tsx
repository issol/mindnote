import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LogIn from "pages/LogIn";
import Home from "pages/Home";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exatt path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
