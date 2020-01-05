import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';

class PickUpInfo extends Component {
  state = {
    userData: {},
    pickUpTime: '',
    pickUpDate: ''
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

  handleDelete = event => {
    event.preventDefault();
    {
      API.deletePickUp({
        pickUpTime: this.state.pickUpTime,
        pickUpDate: this.state.pickUpDate
      })
        .then(res => {
          console.log('deleting pick up');
          if (res.status === 200) {
            return <Redirect to='/mypickup' />;
          }
        })
        .catch(err => console.log(err));
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.pickUpTime && this.state.pickUpDate) {
      console.log('Attempting to add new pick up');
      API.updateUser({
        pickUpTime: this.state.pickUpTime,
        pickUpDate: this.state.pickUpDate,

        today: Date.now,
        isMonthly: true
      })
        .then(res => {
          console.log('redirecting');
          if (res.status === 200) {
            return <Redirect to='/mypickup' />;
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size='12'>
              {/* Render of table with data */}
              <div className='container'>
                <div className='row'>
                  <table className='table table-hover'>
                    <tbody>
                      <tr>
                        <th scope='row'>
                          Date:
                          <td>{this.state.userData.pickUpDate}</td>
                        </th>
                        {/* {''} */}
                        <th scope='row'>
                          Time:
                          <td>{this.state.userData.pickUpTime}</td>
                        </th>
                        <th scope='row'>
                          Delete Pickup:
                          <td>
                            <button onClick={this.handleDelete}>Delete</button>
                          </td>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PickUpInfo;
