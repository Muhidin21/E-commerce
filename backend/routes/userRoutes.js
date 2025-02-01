const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
router.get('/', protect, restrictTo('admin'), (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Route not implemented yet'
  });
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
router.get('/:id', protect, restrictTo('admin'), (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Route not implemented yet'
  });
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
router.put('/:id', protect, (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Route not implemented yet'
  });
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
router.delete('/:id', protect, restrictTo('admin'), (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Route not implemented yet'
  });
});

module.exports = router; 