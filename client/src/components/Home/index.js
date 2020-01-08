import React from 'react';
import './home.css';
import Reviews from '../Reviews';

export default function HomeComponent() {
  return (
    <div>
      <div className='main-img text-center'>
        <p className='main-quote main-quote-margin col-md-12'>
          Leaders in vehicle storage
        </p>
        <p className='main-quote col-md-12'>and valet services</p>
      </div>

      <div className='section-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1 className='text-center'> Title </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                fermentum iaculis viverra. Integer facilisis tincidunt
                efficitur. Sed ullamcorper dignissim iaculis. Aliquam vulputate
                commodo velit, ac blandit odio efficitur vel. Aliquam interdum
                vestibulum odio nec imperdiet. Vivamus sodales commodo lobortis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                fermentum iaculis viverra. Integer facilisis tincidunt
                efficitur. Sed ullamcorper dignissim iaculis. Aliquam vulputate
                commodo velit, ac blandit odio efficitur vel. Aliquam interdum
                vestibulum odio nec imperdiet. Vivamus sodales commodo lobortis.
              </p>
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
