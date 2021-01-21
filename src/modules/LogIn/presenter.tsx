import TextInput from 'components/TextInput';
import React from 'react';
import './styles.css';

const LogInPresenter = ({
  userReducer,
  ChangeEmail,
  ChangePassword,
  HandleLogin,
}) => {
  return (
    <div id="login" className="input-group">
      <TextInput
        type={'email'}
        label={'Email'}
        value={userReducer.logInInfo.email}
        onChange={ChangeEmail}
      />
      <TextInput
        type={'password'}
        label={'Password'}
        value={userReducer.logInInfo.password}
        onChange={ChangePassword}
      />
      <button className="login" onClick={HandleLogin}>
        LogIn
      </button>
    </div>
  );
};

export default LogInPresenter;
