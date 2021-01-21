import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogIn from 'modules/LogIn';
import Home from 'pages/Home';
import Auth from 'pages/Auth';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exatt path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
