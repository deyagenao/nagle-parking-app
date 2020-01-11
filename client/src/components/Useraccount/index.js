import React, { Component } from 'react';
import API from '../../utils/API';
import './userAccount.css';
import { Link } from 'react-router-dom';
import ReviewLink from '../ReviewLink';
import { Redirect } from 'react-router-dom';
import { Input, FormBtn } from '../Form';

class Useraccount extends Component {
  state = {
    userData: {},
    userImage: ''
  };

  componentDidMount() {
    API.getUser()
      .then(res => this.setState({ userData: res.data }))
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userImage) {
      console.log('Attempting to add new monthly customer Image');
      API.updateUser({
        userImage: this.state.userImage,
        isMonthly: true
      })

        .then(res => {
          console.log(res);

          this.setState({
            userData: {
              userImage: this.state.userImage
            }
          });
          if (res.status === 200) {
            console.log('redirecting');

            return <Redirect to='/myaccount' />;
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div className='container accountInfoCon'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='accountUserImg'>
                {/* Users picture */}
                {this.state.userData.userImage}
              </div>
              <div>
                {/* className='btn-warning btn '
                  onClick={this.handleFormSubmit} */}

                <Input
                  accept='image/*'
                  className=' btn  form-control-file uploadBTN1'
                  type='file'
                  value={this.state.userImage}
                  onChange={this.handleInputChange}
                  name='userImage'
                />
                <FormBtn
                  type='file'
                  className='form-control-file btn btn-warning uploadBTN'
                  onClick={this.handleFormSubmit}
                >
                  Upload Image
                </FormBtn>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='row align-self-center'>
                <h4 className='col-sm-10 userNameOnAccount'>
                  {this.state.userData.firstName}
                  {''} {this.state.userData.lastName}
                  's Account Info
                  <Link to='/update-user'>
                    <i className=' col-sm-2 userEditAccFav fas fa-pen'></i>
                  </Link>
                </h4>
              </div>

              <div className='container accountInfo'>
                <div className='row'>
                  <table className='table table-hover'>
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
                        <th scope='row'>Phone #:</th>
                        <td>{this.state.userData.phoneNumber}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Email:</th>
                        <td>{this.state.userData.email}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Make:</th>
                        <td>{this.state.userData.carMake}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Model:</th>
                        <td>{this.state.userData.carModel}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Color:</th>
                        <td>{this.state.userData.carColor}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>License Plate:</th>
                        <td>{this.state.userData.licensePlate}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope='row'>Monthly #:</th>
                        <td>28</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>

                  {/* reviews */}
                  <ReviewLink />
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
