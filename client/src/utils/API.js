import axios from 'axios';

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
  signout: function() {
    return axios.post('/api/user/signout', xhrHeader);
  },
  authenticateUser: function() {
    return axios.post('/api/user/authenticate/', xhrHeader);
  }, 
  updateUser: function(user) {
    return axios.put('/api/user/update', user);
  },
  // Monthly Routes 
  newMonthly: function(monthly) {
    return axios.post('/api/monthly/', monthly);
  },
  getMonthly: function() {
    return axios.get('/api/monthly/info');
  },
  updateMonthly: function(monthly){
    return axios.put('/api/monthly/update', monthly);
  },
  // Pick Up Routes 
  newPickUp: function(pickUp) {
    return axios.post('/api/pickup/new', pickUp);
  },
  getPickUp: function(){
    return axios.get('/api/pickup/info');
  },
  updatePickUp: function(pickUp) {
    return axios.put('/api/pickup/update', pickUp);
  },
  deletePickUp: function(pickUp) {
    return axios.delete('/api/pickup/delete', pickUp);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post('/api/books', bookData);
  }
};

// session storage
//function login(username, password) {
//window.localStorage.setItem(username, token)
// }
