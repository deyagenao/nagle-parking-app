import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';

class MonthlyInfo extends Component {
  state = {
    userData: {},
    isMonthly: false,
    // carType: '',
    carMake: '',
    carModel: '',
    carColor: '',
    licensePlate: ''
  };

  componentDidMount() {
    API.getUser()
      .then(res => {
        console.log(res.data);
        res.data.isMonthly
          ? this.setState({ userData: res.data, isMonthly: true })
          : this.setState({ isMonthly: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='container'>
        <h2> My Monthly</h2>

        <div className='row'>
          <table className='table table-hover'>
            <tbody>
              {/* <tr>
                <th scope='row'>Car Type:</th>
                <td>{this.state.userData.carType}</td>
              </tr> */}
              <tr>
                <th scope='row'>Car Make:</th>
                <td>{this.state.userData.carMake}</td>
              </tr>
              <tr>
                <th scope='row'>Car Model:</th>
                <td>{this.state.userData.carModel}</td>
              </tr>
              <tr>
                <th scope='row'>Car Color:</th>
                <td>{this.state.userData.carColor}</td>
              </tr>
              <tr>
                <th scope='row'>License Plate:</th>
                <td>{this.state.userData.licensePlate}</td>
              </tr>

              <tr>
                {this.state.userData.paid ? <td>Paid!</td> : <td>Not paid!</td>}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MonthlyInfo;
