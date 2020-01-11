import React from 'react';
import './home.css';
import Reviews from '../Reviews';
import { Link } from 'react-router-dom';

export default function HomeComponent() {
  return (
    <div>
      <div className='main-img text-center'>
        <h1 className='main-quote main-quote-margin col-md-12'>
          WE PARK UPTOWN
        </h1>
        <Link to='/signup'>
          <button className='btn btn-warning home-signup'> SIGN UP </button>
        </Link>

        <p className='scrolldown'>
          <i className='fas fa-chevron-down'></i>
        </p>
      </div>

      <div className='section-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2 className=' home-title-control'>
                Leaders in vehicle storage and valet services
              </h2>

              <div className='row paragraph-container-control'>
                <div className='text-muted text-center'>
                  PARK MONTHLY – YOUR CAR DESERVES BETTER THAN STREET PARKING.
                </div>
              </div>
              <div className='row'>
                <div className='col-md-1'>
                  <i className='fas fa-car home-favicon'></i>
                </div>
                <div className='col-md-10 favi-paragraph'>
                  Online and email message vehicle request service
                </div>
              </div>
              <div className='row'>
                <div className='col-md-1'>
                  <i class='fas fa-exchange-alt home-favicon'></i>
                </div>
                <div className='col-md-10 favi-paragraph'>
                  Unlimited in/out privileges at your home garage, whenever you
                  want
                </div>
              </div>

              <div className='row'>
                <div className='col-md-1'>
                  <i class='fas fa-user home-favicon'></i>
                </div>
                <div className='col-md-10 favi-paragraph'>
                  Online account management
                </div>
              </div>

              <div className='row home-button-control'>
                <div className='col-md-3'>
                  <a href='/monthly'>
                    <button className='btn btn-warning home-button-size'>
                      Read More
                    </button>
                  </a>
                </div>
                <div className='col-md-3'>
                  <a href='/signup'>
                    <button className='btn btn-warning home-button-size'>
                      Become Member
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='side-img'></div>
            </div>
          </div>
        </div>
      </div>

      <Reviews />

      {/* end of container */}
    </div>
  );
}
