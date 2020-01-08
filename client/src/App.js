import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MyAccount from './pages/MyAccount';
import Monthly from './pages/Monthly';
import Payment from './pages/Payment';
import MyPickUp from './pages/MyPickUp.js';
import Contact from './pages/Contact';
import MyMonthly from './pages/MyMonthly';
import AboutUs from './pages/AboutUs';
import AdminView from './pages/AdminView';
import Update from './pages/Update';
import ReviewPage from './pages/Review';
import MyMonthlyInformation from './pages/MyMonthlyInformation';

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
      .then(auth => {
        console.log(auth.data);
        this.setState({ authenticated: auth.data, loading: false });
      })
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
            {/* HOME ROUTE */}
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
            {/* SIGN-UP ROUTE */}
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
            {/* SIGN-IN ROUTE */}
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
            {/* MONTHLY ROUTE */}
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
            {/* CONTACT ROUTE */}
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
            {/* ABOUT-US ROUTE */}
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

            {/* MY-ACCOUNT ROUTE */}
            <this.PrivateRoute exact path='/myaccount' component={MyAccount} />

            <this.PrivateRoute
              exact
              path='/mymonthlyinformation'
              component={MyMonthlyInformation}
            />

            {/* PAYMENT ROUTE */}
            <this.PrivateRoute exact path='/payment' component={Payment} />

            {/* MY PICK UP ROUTE  */}
            <this.PrivateRoute exact path='/mypickup' component={MyPickUp} />

            {/* MY MONTHLY ROUTE */}
            <this.PrivateRoute exact path='/mymonthly' component={MyMonthly} />

            {/* MY MONTHLY ROUTE */}
            <this.PrivateRoute exact path='/update-user' component={Update} />

            {/* MY MONTHLY ROUTE */}
            <this.PrivateRoute exact path='/reviews' component={ReviewPage} />

            {/* ADMIN VIEW ROUTE*/}
            <Route exact path='/admin' component={AdminView} />

            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
