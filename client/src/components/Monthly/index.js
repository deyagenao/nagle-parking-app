import React from 'react';
import './monthly.css';
import { Link } from 'react-router-dom';

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
      <div className='container monthly-section-two'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <h1 className='monthly-title-control'>
                Let us keep your car safe.
              </h1>
            </div>

            <div className='row'>
              <div className='col-md-7'>
                <div className='row'>
                  <h5 className='mb-0 mt-3 lead'>
                    SIGN UP FOR MONTHLY PARKING
                  </h5>
                </div>
                <div className='row text-muted mt-0 monthly-contact'>
                  <p>Contact us if you want service over the phone</p>
                </div>

                <div className='row'>
                  <Link to='/contact'>
                    <button className='btn btn-warning monthly-contact-btn mt-3 mb-3'>
                      Contact us
                    </button>
                  </Link>
                </div>

                <div className='row'>
                  <p className='text-muted time-control mt-1'>7am-9pm</p>
                </div>
              </div>

              <div className='col-md-4 right-column-control'>
                <div className='row'>
                  <h5 className='ml-4 mb-4'>Already a monthly member?</h5>
                </div>
                <div className='row'>
                  <Link to='signin'>
                    <button className='btn btn-warning monthly-contact-btn mt-3 mb-3 ml-4'>
                      Sign in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
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
