import React from 'react';
import { Feature } from '../../../components';
import './features.css';

const featuresData = [
  {
    title: 'Unparalleled visibility, speed and scale',
    text: 'Get instant visibility and control of all your global IT assets at infinite scale!',
  },
  {
    title: 'A platform that grows with you',
    text: 'As your needs change, easily and seamlessly add powerful functionality, coverage and users.',
  },
  {
    title: 'See the results in one place',
    text: 'The Qualys Cloud Platform is an end-to-end solution for all aspects of IT, security and compliance. Avoid the gaps that come with trying to glue together siloed solutions.',
  },
  {
    title: 'Drastically reduce cost',
    text: 'Save significant resources and the time otherwise required managing multiple solutions.',
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