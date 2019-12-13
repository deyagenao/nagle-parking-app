import React, { Component } from 'react';

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
          <Col size='12'>
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name='email'
                placeholder='email (required)'
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name='password'
                placeholder='password (required)'
                type='password'
              />
              <Input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name='passwordConf'
                placeholder='password (required)'
                type='password'
              />
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name='firstName'
                placeholder='first name(required)'
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name='lastName'
                placeholder='last name(required)'
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name='phoneNumber'
                placeholder='xxx-xxx-xxxx'
              />

              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                signup
              </FormBtn>
            </form>
          </Col>
        </Row>
        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/myaccount' /> : <div></div>}
      </Container>
    );
  }
}

export default Signup;
