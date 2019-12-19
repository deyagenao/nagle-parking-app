const db = require('../models');
const moment = require('moment')

// Defining methods for the monthly controller 
module.exports = {
    // function for making a new monthly commitment
    create: function(req, res) {
        const monthlyInfo = {
            _userId: req.session.userId,
            priceRate: req.body.priceRate,
            startDate: req.body.startDate || Date.now,
            paid: req.body.paid || false,
            billingCycle: startDate + ' - ' + moment(startDate).add(1, 'months')
        };
        db.Monthly.create(monthlyInfo)
            .then(dbMonthly => res.json(dbMonthly))
            .catch(err => res.status(422).json(err));
    },
    // function for retrieving information about a monthly commitment 
    find: function(req, res) {
        db.Monthly.findOne({ _userId: req.session.userId})
            .then(dbMonthly => res.json(dbMonthly))
            .catch(err => res.status(422).json(err));
    },
    // function for updating a monthly commitment
    update: function(req, res) {
        db.Monthly.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true})
            .then(dbMonthly => res.json(dbMonthly))
            .catch(err => res.status(422).json(err));
    }


    // function for "canceling" a monthly commitment (should be the same as an update to commitment, so user cannot delete completely but maybe just make the monthly inactive)



}