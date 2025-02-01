const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');
const {
  createOrder,
  getUserOrders,
  getOrder,
  updateOrderStatus,
  cancelOrder
} = require('../controllers/orderController');

// Protect all routes after this middleware
router.use(protect);

// User routes
router.route('/')
  .post(createOrder)
  .get(getUserOrders);

router.route('/:id')
  .get(getOrder)
  .delete(cancelOrder);

// Admin routes
router.route('/:id/status')
  .patch(restrictTo('admin'), updateOrderStatus);

module.exports = router; 