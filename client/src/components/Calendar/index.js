import React from 'react';
import './pickup.css';
const Datetime = require('react-datetime');

var date = new Date();

export default function Calendar() {
  return (
    <div>
      <Datetime />
    </div>
  );
}
