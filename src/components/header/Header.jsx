import React from 'react';
import headerStyles from './header.module.css';

const Header = () => {
  return (
    <div className='header'>
      <h1 className={`${headerStyles['align-center']} ${headerStyles.title}`}>
        This is coming from Header component
      </h1>
      <div className={headerStyles.subtitle}>This is Header subtitle</div>
    </div>
  );
};

export default Header;
