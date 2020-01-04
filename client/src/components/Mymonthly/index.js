import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';
import './mymonthly.css';
const moment = require('moment');

class MonthlyForm extends Component {
  state = {
    userData: {},
    // carType: '',
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
      // this.state.carType &&
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
          console.log(this.state.userData);
          // if (res.status === 200) {
          //   return <Redirect to='/mymonthly' />;
          // }
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
            <form className='monthlysignUp'>
              <p>Please Enter:</p>
              {/* <select
                className='selectType'
                name='carType'
                type='text'
                required=''
              >
                <option disabled>Car Type (required)</option>
                <option
                  value={this.state.carType}
                  onChange={this.handleInputChange}
                >
                  Sedan $250
                </option>
                <option
                  value={this.state.carType}
                  onChange={this.handleInputChange}
                >
                  Coupé $200
                </option>
                <option
                  value={this.state.carType}
                  onChange={this.handleInputChange}
                >
                  SUV $300
                </option>
              </select> */}
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

              <FormBtn onClick={this.handleFormSubmit}>Become Monthly</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MonthlyForm;
