import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Root from 'router/Root';
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
  }, [dispatch, token]);

  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
