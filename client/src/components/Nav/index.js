import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/logo.js';

function Nav(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand logo-brand'>
        <Logo />
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
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse nav-bar-margin'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/' className='nav-link'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/monthly' className='nav-link'>
              Monthly
            </Link>
          </li>
          <li className='nav-item'>
            {props.authenticated ? (
              <li>
                <Link to='/myaccount' className='nav-link'>
                  My Account
                </Link>
              </li>
            ) : (
              <Link to='/signin' className='nav-link'>
                <li> Sign In </li>
              </Link>
            )}
          </li>

          <li className='nav-item' onClick={props.signout}>
            {props.authenticated ? (
              <li>
                <Link to='/' className='nav-link'>
                  Sign Out
                </Link>
              </li>
            ) : (
              <div></div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
