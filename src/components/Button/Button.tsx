import React, { MouseEventHandler } from "react";
import "./button.css";

export type Props = {
  isSubmit?: boolean;
  disabled?: boolean;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
};

const Button = ({ isSubmit, disabled, className, onClick, text }: Props) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
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
