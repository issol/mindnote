import React from 'react';
import './styles.css';
const Navigation = () => {
  const HandleLogOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <div className="nav">
      <button type="button" className="logout" onClick={HandleLogOut}>
        logout
      </button>
    </div>
  );
};

export default Navigation;
