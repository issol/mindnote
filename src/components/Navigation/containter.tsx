import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationPresenter from './presenter';

import Swal from 'sweetalert2';

const NavigationContainer = () => {
  const history = useHistory();
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleLogOut = async () => {
    const result = await Swal.fire({
      title: '로그아웃하시겠습니까?',

      cancelButtonText: '취소',
      confirmButtonText: '확인',
      cancelButtonColor: '#dcdcdc',
      confirmButtonColor: '#ff105f',
      showCancelButton: true,

      icon: 'warning',
      width: '30%',
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
  };
  const handleMoveArticleListPage = () => {
    history.push('/article-list/');
  };

  const handleMoveMyArticlePage = () => {
    history.push('/my-article');
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
      handleMoveMyArticlePage={handleMoveMyArticlePage}
    />
  );
};

export default NavigationContainer;
