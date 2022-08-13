import React from 'react';
import './footer.css';

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaRssSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="app__footer ">
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <Link to={'/'}>
          <h1>LOGO</h1>
        </Link>
      </div>
      <div className='app__footer-links_menu'>
        <div className="app__footer-links_div">
          <h4>Products</h4>
          <p>Vulnerability Management</p>
          <p>Penetration Testing</p>
          <p>Risk and Compliance</p>
          <p>Cloud Security</p>
          <p>Endpoint Security</p>
          <p>Web App Firewall</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Events</p>
          <p>FAQ</p>
        </div>
        <div className="app__footer-links_div">
          <h4>Company</h4>
          <p>About us </p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="app__footer-links_div app__footer-links_div-contact">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@exp.net</p>
          

        </div>
      </div>
      
    </div>
    <div className='app__footer-icons'>
          <a href="https://linkedin.com/" target='_blank'><FaLinkedin className='footer-icon'/></a>
          <a href="https://facebook.com/" target='_blank'><FaFacebookSquare className='footer-icon'/></a>
          <a href="https://twitter.com/" target='_blank'><FaTwitterSquare className='footer-icon'/></a>

          <FaRssSquare className='footer-icon'/>

        </div>
    <div className="app__footer-links_div-button">
      <button>GET STARTED</button>
    </div>

    <div className="app__footer-copyright">
      <p>@2022 Aygen. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;