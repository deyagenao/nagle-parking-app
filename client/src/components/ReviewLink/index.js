import React from 'react';
import { Link } from 'react-router-dom';
import './reviewlink.css';

export default function ReviewLink() {
  return (
    <div>
      <Link to='/reviews'>
        <p className='text-review col-md-12'>
          Love our service? Leave a review.
        </p>
      </Link>
    </div>
  );
}
