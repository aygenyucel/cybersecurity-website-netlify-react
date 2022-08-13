import React from 'react';
import './feature.css';

function Feature({ title, text}) {
  return (
    <div className='app__feature'>
      <div className='app__feature-title'>
        <div className='app__feature-title-line' />
        <div className='app__feature-title-header'>
          <p>{title}</p>
        </div>
      </div>
      <div className='app__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature