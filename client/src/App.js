import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Books from './pages/Books';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signin from './pages/Signin';
import MyAccount from './pages/MyAccount';
import Monthly from './pages/Monthly';
import Payment from './pages/Payment';
import MyPickUp from './pages/MyPickUp.js';
import Contact from './pages/Contact';
import MyMonthly from './pages/MyMonthly';
import AboutUs from './pages/AboutUs';

import { /* getCookie, */ authenticateUser } from './utils/handleSessions';

class App extends React.Component {
  // check cookie
  // getCookie();

  state = {
    authenticated: false,
    loading: false
  };

  authenticate = () =>
    authenticateUser()
      .then(auth => this.setState({ authenticated: auth.data, loading: false }))
      .catch(err => console.log(err));

  componentWillMount() {
    this.authenticate();
  }

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        this.state.authenticated === true ? (
          <Component {...props} />
        ) : this.state.loading === true ? (
          <div></div>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );

  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Switch>
            {/* /////////////////////////////////////////// */}
            {/* HOME ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/'
              render={props => (
                <Home
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* /////////////////////////////////////////// */}
            {/* SIGN-UP ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/signup'
              render={props => (
                <Signup
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* /////////////////////////////////////////// */}
            {/* SIGN-IN ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/signin'
              render={props => (
                <Login
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* /////////////////////////////////////////// */}
            {/* MY-ACCOUNT ROUTE */}
            {/* /////////////////////////////////////////// */}
            <this.PrivateRoute exact path='/myaccount' component={MyAccount} />
            )} />
            {/* /////////////////////////////////////////// */}
            {/* MONTHLY ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/monthly'
              render={props => (
                <Monthly
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* /////////////////////////////////////////// */}
            {/* PAYMENT ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/payment'
              render={props => (
                <Payment
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* /////////////////////////////////////////// */}
            {/* MY PICK UP ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/mypickup'
              render={props => (
                <MyPickUp
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* /////////////////////////////////////////// */}
            {/* CONTACT ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/contact'
              render={props => (
                <Contact
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* /////////////////////////////////////////// */}
            {/* MY MONTHLY ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/mymonthly'
              render={props => (
                <MyMonthly
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* /////////////////////////////////////////// */}
            {/* ABOUT US ROUTE */}
            {/* /////////////////////////////////////////// */}
            <Route
              exact
              path='/aboutus'
              render={props => (
                <AboutUs
                  {...props}
                  authenticate={this.authenticate}
                  authenticated={this.state.authenticated}
                />
              )}
            />
            {/* <this.PrivateRoute exact path='/books' component={Books} /> */}
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
