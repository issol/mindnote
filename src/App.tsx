import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Root from 'router/Root';
import { RootState } from 'store';
import { logIn } from 'store/user/actions';

function App() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `token ${token}`;
      dispatch(logIn.success());
    } else {
      dispatch(logIn.failure(''));
    }
  }, []);

  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
