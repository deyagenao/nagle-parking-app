import React, { Component } from 'react';
import '../components/SignIn-UpStyle/signin.css';

import API from '../utils/API';
import { Redirect } from 'react-router-dom';

import { Row, Container } from '../components/Grid';
import { Input, FormBtn } from '../components/Form';

class Login extends Component {
  state = {
    email: '',
    password: ''
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
      API.loginUser({
        email: this.state.email,
        password: this.state.password
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
      <div className='signInFormCon'>
        <Container fluid>
          <Row>
            <form className='input-control '>
              <div className='formWidth'>
                <p className='signInTextTop'>Sign In</p>
                {/* EMAIL */}
                <div>
                  <p>
                    <i className='fas fa-envelope faviconPositionSignin '>
                      {' '}
                      Email
                    </i>
                    <Input
                      // className='form-control'
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      name='email'
                      type='text'
                      placeholder='Email (required)'
                    />
                  </p>
                </div>
                {/* PASSWORD */}
                <div>
                  <p>
                    <i className='fas fa-key faviconPositionSignin2'>
                      {' '}
                      Password
                    </i>
                    <Input
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name='password'
                      placeholder='Password (required)'
                      type='password'
                    />
                  </p>
                </div>
                <Row>
                  <FormBtn
                    className='signInButton btn btn-warning'
                    onClick={this.handleFormSubmit}
                  >
                    Sign In
                  </FormBtn>
                </Row>
                <p className='signUpTextinForm'>
                  <a target='' href='/signup'>
                    Don't have an account? Sign Up
                  </a>
                </p>
              </div>
            </form>
          </Row>

          {/* Redirect on authentication */}
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

export default Login;
