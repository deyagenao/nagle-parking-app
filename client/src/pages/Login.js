import React, { Component } from 'react';
import '../components/SignIn-UpStyle/signin.css';

import API from '../utils/API';
import { Redirect, Link } from 'react-router-dom';

import { Col, Row, Container } from '../components/Grid';
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
      <Container fluid>
        <Row>
          <div className='signInFormCon'>
            <Container>
              <Row>
                <Col size='3'></Col>
                <Col size='6 centered'>
                  <form className='formWidth '>
                    <Input
                      className='form-control'
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
                  </form>
                </Col>
                <Col size='3'></Col>
              </Row>
            </Container>
          </div>
        </Row>

        {/* Redirect on authentication */}
        {this.props.authenticated ? <Redirect to='/myaccount' /> : <div></div>}
      </Container>
    );
  }
}

export default Login;
