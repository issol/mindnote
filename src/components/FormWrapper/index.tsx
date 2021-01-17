import React from "react";

import "./styles.css";

type Props = {
  label: string;
  children: any;
};

const FormWrapper = ({ label, children }: Props) => {
  return (
    <div className={"form-wrapper"}>
      <div className={"form-label"}>{label}</div>
      {children}
    </div>
  );
};

export default FormWrapper;
