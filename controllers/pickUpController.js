const db = require("../models");

// Defining methods for the pick up controller 
module.exports = {
    // function for creating a new pick up time
    create: function(req, res) {
        const pickUpInfo = {
            _userId: req.session.userId,
            pickUpTime: req.body.pickUpTime
        };
        db.PickUp.create(pickUpInfo)
            .then(dbPickUp => res.json(dbPickUp))
            .catch(err => res.status(422).json(err));
    },
    // function for retrieving all pick up information
    find: function(req, res) {
        db.PickUp.find({ _userId: req.session.userId})
            .then(dbMonthly => res.json(dbMonthly))
            .catch(err => res.status(422).json(err));
    },
    // function for updating a pick up
    update: function(req, res) {
        db.PickUp.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true })
            .then(dbPickUp => res.json(dbPickUp))
            .catch(err => res.status(422).json(err));
    },
    // function for "canceling" a pick up
    delete: function(req, res) {
        db.PickUp.remove({ _id: req.params.id })
            .then(dbPickUp => res.json(dbPickUp))
            .catch(err => res.status(422).json(err));
    }
}