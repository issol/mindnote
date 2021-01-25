import TextInput from 'components/TextInput';
import React from 'react';
import './styles.css';
const SignUpPresenter = ({
  userReducer,
  changeEmail,
  changePassword,
  changeName,
  handelSignUp,
}) => {
  return (
    <div className="input-group">
      <TextInput
        type={'email'}
        label={'Email'}
        value={userReducer.signUpInfo.email}
        onChange={changeEmail}
      />
      <TextInput
        type={'password'}
        label={'Password'}
        value={userReducer.signUpInfo.password}
        onChange={changePassword}
      />
      <TextInput
        type={'text'}
        label={'Name'}
        value={userReducer.signUpInfo.name}
        onChange={changeName}
      />
      <button className="signup" onClick={handelSignUp}>
        SignUp
      </button>
    </div>
  );
};

export default SignUpPresenter;
