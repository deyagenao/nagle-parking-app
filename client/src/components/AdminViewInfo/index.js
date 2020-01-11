import React from 'react';
import { Link } from 'react-router-dom';

function AdminViewInfo (props) {
    return (
        <div>
            <div className='col-lg-12'>
                {props.dataRetrieved ? 
                (<table className='table table-hover'>
                    <tr>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Monthly Customer</th>
                        <th scope='col'>Scheduled Pick Up</th>
                        <th scope='col'>More Details</th>
                    </tr>
                    {props.customerData.map(customer => 
                        <tr>
                            <td>{customer.lastName}</td>
                            <td>{customer.firstName}</td>
                            {customer.isMonthly ? 
                            (<td>Yes</td>) :
                            (<td>No</td>)}
                            {customer.pickUpActive ?
                            (<td>{customer.pickUpDate} - {customer.pickUpTime}</td>) :
                            (<td>-----------</td>)}
                            <td><Link to={"/admin/customer/" + customer._id}>
                                View Details
                            </Link></td>
                        </tr>)}
                    </table>) :
                    (<h3>Please choose an option to view customers.</h3>)
                }
                
            </div>
        </div>
    )
}

export default AdminViewInfo;