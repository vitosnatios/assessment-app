import React from 'react';

const Li = ({ color, children, ...props }) => {
  return (
    <li>
      <span style={{ color: color }} {...props}>
        {children}
      </span>
    </li>
  );
};

export default Li;
