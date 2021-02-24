import React from 'react';

import styled from 'styled-components';

import './styles.css';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  type: 'text' | 'email' | 'password';
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
  errorHandler: {
    isError: boolean;
    errorMessage: string;
  };
};

const TextInput: React.FC<InputProps> = ({ type, label, register, required, errorHandler }) => (
  <>
    <InputLabel>{label}</InputLabel>
    <input className={'input-field'} type={type} name={label} ref={register({ required })} />
    {errorHandler.isError && <ErrorMessage>{errorHandler.errorMessage}</ErrorMessage>}
  </>
);

const InputLabel = styled.label`
  width: 100%;
  height: 10px;
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 20px;
  color: black;
  font-size: 14px;
  font-weight: 200;
`;
const ErrorMessage = styled.p`
  color: #bf1650;
  display: inline;
`;
export default TextInput;
