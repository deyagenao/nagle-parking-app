import React from 'react';
import { Link } from 'react-router-dom';

function Subnav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/myaccount'>
              <a className='nav-link'>
                My Account <span class='sr-only'>(current)</span>
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/mymonthly'>
              <a className='nav-link'>My Monthly</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/mypickup'>
              <a className='nav-link'>My Pickup</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Subnav;
