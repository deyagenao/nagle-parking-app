import React from 'react';
import Navcss from './nav.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/logo.js';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/'>
        <a className='navbar-brand logo-brand'>
          <Logo />
        </a>
      </Link>
      <button
        className='navbar-toggler navbutton'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon '></span>
      </button>

      <div
        className='collapse navbar-collapse nav-bar-margin'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/'>
              <a className='nav-link'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact'>
              <a className='nav-link'>Contact Us</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/monthly'>
              <a className='nav-link'>Monthly</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signin'>
              <a className='nav-link'>Sign in</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
