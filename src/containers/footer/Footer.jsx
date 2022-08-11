import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';
import Feature from '../../components/feature/Feature';

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaRssSquare } from 'react-icons/fa';
import { RssFeed } from '@mui/icons-material';

const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <h1>LOGO</h1>
        
      </div>
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
        <p>info@payme.net</p>
        

      </div>
      
    </div>
    <div className='app__footer-icons'>
          
          <FaFacebookSquare className='footer-icon'/>
          <FaTwitterSquare className='footer-icon'/>
          <FaLinkedin className='footer-icon'/>
          <FaRssSquare className='footer-icon'/>

        </div>
    <div className="app__footer-links_div">
        <button>GET STARTED</button>
      </div>

    <div className="app__footer-copyright">
      <p>@2022 XXX. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;