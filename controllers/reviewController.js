const db = require('../models');

// Defining methods for the review controller
module.exports = {
  // function for making a new review
  create: function(req, res) {
    const reviewInfo = {
      // _userId: req.session.userId,
      //   carType: req.body.carType,

      reviews: req.body.reviews
    };
    db.User.create(reviewInfo)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // function for retrieving information about a review commitment
  find: function(req, res) {
    db.User.findOne({ _userId: req.session.userId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // function for updating a review commitment
  update: function(req, res) {
    db.User.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true })
      .then(dbModel => res.json(User))
      .catch(err => res.status(422).json(err));
  }

  // function for "canceling" a monthly commitment (should be the same as an update to commitment, so user cannot delete completely but maybe just make the monthly inactive)
};
