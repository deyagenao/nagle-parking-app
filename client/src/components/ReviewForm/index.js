import React from 'react';
import './reviewform.css';

export default function ReviewForm() {
  return (
    <div>
      <div>
        <div class='form-group'>
          <label>Leave a review</label>
          <textarea class='form-control' rows='3'></textarea>
        </div>
      </div>
    </div>
  );
}
