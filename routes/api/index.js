const router = require('express').Router();
const userRoutes = require('./user');
const reviewRoute = require('./review');
const monthlyRoutes = require('./monthly');
const pickUpRoutes = require('./pickup');

// /api/user routes
router.use('/user', userRoutes);
router.use('/monthly', monthlyRoutes);
router.use('/pickup', pickUpRoutes);
router.use('/review', reviewRoute);

module.exports = router;
