import React from 'react';
import './Monthly.css';

export default function MonthlyInfo() {
  return (
    <div>
      {/* Container 1 */}
      {/* Background Image */}
      <div className='monthlyBg'>
        <div className='keepLettersDark'>
          <h1 className='imgText'>Monthly Information</h1>
          <p className='contactQuote'>
            Your car deserver better than street parking.
          </p>
        </div>
      </div>
      {/* Container 2 */}
      <div className='container text-center'>
        <div className='row allRows '>
          {/* Column 1 */}
          <div className='col-lg-4 '>
            {/* Row 1 */}
            <p className='title '>Monthly Information</p>
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
          </div>
        </div>
      </div>
      {/* About Us Points */}
      <div className='container-fluid pushAboutUsPointsDown'>
        <div className='row text-center'>
          <div className='container info-control'>
            <div className='row'>
              <div className='col-md-4'>
                <i class='fas fa-sync-alt faviValues faviColor1 '></i>
                <h2 className='faviText'>In and Out</h2>
                <p className='faviInfo text-muted'>
                  Park and pick up your car more than once at your home garage.
                  Only for Monthly customers.
                </p>
              </div>

              <div className='col-md-4'>
                <i class='fas fa-car  faviValues faviColor2'></i>
                <h2 className='faviText'>Vehicle Request Service</h2>
                <p className='faviInfo text-muted'>
                  Get your vehicle ready to go when you are, either online or
                  with a quick text message.
                </p>
              </div>

              <div className='col-md-4'>
                <i class='fas fa-parking faviValues faviColor3'></i>
                <h2 className='faviText'>Excellent Service</h2>
                <p className='faviInfo text-muted'>
                  Conveniently manage your account from anywhere. See your
                  reservations, pay your bill, and anything else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container 3 */}
    </div>
  );
}
