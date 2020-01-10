import React from 'react';
import { Link } from 'react-router-dom';

function Subnav() {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul className='navbar-nav  main-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/myaccount'>
            My Account <span className='sr-only'>(current)</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-link' to='/mymonthly'>
            My Monthly
          </Link>
        </li>
        <li className='nav-item '>
          <Link className='nav-link ' to='/mypickup'>
            My Pickup
          </Link>
        </li>
        <li className='nav-item '>
          <Link className='nav-link ' to='/payment'>
            Pay My Bill
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Subnav;
