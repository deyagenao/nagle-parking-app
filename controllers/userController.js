const db = require('../models');

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    //validate request
    if (
      req.body.email &&
      req.body.password &&
      req.body.passwordConf &&
      req.body.firstName &&
      req.body.lastName &&
      req.body.phoneNumber
    ) {
      //create data
      const userData = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber
      };
      db.User.create(userData)
        .then(dbModel => {
          // setting the client cookie
          res.cookie('userId', dbModel._id, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
          });
          // set the session
          req.session.userId = dbModel._id;
          return res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }
  },

  login: function(req, res, next) {
    console.log('login');

    //validate request
    if (req.body.email && req.body.password) {
      db.User.authenticate(req.body.email, req.body.password, function(
        error,
        user
      ) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          console.log(`login: `, user._id);
          res.cookie('userId', user._id, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
          });
          req.session.userId = user._id;
          console.log('redirect');
          return res.redirect('/myaccount');
          return res.redirect('/api/profile');
        }
      });
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
  },

  authenticate: function(req, res, next) {
    console.log('inside auth');
    console.log(`req.session ${JSON.stringify(req.session, null, 4)}`);
    db.User.findById(req.session.userId).exec(function(error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          res.cookie('userId', '').status(401);
          return res.json('Not authorized! Go back!');
        } else {
          res.cookie('userId', user._id, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
          });
          return res.json(true);
          return res.send(
            '<h1>Mail: </h1>' +
              user.email +
              '<br><a type="button" href="/logout">Logout</a>'
          );
        }
      }
    });
  },

  findUserById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
