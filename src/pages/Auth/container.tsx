import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'store';
import AuthPresenter from './presenter';

const AuthContainer = () => {
  const [authType, setAuthType] = useState('LogIn');

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const handleAuthType = () => {
    if (authType === 'LogIn') {
      setAuthType('SignUp');
    } else if (authType === 'SignUp') {
      setAuthType('LogIn');
    }
  };

  return (
    <>
      {userReducer.isLoggedIn ? (
        <Redirect to="/article-list" />
      ) : (
        <AuthPresenter authType={authType} handleAuthType={handleAuthType} />
      )}
    </>
  );
};

export default AuthContainer;
