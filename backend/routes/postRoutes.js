const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  toggleLike,
  addComment,
  deleteComment
} = require('../controllers/postController');

// Public routes
router.get('/', getPosts);
router.get('/:id', getPost);

// Protected routes
router.use(protect);

// Post CRUD operations
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

// Post interactions
router.put('/:id/like', toggleLike);
router.post('/:id/comments', addComment);
router.delete('/:id/comments/:commentId', deleteComment);

// Admin only routes
router.use(restrictTo('admin'));
router.get('/admin/all', getPosts); // Get all posts including drafts

module.exports = router; 