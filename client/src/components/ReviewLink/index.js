import React from 'react';
import { Link } from 'react-router-dom';
import './reviewlink.css';

export default function ReviewLink() {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <Link to='/reviews'>
            <p className='text-review btn-warning centered'>
              Love our service? Leave a review
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
