import React from 'react';
import './ContactCSS.css';

export default function ContactImg() {
  return (
    <div>
      {/* Container 1 */}
      {/* Background Image */}
      <div className='contactBg'>
        <div className='keepLettersDark'>
          <h1 className='imgText'>Contact Us</h1>
          <p className='contactQuote'>
            Have any questions? Feel free to contact us at anytime!
          </p>
        </div>
      </div>
      {/* Container 2 */}
      <div className='container text-center'>
        <div className='row allRows '>
          {/* Column 1 */}
          <div className='col-lg-4 '>
            {/* Row 1 */}
            <p className='title '>Contact us</p>
            <p className='titleContent'>646-964-4949</p>
            <p className='titleContent'>Sunday-Monday</p>
            <p className='titleContent'>Open 24 hours</p>
          </div>

          {/* Column 2 */}
          <div className='col-lg-4'>
            {/* Row 2 */}
            <p className='title'>Corporate Office</p>

            <p className='titleContent'>31 Nagle Ave, New York, NY 10040</p>
          </div>

          {/* Column 3 */}
          <div className='col-lg-4'>
            {/* Row 3 */}
            <p className='title'>Our Locations</p>
            <p className='titleContent'>31 Nagle Ave, New York, NY 10040</p>
            <p className='titleContent'>
              266 West 231st Street, Bronx, NY 10463
            </p>
            <p className='titleContent'>
              266 West 231st Street, Bronx, NY 10463
            </p>
          </div>
        </div>
      </div>

      {/* Container 2 */}

      <div className='sendMessage-section'>
        <div className='col-lg-12'>
          <h1 className='sendMessage text-center'>Send A Message</h1>
        </div>

        {/* Container 3 */}
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <a
              target='_blank'
              href='https://www.facebook.com/Nagle-Parking-Inc-792360457528201/'
            >
              <i className='sendMessageFavi fab fa-facebook-square'></i>
            </a>

            <a target='_blank' href='https://www.instagram.com/nagleparking/'>
              <i className='sendMessageFavi2 fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
