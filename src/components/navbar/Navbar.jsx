import React, { useState, useEffect } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <div>
      <Link className='navbar-link' to={'/'}>
        Home
      </Link>
    </div>
    <div>
      <a className='navbar-link' href='/#solutions'>
        Solutions
      </a>
    </div>
    <div>
      <Link className='navbar-link' to={'/blog'}>
        Blog
      </Link>
    </div>
    <div>
      <a className='navbar-link' href='/#products'>
        Products
      </a>
    </div>
    <div>
      <Link className='navbar-link' to={'/company'}>
        Company
      </Link>
    </div>

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
      </div>
      <div className='app__navbar-contact'>
        <Link to={'/contact'}>
          <button type='button'>Contact Us</button>
        </Link>
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
                <Link to={'/contact'}>
                  <button onClick={() => setToggleMenu(false)} type='button'>Contact Us</button>
                </Link>
              </div>
              
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar