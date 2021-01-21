import React, { useEffect, useState } from 'react';
import AuthPresenter from './presenter';

const AuthContainer = () => {
  useEffect(() => {
    console.log(localStorage.getItem('token'));
  });
  const [changeAuthType, setChangeAuthType] = useState(true);
  const HandleAuthType = () => setChangeAuthType((type) => !type);
  return (
    <AuthPresenter
      changeAuthType={changeAuthType}
      HandleAuthType={HandleAuthType}
    />
  );
};

export default AuthContainer;
