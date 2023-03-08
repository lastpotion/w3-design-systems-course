import React from 'react';
import './Button.css';

const Button = ({
  type = 'button',
  theme = 'primary',
  size = 'medium',
  disabled = false,
  label,
  children
}) => {

  return (
    <button
      type={type}
      aria-label={label}
      className={`w3__button w3__button--${theme} w3__button--${size}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
