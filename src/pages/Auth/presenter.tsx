import React from 'react';
import LogIn from 'modules/LogIn';
import SignUp from 'modules/SingUp';

import './styles.css';

type AuthType = {
  changeAuthType: boolean;
  handleAuthType: React.MouseEventHandler<HTMLButtonElement>;
};

const AuthPresenter = ({ changeAuthType, handleAuthType }: AuthType) => {
  return (
    <div className="wrap">
      <div className="form-wrap">
        <div className="button-wrap">
          {changeAuthType && <div className="LogInToggle" />}
          <button type="button" className="type-btn" onClick={handleAuthType}>
            LogIn
          </button>
          {!changeAuthType && <div className="SignUpToggle" />}
          <button type="button" className="type-btn" onClick={handleAuthType}>
            SignUp
          </button>
        </div>
        {changeAuthType ? <LogIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthPresenter;
