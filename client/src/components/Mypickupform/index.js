import React, { Component } from 'react';
import { Col, Row, Container } from '../Grid';
import './mypickupForm.css';

const moment = require('moment');

class MypickupForm extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='12'>
            <div className='signupmemberImg'>
              <h2 className='signupmemberText'>
                Please sign up as a Monthly member to enjoy more benefits!
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MypickupForm;
