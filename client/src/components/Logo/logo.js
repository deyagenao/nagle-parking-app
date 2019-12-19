import React from 'react';
import logo from './nagleparking.png';
import './logo.css';

export default function Logo() {
  return (
    <div>
      <img src={logo} alt='logo' className='logo' />
    </div>
  );
}
