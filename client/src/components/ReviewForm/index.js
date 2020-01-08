import React from 'react';
import './reviewform.css';

export default function ReviewForm() {
  return (
    <div>
      <div className='container review-container-control'>
        <div className='row'>
          <div className='col-md-6'>
            <h2 className='review-title'>Leave a review</h2>
            <p className='text-muted'>
              Leave a review if you satified with our service
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <textarea
                className=''
                maxlength='300'
                placeholder='Write Your Review'
                autofocus
              ></textarea>
            </div>
            <button className='btn btn-warning submit-control'> Submit </button>
          </div>

          <div className='col-md-6'>
            <p className='happyimage'></p>
          </div>
        </div>
      </div>
    </div>
  );
}
