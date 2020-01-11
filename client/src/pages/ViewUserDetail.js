import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';

class ViewUserDetail extends Component {
  state = {
    customerData: {}
  };

  componentDidMount() {
    API.viewCustomerDetail(this.props.match.params.id)
        .then(res => {
            console.log(res.data)
            this.setState({customerData: res.data})})
        .catch(err => console.log(err));
  };

  updateBillPay = (boolean) => {
    API.updateUser({
        billPaid: boolean
    }).then(
        this.setState({
            customerData: {
                billPaid: boolean
            }
        })
    )
  };

  updatePickUp = () => {
    API.updateUser({
        pickUpActive: false,
        pickUpDate: '',
        pickUpTime: ''
    })
    .then(res => {
        if (res.status === 200) {
            this.componentDidMount();
        }
    })
    .catch(err => console.log(err));
  };

  updateAccountInfo = (newUserInfo) => {
    API.updateUser(newUserInfo)
        .then()
        .catch(err => console.log(err))
  };

  deleteCustomer = (id) => {
    API.deleteCustomer(id)
        .then()
        .catch(err => console.log(err))
  };

  render() {
    return (  
        <div>
            <div className='container accountInfo mt-5' style={{minHeight: 640 + 'px'}}>
            <Link to='/admin' className='text-secondary mb-5'>← Return to Admin Portal</Link>
                <div className='row mt-3'>
                    <div className='col-lg-8'>
                        <h2>Customer Details</h2>    
                        <table className='table table-hover'>
                            <tbody>
                                <tr>
                                    <th scope='row'>Name:</th>
                                    <td>
                                    {this.state.customerData.firstName} {''}
                                    {this.state.customerData.lastName}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>Phone #:</th>
                                    <td>{this.state.customerData.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Email:</th>
                                    <td>{this.state.customerData.email}</td>
                                </tr>
                                {this.state.customerData.carColor ? (
                                    <tr>
                                    <th scope='row'>Car:</th>
                                    <td>{this.state.customerData.carColor} {this.state.customerData.carMake} {this.state.customerData.carModel} (Plate: {this.state.customerData.licensePlate})</td>
                                </tr>
                                ): (<div></div>) }
                                {this.state.customerData.monthlyNumber ?
                                    (<tr>
                                        <th scope='row'>Monthly #:</th>
                                        <td>{this.state.customerData.monthlyNumber}</td>
                                    </tr>) :
                                    (<div></div>)
                                }
                            
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                {this.state.customerData.isMonthly ? 
                                (<div>
                                    <h5 className='card-title'>Monthly Bill: </h5>
                                    <p className='card-text'>$200 Not Paid</p>
                                 </div>) :
                                 (<div>
                                    <h5 className='card-title'>Monthly: </h5>
                                    <p className='card-text'>Not a Monthly Customer</p>
                                 </div>)}   
                                 {this.state.customerData.pickUpActive ? 
                                    (<div className='mt-3'>
                                    <h5 className='card-title'>Scheduled Pick Up: </h5>
                                    <p className='card-text'>{this.state.customerData.pickUpDate} {this.state.customerData.pickUpTime}  </p>
                                    <button className='btn btn-danger' onClick={this.updatePickUp}>X</button>
                                    </div>) :
                                    (<div className='mt-3'>
                                    <h5 className='card-title'>Pick Up: </h5>
                                    <p className='card-text'>No Pick Up Scheduled</p>
                                    </div>)}    
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn btn-danger mx-auto' onClick={this.deleteCustomer}>Delete Customer</button>
            </div>
        </div>
    )
  }
}

export default ViewUserDetail;