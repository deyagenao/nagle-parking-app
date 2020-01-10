import React, { Component } from 'react';
// will need to import AdminNav, AdminSideBar, AdminViewInfo
// import AdminNav from '../components/AdminNav';
import AdminSideBar from '../components/AdminSideBar';
import AdminViewInfo from '../components/AdminViewInfo';
import API from '../utils/API';

class AdminView extends Component {
  state = {
    customerData: []
  };

  componentDidMount() {};

  getAllCustomers = () => {
    API.getAllUsers()
        .then(res => {
            this.setState({customerData: res.data});
            console.log(this.state.customerData)
        })
        .catch(err => console.log(err));
  };

  getAllMonthly = () => { 
    console.log("let's see if this works");
    API.getMonthlyUsers()
        .then(res => {
            this.setState({customerData: res.data});
            console.log(this.state.customerData)
        })
        .catch(err => console.log(err));
  };

  getAllPickUps = () => { 
    console.log("let's see if this works");
    API.getPickUps()
        .then(res => {
            this.setState({customerData: res.data});
            console.log(this.state.customerData);
        })
        .catch(err => console.log(err));
  }; 

  render() {
    return (  
        <div>
            {/* <AdminNav /> */}
            <AdminSideBar getAllCustomers={this.getAllCustomers} 
            getAllMonthly = {this.getAllMonthly}
            getAllPickUps = {this.getAllPickUps}/> 
            <AdminViewInfo customerData={this.state.customerData}/>
        </div>
    )
  }
}

export default AdminView;