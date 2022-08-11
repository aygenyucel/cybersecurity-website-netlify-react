
import React from 'react';
import './contactUs.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='app__contactUs section__margin' id='contactUs'>
        <div className='app__contactUs-header'>
            <h1 className="gradient__text">Reduce Risk by Making Smarter Cybersecurity Decisions</h1>
        </div>
        <div className='app__contactUs-text'>
            <p>Better protect your organization with our unmatched expertise and proven approach to cybersecurity.</p>
        </div>
        <div className='app__contactUs-button'>
          <Link to='/contact'>
            <button>TALK TO AN EXPERT</button>
          </Link>
        </div>
        
    </div>
  )
}

export default Contact