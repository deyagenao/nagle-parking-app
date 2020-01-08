import React from 'react';
import './AboutUsCSS.css';

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
      <section className='carimage'>
        <div className='container pushAboutInfoDown'>
          <div className='row'>
            <div className='col-lg-8 aboutText'>
              <h3 className='naglePText'>This Is Nagle Parking</h3>
              <div className='row section-two-control'>
                <p className='col-sm-10'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate aliquid illo voluptatem corporis provident! Dolorum
                  id at adipisci doloremque amet, aut iusto. Dolorem, corporis
                  maxime. Atque at minus quis earum?
                </p>

                <p className='col-sm-5 section-two-control-2'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate aliquid illo voluptatem corporis provident! Dolorum
                  id at adipisci doloremque amet, aut iusto. Dolorem, corporis
                  maxime. Atque at minus quis earum?
                </p>
                <p className='col-sm-5 section-two-control-2'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate aliquid illo voluptatem corporis provident! Dolorum
                  id at adipisci doloremque amet, aut iusto. Dolorem, corporis
                  maxime. Atque at minus quis earum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Points */}
      <div className='container-fluid pushAboutUsPointsDown'>
        <div className='row text-center'>
          <p className=' col-lg-12 coreValuesText'>Core Values</p>

          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <i class='fas fa-hand-holding-heart faviValues faviColor1 '></i>
                <h2 className='faviText'>Passion & Care</h2>
                <p className='faviInfo'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  id lectus velit. Sed consequat faucibus mauris, vel accumsan
                  ex lobortis sed. Etiam nisl quam, hendrerit at urna eu, tempor
                  sodales justo.
                </p>
              </div>

              <div className='col-md-4'>
                <i class='fas fa-handshake  faviValues faviColor2'></i>
                <h2 className='faviText'>Integrity</h2>
                <p className='faviInfo'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  id lectus velit. Sed consequat faucibus mauris, vel accumsan
                  ex lobortis sed. Etiam nisl quam, hendrerit at urna eu, tempor
                  sodales justo.
                </p>
              </div>

              <div className='col-md-4'>
                <i class='fas fa-parking faviValues faviColor3'></i>
                <h2 className='faviText'>Excellent Service</h2>
                <p className='faviInfo'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  id lectus velit. Sed consequat faucibus mauris, vel accumsan
                  ex lobortis sed. Etiam nisl quam, hendrerit at urna eu, tempor
                  sodales justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
