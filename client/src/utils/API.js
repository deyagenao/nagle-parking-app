import axios from 'axios';
import { logOut } from './handleSessions';

const xhrHeader = {
  headers: {
    xhrFields: {
      withCredentials: true
    }
  }
};

export default {
  // Gets all books
  getUsers: function() {
    return axios.get('/api/user');
  },
  // Gets the book with the given id
  getUser: function() {
    return axios.get('/api/user/info');
  },
  loginUser: function(user) {
    return axios.post('/api/user/', user, xhrHeader);
  },
  signup: function(user) {
    return axios.post('/api/user/signup', user, xhrHeader);
  },
  // signout: function() {
  //   return logOut;
  // },
  authenticateUser: function() {
    return axios.post('/api/user/authenticate/', xhrHeader);
  },
  updateUser: function(user) {
    return axios.put('/api/user/update', user);
  },
  deletePickUp: function(pickUp) {
    return axios.put('/api/user/delete', pickUp);
  },

  // Reviews
  postReviews: function() {
    return axios.post('/api/user/reviews');
  },

  getReviews: function() {
    return axios.get('/api/user/findreviews');
  },

  // Admin Users
  getAllUsers: function() {
    return axios.get('/api/user/findAllUsers');
  },
  getMonthlyUsers: function() {
    return axios.get('/api/user/findMonthlyUsers');
  },
  getPickUps: function() {
    return axios.get('/api/user/findPickUps');
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  }
};

// session storage
//function login(username, password) {
//window.localStorage.setItem(username, token)
// }
