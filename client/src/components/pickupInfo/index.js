import React from 'react';
import { Col, Row, Container } from '../Grid';
// import Moment from 'moment';

// DateFormatter = date => {
//   const format = Moment(date);
//   format(date, 'YYYY-MM-DD').format('MMMM Do YYYY');
//   // console.log(this.DateFormatter('2020-10-04'));
//   return Moment(date);
// };

export default function PickUpInfo({ pickUpDate, pickUpTime }) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col size='12'>
            {/* Render of table with data */}
            <div className='container '>
              <div className='row pickupInformation'>
                <table className='table table-hover'>
                  <tbody>
                    <tr>
                      <th scope='row'>
                        Date:
                        <td className='pickupInformation'>{pickUpDate}</td>
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
