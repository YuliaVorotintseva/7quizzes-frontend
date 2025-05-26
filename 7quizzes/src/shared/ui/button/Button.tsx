import React, { MouseEventHandler } from "react";
import "./button.css";

export type Props = {
    disabled?: false,
    className: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: string
};

const Button = ({ disabled, className, onClick, children }: Props) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
};

export default Button;
