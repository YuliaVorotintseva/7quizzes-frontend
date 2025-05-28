import React, { MouseEventHandler } from "react";
import "./button.css";

export type Props = {
  disabled?: false;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
};

const Button = ({ disabled, className, onClick, text }: Props) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
