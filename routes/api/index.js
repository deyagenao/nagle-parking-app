const router = require('express').Router();
const userRoutes = require('./user');
const monthlyRoutes = require('./monthly');
const pickUpRoutes = require('./pickup');

// /api/user routes
router.use('/user', userRoutes);
router.use('/monthly', monthlyRoutes);
router.use('/pickup', pickUpRoutes);


module.exports = router;
