import React from 'react';

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
            <a className='nav-link' href='/myaccount'>
              My Account <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/mymonthly'>
              My Monthly
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/mypickup'>
              My Pickup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Subnav;
