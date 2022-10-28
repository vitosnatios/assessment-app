import React from 'react';
import '../Styles/Link.css';

const Link = ({ href, text }) => {
  return (
    <a
      style={{ color: '#985df5' }}
      href={href}
      alt={text}
      rel='noreferrer'
      target='_blank'
    >
      <span>{text}</span>
    </a>
  );
};

export default Link;
