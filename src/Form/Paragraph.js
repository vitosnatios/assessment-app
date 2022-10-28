import React from 'react';

const Paragraph = ({ children, color, ...props }) => {
  return (
    <p style={{ color: color && color, margin: '0' }} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
