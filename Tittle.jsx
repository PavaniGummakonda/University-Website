import React from 'react';
import './tittle.css';

const Tittle = ({subtitle,title }) => {
  console.log(subtitle, title); 
  return (
    <div className='title'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Tittle;
