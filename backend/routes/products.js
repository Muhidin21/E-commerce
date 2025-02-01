const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getExclusiveProducts
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
router.route('/').get(getProducts);
router.route('/exclusive').get(getExclusiveProducts);
router.route('/category/:category').get(getProductsByCategory);
router.route('/:id').get(getProduct);

// Protected routes
router.use(protect);
router
  .route('/')
  .post(createProduct);

router
  .route('/:id')
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router; 