import React from 'react';
// CSS Footer
import './footerstyle.css';
import { Link } from 'react-router-dom';
import instagram from './instagram.png';
import facebook from './facebook.png';
import Logo from '../Logo/logo.js';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <h1 className='footer-title'>Who We Are</h1>
            </div>

            <div className='row social-control'>
              <a href='/aboutus'>
                <p>About Us</p>
              </a>
            </div>

            <div className='row social-control'>
              <a href='/contact'>
                <p>Contact Us</p>
              </a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <h1 className='footer-title'>Follow Us On</h1>
            </div>
            <div className='row social-control'>
              <Link to='https://www.facebook.com/Nagle-Parking-Inc-792360457528201/'>
                <img src={facebook} className='facebook' />
              </Link>
              <Link to='https://www.instagram.com/nagleparking/'>
                <img src={instagram} className='instagram' alt='instagram' />
              </Link>
            </div>
            <div className='row'></div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 copyright-row'>
            <p className='footerlogo'>
              <a href='/'>
                <Logo />
              </a>
            </p>
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
