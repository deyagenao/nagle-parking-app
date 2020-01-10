import React, { Component } from 'react';
// will need to import AdminNav
// import AdminNav from '../components/AdminNav';
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

  };

  updatePickUp = (boolean) => {

  };

  updateAccountInfo = (newUserInfo) => {

  };

  deleteCustomer = (id) => {

  };

  render() {
    return (  
        <div>
            <div className='container accountInfo'>
            <h2>Customer Details</h2>    
                <div className='row'>
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
                      <tr>
                        <th scope='row'>Car:</th>
                        <td>{this.state.customerData.carColor} {this.state.customerData.carMake} {this.state.customerData.carModel} (Plate: {this.state.customerData.licensePlate})</td>
                      </tr>
                      <tr>
                        <th scope='row'>Monthly #:</th>
                        <td>28</td>
                      </tr>
                      <tr>
                          <th scope='row'></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p onClick={this.deleteCustomer}>Delete Customer?</p>
            </div>
        </div>
    )
  }
}

export default ViewUserDetail;