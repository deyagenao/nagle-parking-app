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
        <div className='container accountInfoCon'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='accountUserImg'>{/* Users picture */}</div>
            </div>
            <div className='col-md-8'>
              <div className='row align-self-center'>
                <h4 className='userNameOnAccount'>
                  {this.state.userData.firstName}
                  {''} {this.state.userData.lastName}
                  's Account Info
                </h4>
              </div>

              <div className='container accountInfo'>
                <div className='row'>
                  <table className='table table-hover'>
                    {/* <thead>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>First</th>
                      <th scope='col'>Last</th>
                      <th scope='col'>Handle</th>
                    </tr>
                  </thead> */}
                    <tbody>
                      <tr>
                        <th scope='row'>Name:</th>
                        <td>
                          {this.state.userData.firstName} {''}
                          {this.state.userData.lastName}
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Email:</th>
                        <td>{this.state.userData.email}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Make:</th>
                        <td>Ford</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Model:</th>
                        <td>Mustang</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Color:</th>
                        <td>Bkack</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>License Plate:</th>
                        <td>T123R1</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Monthly #:</th>
                        <td>28</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <div className='row'>
                  <p className='accountInfo'>
                    {this.state.userData.firstName}'s Account Info
                  </p>
                </div>
                <div className='row'>
                  <p className='accountInfo'>
                    {this.state.userData.firstName}'s Account Info
                  </p>
                </div>
                <div className='row'>
                  <p className='accountInfo'>
                    {this.state.userData.firstName}'s Account Info
                  </p>
                </div>
                <div className='row'>
                  <p className='accountInfo'>
                    {this.state.userData.firstName}'s Account Info
                  </p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Div */}
      </div>
    );
  }
}

export default Useraccount;
