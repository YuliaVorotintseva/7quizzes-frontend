import React, { MouseEventHandler } from "react";
import "./button.css";

export type Props = {
  disabled?: boolean;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
};

const Button = ({ disabled, className, onClick, text }: Props) => {
  return (
    <button
      className={
        disabled ? `button ${className} disabled` : `button ${className}`
      }
      onClick={disabled ? () => {} : onClick}
      disabled={disabled ?? false}
    >
      {text}
    </button>
  );
};

export default Button;
