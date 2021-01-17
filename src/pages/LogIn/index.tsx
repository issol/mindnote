import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, setLogInInfo } from "store/users/actions";
import { RootState } from "store";
import TextInput from "components/TextInput";

import "./styles.css";
import SignUp from "pages/SingUp";

const LogIn = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const loginHandler = (e: any) => {
    dispatch(logIn.request(userReducer.logInInfo));
    console.log(userReducer.isLoggedIn);
  };

  const emailChange = (value: string) => {
    dispatch(setLogInInfo({ email: value }));
  };
  const passwordChange = (value: string) => {
    dispatch(setLogInInfo({ password: value }));
  };

  const toggleChange = () => setVisible((prev) => !prev);

  return (
    <div className="wrap">
      <div className="form-wrap">
        <div className="button-wrap">
          {visible && <div id="btn"></div>}
          <button type="button" className="togglebtn" onClick={toggleChange}>
            LogIn
          </button>
          {!visible && <div id="btn2"></div>}
          <button type="button" className="togglebtn" onClick={toggleChange}>
            SignUp
          </button>
        </div>
        {visible ? (
          <>
            <form id="login" action="" className="input-group">
              <TextInput
                type={"email"}
                label={"Email"}
                value={userReducer.logInInfo.email}
                onChange={emailChange}
              />
              <TextInput
                type={"password"}
                label={"Password"}
                value={userReducer.logInInfo.password}
                onChange={passwordChange}
              />
              <button className="submit" onClick={loginHandler}>
                Login
              </button>
            </form>
          </>
        ) : (
          <SignUp />
        )}
      </div>
      <h1>{userReducer.isLoggedIn ? "yes" : "no"}</h1>
    </div>
  );
};

export default LogIn;
