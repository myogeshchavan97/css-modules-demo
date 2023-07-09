import React from 'react';
import homeStyles from './home.module.css';

const Home = () => {
  return (
    <div className='home'>
      <h3 className={homeStyles.title}>This is coming from Home component</h3>
      <div className={homeStyles.subtitle}>This is Home subtitle</div>
    </div>
  );
};

export default Home;
