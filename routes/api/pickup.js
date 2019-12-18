const router = require('express').Router();
const pickUpController = require('../../controllers/pickUpController');

// Route for creating a new pick up time, matches with '/api/pickup/new'
router.route('/new').post(pickUpController.create);

// Route for retrieving all pick up information, matches with '/api/pickup/info'
router.route('/info').get(pickUpController.find);

// Route for updating pick up info, matches with '/api/pickup/update'
router.route('/update').put(pickUpController.update);

// Route for deleting pick up request, matches with '/api/pickup/delete'
router.route('/delete').delete(pickUpController.delete)


module.exports = router;