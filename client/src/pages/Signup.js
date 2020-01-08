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
            <Container>
              <Row>
                <Col size='3'></Col>
                <Col size='6 centered'>
                  <form className='signUpformWidth '>
                    {/* <i className='form-control far fa-envelope'></i> */}
                    <Input
                      className='form-control form-control far fa-envelope'
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      name='email'
                      placeholder='Email (required)'
                    />
                    <Input
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name='password'
                      placeholder='Password (required)'
                      type='password'
                    />
                    <Input
                      value={this.state.passwordConf}
                      onChange={this.handleInputChange}
                      name='passwordConf'
                      placeholder='Confirm Password (required)'
                      type='password'
                    />
                    <Input
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                      name='firstName'
                      placeholder='First Name(required)'
                    />
                    <Input
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      name='lastName'
                      placeholder='Last Name(required)'
                    />
                    <Input
                      value={this.state.phoneNumber}
                      onChange={this.handleInputChange}
                      name='phoneNumber'
                      placeholder='xxx-xxx-xxxx'
                    />
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
                </Col>
                <Col size='3'></Col>
              </Row>
            </Container>
          </div>
        </Row>

        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/myaccount' /> : <div></div>}
      </Container>
    );
  }
}

export default Signup;
