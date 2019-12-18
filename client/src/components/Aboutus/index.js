import React from 'react';
import './AboutUsCSS.css';
import SocialMedia from '../SocialMedia';

export default function AboutUs() {
  return (
    <div>
      {/* Background Image */}
      <div className='AboutBg'>
        <div className='keepDark'>
          <h1 className='aboutImgText'>About Us</h1>
          <p className='aboutQuote'>
            Here at Nagle Parking, Service is our priority
          </p>
        </div>
      </div>
      <div className='container pushAboutInfoDown'>
        <div className='row'>
          <div className='col-lg-8 aboutText'>
            <h3 className='naglePText'>This Is Nagle Parking</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className='col-lg-4'>
            <h1 className='followUsAbout text-center'>Follow Us </h1>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}
