import React from "react";

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button style={{ color: "green" }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
