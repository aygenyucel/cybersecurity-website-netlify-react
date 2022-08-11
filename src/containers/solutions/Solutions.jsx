import React from 'react';
import Feature from '../../components/feature/Feature';
import './solutions.css';

import { MdOutlineSecurity, MdOutlinePassword } from 'react-icons/md';


function Solutions() {
  return (
    
    <div className="app__solutions section__margin" id="solutions">
      

      <div className="app__solutions-feature">
        <Feature title="What We Do" text="Delivering actionable behavioral insights to create a world of trust and ease across the entire digital identity lifecycle from account origination to monitoring online sessions and beyond." />
      </div>
      <div className="app__solutions-heading">
        <h1 className="gradient__text">Data Protection and Management Solutions That Work for You</h1>
        
      </div>
      <div className="app__solutions-container">
        <div className='app-icon'>
          <MdOutlineSecurity /> 
        </div>
        <Feature title="Account Opening Protection" text="Generate insights to distinguish between legitimate applicants and cybercriminals." />
        <div className='app-icon'>
          <MdOutlineSecurity /> 
        </div>
        <Feature title="Account Takeover Protection" text="Detect human and non-human cyberthreats such as Remote Access Tool attacks, bots, malware, and manual account takeover methods." />
        <div className='app-icon'>
          <MdOutlineSecurity /> 
        </div>
        <Feature title="Mule Account Detection" text="Analyze physical and cognitive behavior to identify mule activity at each stage of the transaction." />
      </div>
      <div className="app__solutions-container">
        <div className='app-icon'>
          <MdOutlineSecurity /> 
        </div>
        <Feature title="Social Engineering Scam Detection" text="Uncover subtle behavioral anomalies that suggest a victim is operating under the influence of a cybercriminal." />
        <div className='app-icon'>
          <MdOutlineSecurity /> 
        </div>
        <Feature title="BioCatch for PSD2 SCA" text="Provide a secure and frictionless customer experience on your journey to address PSD2 SCA requirements." />
        <div className='app-icon'>
          <MdOutlineSecurity /> 
        </div>
        <Feature title="Secure Remote Access" text="Centrally manage remote access for service desks, vendors, and operators." />
      </div>
      <div className='app__solutions-button'>
        <button>FIND OUT MORE</button>
      </div>

      
    </div>
  )
}

export default Solutions