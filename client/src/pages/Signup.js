import React, { Component } from 'react';
import '../components/SignIn-UpStyle/signup.css';
import API from '../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { Input, FormBtn } from '../components/Form';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    passwordConf: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
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
    if (this.state.email && this.state.password) {
      API.signup({
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber
      })
        .then(res => {
          if (res.status === 200) {
            this.props.authenticate();
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
          <div className='signUpFormCon'>
            {/* FORM */}
            <form className='signUpformWidth '>
              {/* EMAIL */}
              <Row>
                <Col size='2'>
                  <i className='fas fa-envelope faviconPosition'></i>
                </Col>
                <Col size='10'>
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name='email'
                    placeholder='Email (required)'
                  />
                </Col>
              </Row>

              {/* PASSWORD */}
              <Row>
                <Col size='2'>
                  <i className='fas fa-key faviconPosition'></i>
                </Col>
                <Col size='10'>
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name='password'
                    placeholder='Password (required)'
                    type='password'
                  />
                </Col>
              </Row>

              {/* PASSWORD CONFIRMATION */}
              <Row>
                {' '}
                <Col size='2'>
                  <i className='fas fa-key faviconPosition '></i>
                </Col>
                <Col size='10'>
                  <Input
                    value={this.state.passwordConf}
                    onChange={this.handleInputChange}
                    name='passwordConf'
                    placeholder='Confirm Password (required)'
                    type='password'
                  />
                </Col>
              </Row>

              {/* FIRST NAME */}
              <Row>
                {' '}
                <Col size='2'>
                  <i className='fas fa-user faviconPosition '></i>
                </Col>
                <Col size='10'>
                  <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name='firstName'
                    placeholder='First Name(required)'
                  />
                </Col>
              </Row>

              {/* LAST NAME */}
              <Row>
                {' '}
                <Col size='2'>
                  <i className='fas fa-user faviconPosition '></i>
                </Col>
                <Col size='10'>
                  <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name='lastName'
                    placeholder='Last Name(required)'
                  />
                </Col>
              </Row>

              {/* PHONE NUMBER */}
              <Row>
                {' '}
                <Col size='2'>
                  <i className='fas fa-mobile faviconPosition '></i>
                </Col>
                <Col size='10'>
                  <Input
                    value={this.state.phoneNumber}
                    onChange={this.handleInputChange}
                    name='phoneNumber'
                    placeholder='xxx-xxx-xxxx'
                  />
                </Col>
              </Row>
              <Row>
                <FormBtn
                  className='btn btn-warning signUpButton'
                  onClick={this.handleFormSubmit}
                >
                  Sign Up
                </FormBtn>
              </Row>
              <p className='signInTextinForm'>
                <a target='' href='/signin'>
                  Already have an account? Sign In
                </a>
              </p>
            </form>
          </div>
        </Row>

        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/myaccount' /> : <div></div>}
      </Container>
    );
  }
}

export default Signup;
