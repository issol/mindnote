import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationPresenter from './presenter';

const NavigationContainer = () => {
  const history = useHistory();
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleLogOut = () => {
    if (window.confirm('로그아웃하시겠습니까?')) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
  };
  const handleMoveArticleListPage = () => {
    history.push('/article-list/');
  };

  useEffect(() => {
    const pageClick = (e: any) => {
      if (dropDownRef.current !== null && dropDownRef.current !== e.target) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener('click', pageClick);
    }
    return () => {
      window.removeEventListener('click', pageClick);
    };
  }, [isActive]);

  return (
    <NavigationPresenter
      isActive={isActive}
      dropDownRef={dropDownRef}
      setIsActive={setIsActive}
      handleLogOut={handleLogOut}
      handleMoveArticleListPage={handleMoveArticleListPage}
    />
  );
};

export default NavigationContainer;
