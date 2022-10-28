import React from 'react';
import { buttonStyle } from '../Styles/Estilos';
import Title from './Title';
import '../Styles/Button.css';

const Button = ({ children, onClick, ...props }) => {
  return (
    <button style={buttonStyle} onClick={onClick} {...props}>
      <Title>{children}</Title>
    </button>
  );
};

export default Button;
