import React from 'react';
import CSS from './home.css';

export default function HomeComponent() {
  return (
    <div>
      <div className='main-img'>
        <p className='main-quote text-center col-md-12'>Park Like No Other</p>
      </div>

      <div className='section-two container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-center'> Title </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              fermentum iaculis viverra. Integer facilisis tincidunt efficitur.
              Sed ullamcorper dignissim iaculis. Aliquam vulputate commodo
              velit, ac blandit odio efficitur vel. Aliquam interdum vestibulum
              odio nec imperdiet. Vivamus sodales commodo lobortis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              fermentum iaculis viverra. Integer facilisis tincidunt efficitur.
              Sed ullamcorper dignissim iaculis. Aliquam vulputate commodo
              velit, ac blandit odio efficitur vel. Aliquam interdum vestibulum
              odio nec imperdiet. Vivamus sodales commodo lobortis.
            </p>
          </div>

          <div className='col-md-6'>
            <div className='side-img'></div>
          </div>
        </div>
      </div>

      {/* end of container */}
    </div>
  );
}
