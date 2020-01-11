import React, { Component } from 'react';
import API from '../../utils/API';
import './monthlyinfo.css';
import ReviewLink from '../ReviewLink';
import { Link } from 'react-router-dom';

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
            <h2 className='monthlyTitle '>
              {' '}
              Welcome, glad to have you {this.state.userData.firstName}{' '}
              {this.state.userData.lastName}
            </h2>
          </Row>

          <Container className='tableCon'>
            <Row>
              <div className='col-md-6'>
                <p>Monthly Info</p>
                <table className='table table-hover  tableControl'>
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
                <div className=''>
                  {/* reviews */}
                  <ReviewLink />
                </div>
              </div>
              <div className='col-md-6'>
                <div class='card cardmonthlyInfo'>
                  <img
                    src='https://rjma.com/wp-content/uploads/2019/10/img-team1.png'
                    class='card-img-top'
                    alt='...'
                  ></img>
                  <div class='card-body text-center'>
                    <h5 class='card-title '>Enjoy the Perks!</h5>
                    <p class='card-text'>
                      Want to set a pick up for for vechile to be ready before
                      arrival?
                    </p>
                    <div className='text-center'>
                      <Link
                        className='btn btn-warning setPickUpBTN '
                        to='/mypickup'
                      >
                        Set Pick Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>

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
