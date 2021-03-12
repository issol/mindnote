import React, { useEffect } from 'react';
import ModalPresenter from './presenter';

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const ModalContainer = ({ isOpen, children, setIsOpen }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      window.history.pushState(null, '', window.location.href);
    }
    window.onpopstate = () => {
      setIsOpen(false);
    };
  }, [isOpen]);

  return <ModalPresenter isOpen={isOpen} children={children} setIsOpen={setIsOpen} />;
};

export default ModalContainer;
