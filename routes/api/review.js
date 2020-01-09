const router = require('express').Router();
const reviewController = require('../../controllers/reviewController');

// Matches with '/api/user/reviews'
router.route('/').post(reviewController.create);

// Matches with '/api/user/findreviews'
router.route('/findreviews').get(reviewController.findReviews);
