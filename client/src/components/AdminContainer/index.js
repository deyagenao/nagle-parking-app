import React, { Component } from 'react';
// will need to import AdminNav, AdminSideBar, AdminViewInfo
// import AdminNav from '../components/AdminNav';
import AdminSideBar from '../AdminSideBar';
import AdminViewInfo from '../AdminViewInfo';
import API from '../../utils/API';

class AdminContainer extends Component {
  state = {
    customerData: [],
    dataRetrieved: false
  };

  componentDidMount() {};

  getAllCustomers = () => {
    API.getAllUsers()
        .then(res => {
            this.setState({
                customerData: res.data,
                dataRetrieved: true});
            console.log(this.state);
        })
        .catch(err => console.log(err));
  };

  getAllMonthly = () => { 
    console.log("let's see if this works");
    API.getMonthlyUsers()
        .then(res => {
            this.setState({
                customerData: res.data,
                dataRetrieved: true});
            console.log(this.state.customerData)
        })
        .catch(err => console.log(err));
  };

  getAllPickUps = () => { 
    console.log("let's see if this works");
    API.getPickUps()
        .then(res => {
            this.setState({
                customerData: res.data,
                dataRetrieved: true});
            console.log(this.state.customerData);
        })
        .catch(err => console.log(err));
  }; 

  render() {
    return (  
        <div>
            {/* <AdminNav /> */}
            <div className='container' style={{minHeight: 640 + 'px'}}>
                <h1 className='mt-4'>Administrator Portal</h1>
                <div className='row mt-5 mb-5'>
                    <AdminSideBar getAllCustomers={this.getAllCustomers} 
                        getAllMonthly = {this.getAllMonthly}
                        getAllPickUps = {this.getAllPickUps}/> 
                    <AdminViewInfo customerData={this.state.customerData}
                        dataRetrieved={this.state.dataRetrieved} />
                </div>
            </div>
        </div>
    )
  }
}

export default AdminContainer;