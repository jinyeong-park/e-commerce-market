import React from 'react';

import Directory from '../../components/directory/Directory';

import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage'>
    {/* <Directory /> */}
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>HATS</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>JACKETS</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>SNEAKERS</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>WOMENS</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>MENS</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  </div>
);

export default Homepage;
