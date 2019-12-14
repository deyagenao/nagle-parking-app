import React, { Component } from 'react';
import Subnav from '../components/Subnav';
import Cookies from 'js-cookie';
import API from '../utils/API';
import handleSessions from '../utils/handleSessions';

class MyAccount extends Component {
  state = {
    userData: {}
  }

  componentDidMount(){
    API.getUser()
      .then(res => 
        this.setState({userData: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Subnav />
      <p>{this.state.userData.firstName}</p>
      </div>
    );
  }
}

export default MyAccount;