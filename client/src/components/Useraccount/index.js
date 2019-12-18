import React, { Component } from 'react';
import API from '../../utils/API';
import './userAccount.css';
import { Link } from 'react-router-dom';

class Useraccount extends Component {
  state = {
    userData: {}
  };

  componentDidMount() {
    API.getUser()
      .then(res => this.setState({ userData: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='col-lg-4'>{/* Users picture */}</div>
          <div className='col-lg-8'>
            <h3 className='userNameOnAccount'>
              {this.state.userData.firstName}'s Account
            </h3>
          </div>
        </div>
        {/* Last Div */}
      </div>
    );
  }
}

export default Useraccount;
