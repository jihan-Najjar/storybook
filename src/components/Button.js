import React from 'react';
import './Button.css'; 

const Button = ({ variant, size, color, children }) => {
  const className = `btn ${variant} ${size} ${color}`;
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;
