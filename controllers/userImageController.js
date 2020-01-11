const db = require('../models');
const moment = require('moment');

// Defining methods for the pick up controller
module.exports = {
  // function for creating a new pick up time
  create: function(req, res) {
    if (
      //     _userId: req.session.userId,
      req.body.userImage
    ) {
      const userImage = {
        userImage: req.body.userImage
      };
      db.UserImage.create(userImage)
        .then(dbUserImage => res.json(dbUserImage))
        .catch(err => res.status(422).json(err));
    }
  },
  // function for retrieving user image
  find: function(req, res) {
    db.UserImage.findOne({ _userId: req.session.userId })
      .then(dbUserImage => res.json(dbUserImage))
      .catch(err => res.status(422).json(err));
  },
  // function for updating a pick up
  update: function(req, res) {
    db.UserImage.updateOne(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(dbUserImage => res.json(dbUserImage))
      .catch(err => res.status(422).json(err));
  },
  // function for "canceling" a pick up
  delete: function(req, res) {
    db.UserImage.remove({ _id: req.params.id })
      .then(dbUserImage => res.json(dbUserImage))
      .catch(err => res.status(422).json(err));
  }
};
