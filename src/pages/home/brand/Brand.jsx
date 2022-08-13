import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

function Brand() {
  return (
    <div className="app__brand">
      <div className='app__brand-header'>
        <h1 className='gradient__text'>Trusted Companies</h1>
      </div>
      <div className='app__brand-logos'>
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
      </div>
    </div>
  )
}

export default Brand