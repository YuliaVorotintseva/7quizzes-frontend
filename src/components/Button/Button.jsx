import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ disabled, className, onClick, text }) => {
  return (
    <button
      className={disabled ? "button disabled" : `button ${className}`}
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.string,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
