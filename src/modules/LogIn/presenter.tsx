import TextInput from 'components/TextInput';
import React from 'react';
import './styles.css';

const LogInPresenter = ({
  userReducer,
  changeEmail,
  changePassword,
  handleLogin,
}) => {
  return (
    <div className="input-group">
      <TextInput
        type={'email'}
        label={'Email'}
        value={userReducer.logInInfo.email}
        onChange={changeEmail}
      />
      <TextInput
        type={'password'}
        label={'Password'}
        value={userReducer.logInInfo.password}
        onChange={changePassword}
      />
      <button className="login" onClick={handleLogin}>
        LogIn
      </button>
    </div>
  );
};

export default LogInPresenter;
