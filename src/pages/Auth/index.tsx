import LogIn from 'modules/LogIn';
import SignUp from 'modules/SingUp';
import React, { useState } from 'react';
import './styles.css';
const Auth = () => {
  const [changeAuthType, setChangeAuthType] = useState(true);
  const HandleAuthType = () => setChangeAuthType((type) => !type);

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

export default Auth;
