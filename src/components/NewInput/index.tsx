import React from 'react';

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
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

const NewInput: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  register,
  required,
}) => (
  <>
    <label>{label}</label>
    <input
      className={'input-field'}
      type={type}
      name={label}
      value={value}
      onChange={onChange}
      ref={register({ required })}
    />
  </>
);

export default NewInput;
