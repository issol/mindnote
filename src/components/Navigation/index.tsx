import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import dropDownImage from 'assets/images/dropdown.svg';

type NavProps = {
  isActive: boolean;
};

const Navigation = () => {
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
    <NavBaseBar>
      <Logo onClick={handleMoveArticleListPage}>MINDNOTE</Logo>

      <DropDownArrow onClick={() => setIsActive(!isActive)} />
      <DropDown ref={dropDownRef} isActive={isActive}>
        <DropDownMenu className={`${isActive ? 'active' : 'inactive'}`}>
          <DropDownContentWrapper>
            <DropDownContent>내글보기</DropDownContent>
          </DropDownContentWrapper>
          <DropDownContentWrapper>
            <DropDownContent onClick={handleLogOut}>로그아웃</DropDownContent>
          </DropDownContentWrapper>
        </DropDownMenu>
      </DropDown>
    </NavBaseBar>
  );
};

const NavBaseBar = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #ffad06, #ff105f);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropDownArrow = styled.div`
  background-image: url(${dropDownImage});
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 150px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  padding-top: 15px;
  font-size: 20px;
`;

const DropDownContent = styled.div`
  text-decoration: none;
  color: #333333;
  padding: 15px 20px;
  display: block;
  cursor: pointer;
`;

const DropDownContentWrapper = styled.li`
  border-bottom: 1px solid #dddddd;
`;

const DropDownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropDown = styled.nav<NavProps>`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  
  opacity: ${(props) => (props.isActive ? '1;' : '0;')}
  visibility: ${(props) => (props.isActive ? 'visible;' : 'hidden;')};
  transform : ${(props) => (props.isActive ? 'translateY(0);' : 'translateY(-20px);')};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

export default Navigation;
