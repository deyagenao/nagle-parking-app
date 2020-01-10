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

        <p className='scrolldown text-muted'> Scroll Down </p>
      </div>

      <div className='section-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1 className='text-center'>
                Leaders in vehicle storage and valet services
              </h1>
              <p>We park your car</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                fermentum iaculis viverra. Integer facilisis tincidunt
                efficitur. Sed ullamcorper dignissim iaculis. Aliquam vulputate
                commodo velit, ac blandit odio efficitur vel. Aliquam interdum
                vestibulum odio nec imperdiet. Vivamus sodales commodo lobortis.
              </p>
              <div className='row'>
                <div className='col-md-3'>
                  <button className='btn btn-warning'> Button </button>
                </div>
                <div className='col-md-3'>
                  <button className='btn btn-warning'> Button </button>
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
