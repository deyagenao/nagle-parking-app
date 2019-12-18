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
  authenticateUser: function() {
    return axios.post('/api/user/authenticate/', xhrHeader);
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
