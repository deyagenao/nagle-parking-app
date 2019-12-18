import React from 'react';
import './SocialMediaCSS.css';

export default function SocialMedia() {
  return (
    <div>
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
  );
}
