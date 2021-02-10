import React from 'react';
import styled from 'styled-components';
import './styles.css';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: 'text' | 'email' | 'password';
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
  
  
};

const TextInput: React.FC<InputProps> = ({
  type,
  label,
  register,
  required,
  
  
}) => (
  <>
    <InputLabel>{label}</InputLabel>
    <input
      className={'input-field'}
      type={type}
      name={label}
     
      ref={register({ required })}
    />
  </>
);

const InputField = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

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

export default TextInput;
