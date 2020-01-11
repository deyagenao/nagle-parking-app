import React from 'react';

function AdminSideBar(props) {
  return (
    <div>
      <div className='col-lg-12'>
        <ul className='nav flex-column' >
          <li className='nav-item' >
            <button
              className='nav-link btn btn-warning text-dark mb-2 w-100'
              onClick={props.getAllCustomers}
            >
              View All Customers
            </button>
          </li>
          <li className='nav-item'>
            <button className='nav-link btn btn-warning text-dark mb-2 w-100' onClick={props.getAllMonthly}>
              View All Monthly Customers
            </button>
          </li>
          <li className='nav-item'>
            <button className='nav-link btn btn-warning text-dark mb-2 w-100' onClick={props.getAllPickUps}>
              View All Scheduled Pick Ups
            </button>
          </li>
        </ul>
      </div>
    </div>  
  );
}

export default AdminSideBar;
