import React from 'react';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        Logo
      </a>
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
            <a className='nav-link' href='/'>
              Home <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/contact'>
              Contact Us
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/monthly'>
              Monthly
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/signin'>
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
