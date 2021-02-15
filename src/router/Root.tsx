import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Auth from 'pages/Auth';
import AuthenticatedRouter from './AuthenticatedRouter';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <AuthenticatedRouter />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
