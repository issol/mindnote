import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogIn from 'modules/LogIn';
import Home from 'pages/Home';
import Auth from 'pages/Auth';
import ArticleForm from 'pages/ArticleForm';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exatt path="/home" component={Home} />
        <Route exact path="/create-article" component={ArticleForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
