import React from 'react';

function AdminSideBar(props) {
  return (
    <div>
      <ul className='nav flex-column col-lg-3'>
        <li className='nav-item'>
          <button
            className='nav-link text-dark'
            onClick={props.getAllCustomers}
          >
            View All Customers
          </button>
        </li>
        <li className='nav-item'>
          <button className='nav-link text-dark' onClick={props.getAllMonthly}>
            View All Monthly Customers
          </button>
        </li>
        <li className='nav-item'>
          <button className='nav-link text-dark' onClick={props.getAllPickUps}>
            View All Scheduled Pick Ups
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AdminSideBar;
