const router = require('express').Router();
const monthlyController = require('../../controllers/monthlyController');

// Route for creating a new monthly reservation, matches with '/api/monthly/'
router.route('/').post(monthlyController.create);

// Route for retrieving all monthly information, matches with '/api/monthly/info'
router.route('/info').get(monthlyController.find);

// Route for updating monthly info, matches with '/api/monthly/update'
router.route('/update').put(monthlyController.update);


module.exports = router;