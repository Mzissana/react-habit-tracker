import React from "react";

const Button = ({ type = "button", className, children, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};

export default Button;
