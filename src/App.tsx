import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Root from 'router/Root';
import { RootState } from 'store';

function App() {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `token ${token}`;
    }
  }, []);

  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
