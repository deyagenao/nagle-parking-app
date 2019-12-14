const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/user/signup"
router.route('/signup').post(userController.create);

// finds user information by Id
router.route('/user/:id').get(userController.findUserById);

// Matches with "/api/user/authenticate"
router.route('/authenticate').post(userController.authenticate);

// Matches with "/api/user"
router.route('/').post(userController.login);

// TO-DO: logout route (delete cookie and session - req.session.destroy)
module.exports = router;
