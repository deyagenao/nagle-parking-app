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
            <form className='monthlysignUp'>
              <p>Please Enter:</p>
              <select
                className='selectType'
                type='text'
                name='carType'
                value={this.state.carType}
                required=''
                onChange={this.handleInputChange}
              >
                <option value='Sedan $250'>Sedan $250</option>
                <option value='Coupé $200'>Coupé $200</option>
                <option value='SUV $300'>SUV $300</option>
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

              <FormBtn onClick={this.handleFormSubmit}>Become Monthly</FormBtn>
            </form>
          </Col>
        </Row>
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
