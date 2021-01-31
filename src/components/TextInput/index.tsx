import FormWrapper from 'components/FormWrapper';
import React from 'react';

import './styles.css';

type Props = {
  type: 'email' | 'password' | 'text';
  label: string;
  value: string;
  onChange: Function;
};

const TextInput = ({ type, label, value, onChange }: Props) => {
  return (
    <FormWrapper label={label}>
      <input
        type={type}
        className={'input-field'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormWrapper>
  );
};

export default TextInput;
