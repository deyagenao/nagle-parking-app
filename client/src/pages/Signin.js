import React, { Component } from 'react';

import API from '../utils/API';

// Link provides us a way to route within pages
import { Redirect, Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { Input, FormBtn } from '../components/Form';

class Signin extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    passwordConf: ''
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
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf
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
                value={this.state.username}
                onChange={this.handleInputChange}
                name='username'
                placeholder='username (required)'
              />
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
                placeholder='(required)'
                type='password'
              />
              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                <Link to='/signup'> Sign up </Link>
              </FormBtn>

              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                sign in
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

export default Signin;
