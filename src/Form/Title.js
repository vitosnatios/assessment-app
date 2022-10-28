import React from 'react';

const Title = ({ children, ...props }) => {
  return (
    <h4 style={{ margin: '0px' }} {...props}>
      {children}
    </h4>
  );
};

export default Title;
