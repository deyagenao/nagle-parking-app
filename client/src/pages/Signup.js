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
      <div className='signUpFormCon'>
        <Container fluid>
          <Row>
            <form className='input-controlSignUp'>
              <div className='formWidth'>
                <p className='signUpTextTop'>Sign Up</p>
                {/* FIRST NAME */}
                <div className='form-group'>
                  <div className='cols-sm-10'>
                    <div className='input-group'>
                      {/* <span className='input-group-addon'> */}
                      <i className='fa fa-user fa-lg faviconPositionSignUp2'>
                        {'   '}
                        Your First Name
                      </i>
                      {/* </span> */}
                      <Input
                        className='form-control'
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name='firstName'
                        placeholder='First Name(required)'
                      />
                    </div>
                  </div>
                </div>
                {/* LastName */}
                <div className='form-group'>
                  <div className='cols-sm-10'>
                    <div className='input-group'>
                      <i className='fa fa-user fa-lg faviconPositionSignUp2'>
                        {'   '}
                        Your Last Name
                      </i>
                      <Input
                        className='form-control'
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name='lastName'
                        placeholder='Last Name(required)'
                      />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='cols-sm-10'>
                    <div className='input-group'>
                      <i className='fas fa-mobile fa-lg faviconPositionSignUp2'>
                        {'   '}
                        Phone Number
                      </i>
                      <Input
                        className='form-control'
                        value={this.state.phoneNumber}
                        onChange={this.handleInputChange}
                        name='phoneNumber'
                        placeholder='xxx-xxx-xxxx'
                      />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='cols-sm-10'>
                    <div className='input-group'>
                      <i className='fa fa-envelope fa-lg faviconPositionSignUp2'>
                        {'   '}
                        Your Email
                      </i>
                      <Input
                        className='form-control'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name='email'
                        type='email'
                        placeholder='Email (required)'
                      />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='cols-sm-10'>
                    <div className='input-group'>
                      <i className='fa fa-unlock fa-lg faviconPositionSignUp2'>
                        {'   '}
                        Password
                      </i>
                      <Input
                        className='form-control'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name='password'
                        placeholder='Password (required)'
                        type='password'
                      />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='cols-sm-10'>
                    <div className='input-group'>
                      <i className='fa fa-lock fa-lg faviconPositionSignUp2'>
                        {'   '}
                        Confirm Password
                      </i>
                      <Input
                        className='form-control'
                        value={this.state.passwordConf}
                        onChange={this.handleInputChange}
                        name='passwordConf'
                        placeholder='Confirm Password (required)'
                        type='password'
                      />
                    </div>
                  </div>
                </div>
                <Row>
                  <FormBtn
                    className='signInButton btn btn-warning'
                    onClick={this.handleFormSubmit}
                  >
                    Sign Up
                  </FormBtn>
                </Row>
                <p className='signUpTextinForm'>
                  <a target='' href='/signin'>
                    Don't have an account? Sign In
                  </a>
                </p>
              </div>
            </form>
          </Row>

          {/* redirect on authenticated */}
          {this.props.authenticated ? (
            <Redirect to='/myaccount' />
          ) : (
            <div></div>
          )}
        </Container>
      </div>
    );
  }
}

export default Signup;
