import React from 'react';
import './reviewform.css';

export default function ReviewForm() {
  return (
    <div>
      <div className='container'>
        <div className='form-group'>
          <label>Leave a review</label>
          <textarea className='form-control' rows='3'></textarea>
        </div>

        <button className='btn btn-primary'> Submit </button>
      </div>
    </div>
  );
}
