import React from "react";

const Input = ({ value, onChange, className, readOnly }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={className}
      readOnly={readOnly}
    />
  );
};

export default Input;
