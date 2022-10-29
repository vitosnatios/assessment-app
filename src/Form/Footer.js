import React from 'react';
import Link from './Link';

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        marginTop: '2em',
      }}
    >
      <p>VitosDeveloper @ 2022</p>
      <div
        style={{
          display: 'inline-grid',
        }}
      >
        <Link
          text={'Linkedin'}
          href='https://www.linkedin.com/in/vitosnatios/'
        />
        <Link text={'Github'} href='https://github.com/vitosnatios' />
      </div>
    </footer>
  );
};

export default Footer;
