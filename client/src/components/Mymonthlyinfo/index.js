import React, { Component } from 'react';
import API from '../../utils/API';
import './monthlyinfo.css';

import { Row, Container } from '../Grid';

class MonthlyInfo extends Component {
  state = {
    userData: {},
    isMonthly: false,
    carType: '',
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
      <div>
        <Container fluid>
          <Row>
            <h2 className='monthlyTitle col-md-12'>
              {' '}
              Welcome, glad to have you {this.state.userData.firstName}{' '}
              {this.state.userData.lastName}
            </h2>
          </Row>

          <Row>
            <table className='table table-hover tableCon'>
              <tbody>
                <tr>
                  <th scope='row'>Car Type:</th>
                  <td>{this.state.userData.carType}</td>
                </tr>
                <tr>
                  <th scope='row'> Make:</th>
                  <td>{this.state.userData.carMake}</td>
                </tr>
                <tr>
                  <th scope='row'> Model:</th>
                  <td>{this.state.userData.carModel}</td>
                </tr>
                <tr>
                  <th scope='row'> Color:</th>
                  <td>{this.state.userData.carColor}</td>
                </tr>
                <tr>
                  <th scope='row'>License Plate:</th>
                  <td>{this.state.userData.licensePlate}</td>
                </tr>

                {/* <tr>
                {this.state.userData.paid ? <td>Paid!</td> : <td>Not paid!</td>}
              </tr> */}
              </tbody>
            </table>
          </Row>

          <Row>
            <div className='secondconforTextImg'>
              <h3 className='secondCText'>
                Thanks for joing Nagle Parking Monthly membership. We sincerely
                appreciate you, {this.state.userData.firstName}
              </h3>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MonthlyInfo;
