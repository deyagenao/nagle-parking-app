import React, { Component } from 'react';
import Subnav from '../components/Subnav';
import Cookies from 'js-cookie';
import API from '../utils/API';
import handleSessions from '../utils/handleSessions';

class MyAccount extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    API.getUser()
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Subnav />
        <p>{this.state.user.firstName}</p>
        <p>{this.state.user.email}</p>
      </div>
    );
  }
}

export default MyAccount;
