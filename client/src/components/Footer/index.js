import React from 'react';
// CSS Footer
import style from './footerstyle.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>Title 1</div>

            <div className='row'>Test</div>
            <div className='row'>Test</div>
          </div>
          <div className='col-md-3'>
            <div className='row'>Title 2</div>

            <div className='row'>Test</div>
            <div className='row'>Test</div>
          </div>
          <div className='col-md-3'>
            <div className='row'>About</div>

            <div className='row'>Test</div>
            <div className='row'>Test</div>
          </div>
          <div className='col-md-3'>
            <div className='row'>Follow us</div>

            <div className='row ocial-control'>facebook</div>
            <div className='row'>instagram</div>
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
