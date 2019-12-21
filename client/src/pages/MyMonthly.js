import React, { Component } from 'react';
import Subnav from '../components/Subnav';
import Mymonthly from '../components/Mymonthly';
// import Mymonthlyinfo from '../components/Mymonthlyinfo';
import API from '../utils/API';

class MyMonthly extends Component {
  state = {
    userData: {},
    isMonthly: false
  }

  componentDidMount() {
    API.getUser()
      .then(res => {
        console.log(res.data);
        res.data.isMonthly ?
        (this.setState({ userData: res.data, isMonthly: true})) :
        (this.setState({isMonthly: false}))
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
        <div>
          <Subnav />
          <h2> My Monthly</h2>
          {this.state.isMonthly === false ?
            ( <Mymonthly /> )
            : (
              <div className='container'>
                <div className='row'>
                  <table className='table table-hover'>
                    <tbody>
                      <tr>
                        <th scope='row'>Billing Cycle:</th>
                        <td>{this.state.userData.billingCycle}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Monthly Parking Price Rate:</th>
                        <td>${this.state.userData.priceRate}</td>
                      </tr>
                      <tr>
                        <th scope='row'>Paid?</th>
                        {this.state.userData.paid ? 
                          (<td>Paid!</td>)
                          : (<td>Not paid!</td>)
                        }
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          }
          
        </div>
      );

  }
  
}


export default MyMonthly;