import React, { useState, useEffect } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const Menu = () => (
  
  <>
    <Link to={'/'}>
      <p>Home</p>
    </Link>
    <Link to={'/#solutions'}>
      <p>Solutions</p>
    </Link>
    <Link to={'/blog'}>
      <p>Blog</p>
    </Link>
    <Link to={'/company'}>
      <p>Company</p>
    </Link>
  </>
)

function Navbar() {

  

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className='app__navbar'> 
      <div className='app__navbar-logo'>
        <Link to={'/'}>
          <h1>LOGO</h1>
        </Link>
        
          
      </div>
      <div className='app__navbar-links'>
        
        <div className='app__navbar-links_container'>
          <Menu />
        </div>
        
        <div className='app__navbar-menu'> 
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='app__navbar-menu_container scale-up-center'>
              <div className='app__navbar-menu_container-links'>
                <Menu />
              </div>
              <div className='app__navbar-menu_container-links-contact'>
                <button type='button'>Contact Us</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='app__navbar-contact'>
        <a href='/contact'>
          <button type='button'>Contact Us</button>
        </a>
          
      </div>

    </div>
  )
}

export default Navbar