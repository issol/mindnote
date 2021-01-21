import TextInput from 'components/TextInput';
import React from 'react';
import './styles.css';
const SignUpPresenter = ({
  userReducer,
  ChangeEmail,
  ChangePassword,
  ChangeName,
  HandelSignUp,
}) => {
  return (
    <div id="register" className="input-group">
      <TextInput
        type={'email'}
        label={'Email'}
        value={userReducer.signUpInfo.email}
        onChange={ChangeEmail}
      />
      <TextInput
        type={'password'}
        label={'Password'}
        value={userReducer.signUpInfo.password}
        onChange={ChangePassword}
      />
      <TextInput
        type={'text'}
        label={'Name'}
        value={userReducer.signUpInfo.name}
        onChange={ChangeName}
      />
      <button className="signup" onClick={HandelSignUp}>
        SignUp
      </button>
    </div>
  );
};

export default SignUpPresenter;
