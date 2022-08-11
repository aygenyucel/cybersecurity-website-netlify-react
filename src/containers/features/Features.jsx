import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Active Risk Assessment',
    text: 'A real-time view of risk powered by technology and cyber expertise',
  },
  {
    title: 'Active Protection',
    text: 'Monitoring and alerting designed to prevent risk before it escalates',
  },
  {
    title: 'Active Response',
    text: 'Access to in-house claims and incident response teams who can work quickly to respond and recover',
  },
];



function Features() {
  return (
    <div className="app__features section__padding" id="features">
      <div className="app__features-heading">
        <h1 className="gradient__text">Active Insurance is a unified approach to digital risk</h1>
      </div>
      <div className="app__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features