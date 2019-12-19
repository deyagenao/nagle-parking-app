import React from 'react';
// CSS Footer
import style from './footerstyle.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <h1 className='footer-title'>Who We Are</h1>
            </div>
            <Link to='/aboutus'>
              <div className='row social-control'>About Us</div>
            </Link>
            <Link to='/contact'>
              <div className='row social-control'>Contact Us</div>
            </Link>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <h1 className='footer-title'>Follow Us On</h1>
            </div>
            <div className='row social-control'>Facebook</div>
            <div className='row'>Instagram</div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 copyright-row'>
            <p className='copyright'>Brand</p>
            <p className='copyright'>
              © 2019 Nagle Parking All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
