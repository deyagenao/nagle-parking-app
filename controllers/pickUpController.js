const db = require('../models');
const moment = require('moment');

// Defining methods for the pick up controller
module.exports = {
  // function for creating a new pick up time
  create: function(req, res) {
    if (
      //     _userId: req.session.userId,
      req.body.pickUpTime &&
      req.body.pickUpDate
    ) {
      const pickUpInfo = {
        pickUpTime: req.body.pickUpTime,
        pickUpDate: req.body.pickUpDate
      };
      db.PickUp.create(pickUpInfo)
        .then(dbPickUp => res.json(dbPickUp))
        .catch(err => res.status(422).json(err));
    }
  },
  // function for retrieving all pick up information
  find: function(req, res) {
    db.PickUp.findOne({ _userId: req.session.userId })
      .then(dbPickUp => res.json(dbPickUp))
      .catch(err => res.status(422).json(err));
  },
  // function for updating a pick up
  update: function(req, res) {
    db.PickUp.updateOne(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(dbPickUp => res.json(dbPickUp))
      .catch(err => res.status(422).json(err));
  },
  // function for "canceling" a pick up
  delete: function(req, res) {
    db.PickUp.remove({ _id: req.params.id })
      .then(dbPickUp => res.json(dbPickUp))
      .catch(err => res.status(422).json(err));
  }
};
