import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';
import './mymonthly.css';

class MonthlyForm extends Component {
  state = {
    userData: {},
    carType: '',
    carMake: '',
    carModel: '',
    carColor: '',
    licensePlate: ''
  };

  componentDidMount() {
    API.getUser()
      .then(res => this.setState({ userData: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.carMake &&
      this.state.carModel &&
      this.state.carColor &&
      this.state.licensePlate
    ) {
      console.log('Attempting to add new monthly customer');
      API.updateUser({
        carType: this.state.carType,
        carMake: this.state.carMake,
        carModel: this.state.carModel,
        carColor: this.state.carColor,
        licensePlate: this.state.licensePlate,
        isMonthly: true
      })

        .then(res => {
          console.log(res);

          this.setState({
            userData: {
              carType: this.state.carType,
              carMake: this.state.carMake,
              carModel: this.state.carModel,
              carColor: this.state.carColor,
              licensePlate: this.state.licensePlate
            }
          });
          if (res.status === 200) {
            console.log('redirecting');

            return <Redirect to='/mymonthlyinformation' />;
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='12'>
            <h1 className='monthlysignUp'> Sign up to be a monthly member! </h1>
            <Container>
              <Row>
                <div className='card  btn-light cardStyleMyMonthly col-md-4'>
                  <div className='card-body'>
                    <h2 className='card-title'>Sedan</h2>
                    <h4 className='card-subtitle  text-muted'>$300/Month</h4>
                    <h6 className='card-text'>
                      We deliver excelent service all year round!
                    </h6>
                  </div>
                </div>

                <div className='card btn btn-light cardStyleMyMonthly col-md-4'>
                  <div className='card-body'>
                    <h2 className='card-title'>Coupé</h2>
                    <h4 className='card-subtitle mb-2 text-muted'>
                      $250/Month
                    </h4>
                    <h6 className='card-text'>
                      Guarenteed to be a satisfied customer!
                    </h6>
                  </div>
                </div>

                <div className='card btn btn-light cardStyleMyMonthly col-md-4'>
                  <div className='card-body'>
                    <h2 className='card-title'>SUV</h2>
                    <h4 className='card-subtitle mb-2 text-muted'>
                      $350/Month
                    </h4>
                    <h6 className='card-text'>
                      Feel safe with us at Nagle Parking!
                    </h6>
                  </div>
                </div>
              </Row>
            </Container>

            <form className='monthlysignUp'>
              <p>Please Enter:</p>
              {/* <p className='cartypeLocation'>Please select vehicle type:</p> */}
              <select
                className='selectType'
                type='text'
                name='carType'
                value={this.state.carType}
                required=''
                onChange={this.handleInputChange}
              >
                <option>Vechile Type</option>
                <option value='Sedan'>Sedan</option>
                <option value='Coupé'>Coupé</option>
                <option value='SUV'>SUV</option>
              </select>
              <Input
                value={this.state.carMake}
                onChange={this.handleInputChange}
                name='carMake'
                type='text'
                placeholder='Make (required)'
              />
              <Input
                value={this.state.carModel}
                onChange={this.handleInputChange}
                name='carModel'
                type='text'
                placeholder='Model (required)'
              />
              <Input
                value={this.state.carColor}
                onChange={this.handleInputChange}
                name='carColor'
                type='text'
                placeholder='Color (required)'
              />
              <Input
                value={this.state.licensePlate}
                onChange={this.handleInputChange}
                name='licensePlate'
                type='text'
                placeholder='License Plate (required)'
              />
              <FormBtn
                className='btn-warning btn monthlyBtn'
                onClick={this.handleFormSubmit}
              >
                Become Monthly
              </FormBtn>
            </form>
          </Col>
        </Row>
        {/* <Container fluid>
          <Row> */}
        <div className=''>
          <div className='monthlysignUpText'>
            <p className='AsMemberText'> As a monthly member: </p>
            <div className='row'>
              <div className='monthlybenifts col-md-4'>
                <p className=''>You'll be able to set a pick up day/time</p>
                <div className='pickupVechileImg1'></div>
              </div>
              <div className='monthlybenifts col-md-4'>
                <p className=''>You can tell us your honest reviews</p>
                <div className='pickupVechileImg2'></div>
              </div>
              <div className='monthlybenifts col-md-4'>
                <p className=''>
                  You can see organized details of your account
                </p>
                <div className='pickupVechileImg3'></div>
              </div>
            </div>
          </div>
        </div>
        {/* </Row>
        </Container> */}

        {this.state.userData.licensePlate ? (
          <Redirect to='/mymonthlyinformation' />
        ) : (
          <div></div>
        )}
      </Container>
    );
  }
}

export default MonthlyForm;
