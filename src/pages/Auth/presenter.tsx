import React from 'react';
import LogIn from 'modules/LogIn';
import SignUp from 'modules/SingUp';

import './styles.css';

type AuthType = {
  changeAuthType: boolean;
  HandleAuthType: React.MouseEventHandler<HTMLButtonElement>;
};

const AuthPresenter = ({ changeAuthType, HandleAuthType }: AuthType) => {
  return (
    <div className="wrap">
      <div className="form-wrap">
        <div className="button-wrap">
          {changeAuthType && <div className="LogInToggle" />}
          <button type="button" className="type-btn" onClick={HandleAuthType}>
            LogIn
          </button>
          {!changeAuthType && <div className="SignUpToggle" />}
          <button type="button" className="type-btn" onClick={HandleAuthType}>
            SignUp
          </button>
        </div>
        {changeAuthType ? <LogIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthPresenter;
