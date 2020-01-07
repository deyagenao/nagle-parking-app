import React from 'react';
import { Col, Row, Container } from '../Grid';

export default function PickUpInfo({ pickUpDate, pickUpTime }) {
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
                        <td>{pickUpDate}</td>
                      </th>
                      {/* {''} */}
                      <th scope='row'>
                        Time:
                        <td>{pickUpTime}</td>
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
