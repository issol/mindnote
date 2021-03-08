import React from 'react';

import styled from 'styled-components';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal = ({ isOpen, children, setIsOpen }: Props) => {
  return isOpen ? (
    <Container>
      <Overlay
        onClick={(event) => {
          setIsOpen(false);
        }}
      />
      <Contents>{children}</Contents>
    </Container>
  ) : (
    <></>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Contents = styled.div`
  box-sizing: border-box;
  position: relative;
  top: 0px;
  padding: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  text-align: center;
  width: 360px;
  max-width: 480px;
  height: 300px;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

export default Modal;
