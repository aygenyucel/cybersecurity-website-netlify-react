import React from 'react';
import './header.css';
// import ai from '../../assets/ai.png';
import Animation from "../../assets/animation.svg";

function Header() {
  return (
    <div className='app__header section__padding' id='header'>
      <div className='app__header-content'>
        <h1 className='gradient__text'>
        The world runs on code. <br/> 
        We secure it.
        </h1>
        <p>We provide organizations with proven expertise, tailored solutions and services to help make better cybersecurity decisions that minimize risk.</p>
        
        <button type='button'>Get Started</button>
        
      </div>

      
      <div className='app__header-image'>
        <img src={Animation} alt="Purplebox Animation" />
      </div>

      
      
    </div>
    
  )
}

export default Header