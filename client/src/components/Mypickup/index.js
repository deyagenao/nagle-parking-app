import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';
import './mypickup.css';
import { Link } from 'react-router-dom';
import PickUpInfo from '../pickupInfo';
class MyPickUp extends Component {
  state = {
    userData: {},
    pickUpTime: '',
    pickUpDate: ''
  };

  componentDidMount() {
    API.getUser()
      .then(res =>
        this.setState({
          userData: res.data
        })
      )
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
    if (this.state.pickUpTime && this.state.pickUpDate) {
      console.log('Attempting to add new pick up');
      API.updateUser({
        pickUpTime: this.state.pickUpTime,
        pickUpDate: this.state.pickUpDate,
        today: Date.now,
        isMonthly: true
      })
        .then(res => {
          console.log(res);
          this.setState({
            userData: {
              pickUpTime: this.state.pickUpTime,
              pickUpDate: this.state.pickUpDate
            }
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <h2 className='pickUpText'>Pick Ups</h2>

        <Container fluid>
          <Row>
            <Col size='12'>
              <form className='formCol'>
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
                <FormBtn
                  className='scheduleBtn'
                  onClick={this.handleFormSubmit}
                >
                  Schedule
                </FormBtn>

                {/* </label> */}
              </form>
            </Col>
          </Row>
        </Container>

        {/* Displays Users pick up times */}
        <PickUpInfo
          pickUpDate={this.state.userData.pickUpDate}
          pickUpTime={this.state.userData.pickUpTime}
        />
      </div>
    );
  }
}

export default MyPickUp;
