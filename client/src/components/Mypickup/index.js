import React, { Component } from 'react';
import API from '../../utils/API';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';
import './mypickup.css';
import DeleteBtn from '../DeleteBtn';

import PickUpInfo from '../pickupInfo';

class MyPickUp extends Component {
  state = {
    userData: {},
    pickUpTime: '',
    pickUpDate: ''
  };

  componentDidMount() {
    this.loadPickUps();
    API.getUser()
      .then(res =>
        this.setState({
          userData: res.data
        })
      )
      .catch(err => console.log(err));
  }

  loadPickUps = () => {
    API.getUser()
      .then(res =>
        this.setState({ userData: res.data, pickUpDate: '', pickUpTime: '' })
      )
      .catch(err => console.log(err));
  };

  deletePickUp = PickUp => {
    API.deletePickUp(PickUp)
      .then(res => this.loadPickUps())
      .catch(err => console.log(err));
  };

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
        isMonthly: true,
        pickUpActive: true
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
                <Row>
                  <p className='timeText col-md-10'>Enter pick up time:</p>

                  <div className='deleteBtnRight col-md-2'>
                    <DeleteBtn
                      className='btn delete-btn'
                      onClick={() =>
                        this.deletePickUp(this.pickUpDate, this.pickUpTime)
                      }
                    />
                  </div>
                </Row>

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
                  className='scheduleBtn btn btn-warning'
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

        <div className='mapPic'></div>
      </div>
    );
  }
}

export default MyPickUp;
