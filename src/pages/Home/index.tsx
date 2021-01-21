import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Home = () => {
  const HandleLogOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <>
      <div>
        <button type="button" onClick={HandleLogOut}>
          logout
        </button>
      </div>
    </>
  );
};

export default Home;
