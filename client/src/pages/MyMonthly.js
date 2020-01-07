import React, { Component } from 'react';
import Subnav from '../components/Subnav';
import Mymonthly from '../components/Mymonthly';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';

class MyMonthly extends Component {
  state = {
    userData: {},
    isMonthly: false
  };

  componentDidMount() {
    API.getUser()
      .then(res => {
        console.log(res.data);
        res.data.isMonthly
          ? this.setState({ userData: res.data, isMonthly: true })
          : this.setState({ isMonthly: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Subnav />
        {this.state.isMonthly === false ? (
          <Mymonthly />
        ) : (
          <Redirect to='MyMonthlyInformation' />
        )}
      </div>
    );
  }
}

export default MyMonthly;
