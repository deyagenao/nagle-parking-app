import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';
import './mypickupForm.css';

const moment = require('moment');

class MypickupForm extends Component {
  state = {
    pickUpTime: '',
    pickUpDate: ''
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.pickUpTime && this.state.pickUpDate) {
      console.log('Attempting to add new pick up');
      API.updateUser({
        pickUpTime: this.state.pickUpTime,
        pickUpDate: this.state.pickUpDate,

        today: Date.now,
        isMonthly: true
      })
        .then(res => {
          console.log('redirecting');
          if (res.status === 200) {
            return <Redirect to='/myaccount' />;
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
            <h2>Please sign up as a Monthly member to enjoy more benefits!</h2>
            {/* <form className='formCol'>
              <p>Enter pick up time:</p>
              <Input
                value={this.state.pickUpDate}
                onChange={this.handleInputChange}
                type='date'
                name='pickUpDate'
                placeholder='Date (required)'
              />
              <Input
                value={this.state.pickUpTime}
                onChange={this.handleInputChange}
                type='time'
                name='pickUpTime'
                placeholder='Time (required)'
              />
              <FormBtn className='scheduleBtn' onClick={this.handleFormSubmit}>
                Schedule
              </FormBtn>

              {/* </label> */}
            {/* </form>  */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MypickupForm;
