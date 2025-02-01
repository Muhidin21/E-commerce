const express = require('express');
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrder
} = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

// Protect all routes
router.use(protect);

router.route('/')
  .post(createOrder)
  .get(getUserOrders);

router.route('/:id')
  .get(getOrder);

module.exports = router; 