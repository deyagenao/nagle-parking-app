import React, { Component } from 'react';
import API from '../../utils/API';
import './updateuser.css';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';

class UpdateUser extends Component {
  state = {
    updates: {},
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    carMake: '',
    carModel: '',
    carColor: '',
    licensePlate: '',
    displayFirstName: '',
    displayLastName: ''
  };

  componentDidMount() {
    API.getUser()
      .then(res =>
        this.setState({
          email: res.data.email,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          phoneNumber: res.data.phoneNumber,
          carMake: res.data.carMake,
          carModel: res.data.carModel,
          carColor: res.data.carColor,
          licensePlate: res.data.licensePlate,
          displayFirstName: res.data.firstName,
          displayLastName: res.data.lastName
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
    if (
      this.state.carMake ||
      this.state.carModel ||
      this.state.firstName ||
      this.state.lastName ||
      this.state.email ||
      this.state.phoneNumber ||
      this.state.licensePlate
    ) {
      console.log('Attempting to update  monthly customer');
      API.updateUser({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        carMake: this.state.carMake,
        carModel: this.state.carModel,
        carColor: this.state.carColor,
        licensePlate: this.state.licensePlate
      })
        .then(res => {
          console.log(res);
          this.setState({
            updates: {
              email: this.state.email,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              phoneNumber: this.state.phoneNumber,
              carMake: this.state.carMake,
              carModel: this.state.carModel,
              carColor: this.state.carColor,
              licensePlate: this.state.licensePlate
            }
          });
          if (res.status === 200) {
            console.log('Update submitted succesfully');

            return (
              alert('Update has been submitted. Thank you'),
              (<Redirect to='/myaccount' />)
            );
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className='container accountInfoCon'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='accountUserImg'>{/* Users picture */}</div>
          </div>
          <div className='col-md-8'>
            <div className='row align-self-center'>
              <h4 className='col-sm-10 userNameOnAccount'>
                {this.state.displayFirstName} {this.state.displayLastName}
                's Account Info
                <Link to='/update-user'>
                  <i className=' col-sm-2 userEditAccFav fas fa-pen'></i>
                </Link>
              </h4>
            </div>
            <Container fluid>
              <Row>
                <Col size='12'>
                  <h1 className='text-center update-your-info'>
                    {' '}
                    Update your information{' '}
                  </h1>
                  <form>
                    <Input
                      name='firstName'
                      onChange={this.handleInputChange}
                      value={this.state.firstName}
                      placeholder='first name(required)'
                    />
                    <Input
                      name='lastName'
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      placeholder='last name(required)'
                    />
                    <Input
                      name='phoneNumber'
                      value={this.state.phoneNumber}
                      onChange={this.handleInputChange}
                      placeholder='xxx-xxx-xxxx'
                    />
                    <Input
                      name='email'
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      placeholder='email (required)'
                    />
                    <Input
                      name='carMake'
                      value={this.state.carMake}
                      onChange={this.handleInputChange}
                      placeholder='Make'
                    />
                    <Input
                      name='carModel'
                      value={this.state.carModel}
                      onChange={this.handleInputChange}
                      placeholder='Model'
                    />
                    <Input
                      name='carColor'
                      value={this.state.carColor}
                      onChange={this.handleInputChange}
                      placeholder='Color'
                    />
                    <Input
                      name='licensePlate'
                      value={this.state.licensePlate}
                      onChange={this.handleInputChange}
                      placeholder='License Plate'
                    />
                    <Row>
                      <Col size='12'>
                        <FormBtn
                          // disabled={!(this.state.email && this.state.password)}
                          onClick={this.handleFormSubmit}
                          className='btn btn-warning updateBTN'
                        >
                          Update
                        </FormBtn>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
              {/* redirect  */}
              {this.state.updates.carMake ||
              this.state.updates.carModel ||
              this.state.updates.firstName ||
              this.state.updates.lastName ||
              this.state.updates.phoneNumber ||
              this.state.updates.licensePlate ||
              this.state.updates.email ? (
                <Redirect to='/myaccount' />
              ) : (
                <div></div>
              )}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateUser;
