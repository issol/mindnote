import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'store';
import AuthPresenter from './presenter';

const AuthContainer = () => {
  const [authType, setAuthType] = useState('LogIn');
  const handleAuthType = () => {
    if (authType === 'LogIn') {
      setAuthType('SignUp');
    } else if (authType === 'SignUp') {
      setAuthType('LogIn');
    }
  };
  const userReducer = useSelector((state: RootState) => state.userReducer);
  return (
    <>
      {userReducer.isLoggedIn ? (
        <Redirect to="/home" />
      ) : (
        <AuthPresenter authType={authType} handleAuthType={handleAuthType} />
      )}
    </>
  );
};

export default AuthContainer;
