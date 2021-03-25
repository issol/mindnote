import React from 'react';
import styled from 'styled-components';
import { ModalProps } from './containter';

const ModalPresenter = ({ isOpen, children, setIsOpen }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <Container>
          <Overlay
            onClick={() => {
              setIsOpen(false);
              window.history.back();
            }}
          />
          <Contents>{children}</Contents>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.common.flexRow}
  ${({ theme }) => theme.common.flexCenter}

  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  text-align: center;
  width: 360px;
  max-width: 480px;

  margin: 0 auto;
  padding: 30px 20px;
`;

export default ModalPresenter;
