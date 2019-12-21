import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';
const moment = require('moment');

class MonthlyForm extends Component {
  state = {
    priceRate: '',
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
    if(this.state.priceRate == 169.00 || this.state.priceRate == 199.00) {
      console.log('Attempting to add new monthly customer');
      API.updateUser({
        priceRate: this.state.priceRate,
        billingCycle: Date.now,
        isMonthly: true
      })
      .then(res => {
        if (res.status === 200){
          return <Redirect to ='/mymonthly' />;
        }
      })
      .catch(err => console.log(err));
    }
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size ='8'>
            <p> No monthly parking information available. Sign up below! </p>
            <form>
              <p>Enter the price rate for your vehicle type:</p>
              <Input
                value={this.state.priceRate}
                onChange={this.handleInputChange}
                name='priceRate'
                placeholder='169.00 for small vehicles, 199.00 for large'
              />

              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Add Monthly
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      
    );
  }
  
}


export default MonthlyForm