import { Redirect, Route } from 'react-router-dom';

import ArticleList from 'pages/ArticleList';
import WriteArticle from 'pages/ArticleDetail';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

const AuthenticatedRouter = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);

  const getRouteListOrRedirect = () => {
    switch (userReducer.isLoggedIn) {
      case null:
        return null;
      case true:
        return (
          <>
            <Route exact path="/article-list" component={ArticleList} />
            <Route path="/article/:id" component={WriteArticle} />
          </>
        );
      case false:
        return <Redirect to="/" />;
    }
  };

  return getRouteListOrRedirect();
};

export default AuthenticatedRouter;
