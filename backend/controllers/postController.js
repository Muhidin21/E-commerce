const Post = require('../models/Post');
const { catchAsync, AppError } = require('../utils/errorHandler');

// @desc    Create new post
// @route   POST /api/posts
// @access  Private
exports.createPost = catchAsync(async (req, res) => {
  const { title, content, tags, status } = req.body;

  const post = await Post.create({
    title,
    content,
    tags,
    status,
    author: req.user.id
  });

  res.status(201).json({
    status: 'success',
    message: 'Post created successfully ✔',
    data: {
      post
    }
  });
});

// @desc    Get all posts with pagination and filters
// @route   GET /api/posts
// @access  Public
exports.getPosts = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const { search, tag, status } = req.query;

  // Build query
  const query = { status: 'published' };

  // Search functionality
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } }
    ];
  }

  // Filter by tag
  if (tag) {
    query.tags = tag;
  }

  // Filter by status (admin only)
  if (status && req.user?.role === 'admin') {
    query.status = status;
  }

  const result = await Post.getPaginatedPosts(query, page, limit);

  res.status(200).json({
    status: 'success',
    data: result
  });
});

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Public
exports.getPost = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate({
      path: 'comments.user',
      select: 'name avatar'
    });

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  // Increment view count
  post.viewCount += 1;
  await post.save();

  res.status(200).json({
    status: 'success',
    data: {
      post
    }
  });
});

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
exports.updatePost = catchAsync(async (req, res) => {
  const { title, content, tags, status } = req.body;

  let post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  // Make sure user is post author or admin
  if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
    throw new AppError('Not authorized to update this post', 403);
  }

  post = await Post.findByIdAndUpdate(
    req.params.id,
    { title, content, tags, status },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'success',
    message: 'Post updated successfully ✔',
    data: {
      post
    }
  });
});

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
exports.deletePost = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  // Make sure user is post author or admin
  if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
    throw new AppError('Not authorized to delete this post', 403);
  }

  await post.remove();

  res.status(200).json({
    status: 'success',
    message: 'Post deleted successfully ✔',
    data: null
  });
});

// @desc    Like/Unlike post
// @route   PUT /api/posts/:id/like
// @access  Private
exports.toggleLike = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  // Check if post has already been liked by user
  const isLiked = post.isLikedByUser(req.user.id);

  if (isLiked) {
    // Unlike
    post.likes = post.likes.filter(
      like => like.toString() !== req.user.id
    );
  } else {
    // Like
    post.likes.push(req.user.id);
  }

  await post.save();

  res.status(200).json({
    status: 'success',
    message: `Post ${isLiked ? 'unliked' : 'liked'} successfully ✔`,
    data: {
      likes: post.likes
    }
  });
});

// @desc    Add comment to post
// @route   POST /api/posts/:id/comments
// @access  Private
exports.addComment = catchAsync(async (req, res) => {
  const { text } = req.body;
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  post.comments.unshift({
    user: req.user.id,
    text
  });

  await post.save();

  res.status(201).json({
    status: 'success',
    message: 'Comment added successfully ✔',
    data: {
      comments: post.comments
    }
  });
});

// @desc    Delete comment
// @route   DELETE /api/posts/:id/comments/:commentId
// @access  Private
exports.deleteComment = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('Post not found', 404);
  }

  // Pull out comment
  const comment = post.comments.find(
    comment => comment.id === req.params.commentId
  );

  if (!comment) {
    throw new AppError('Comment not found', 404);
  }

  // Make sure user is comment author or admin
  if (comment.user.toString() !== req.user.id && req.user.role !== 'admin') {
    throw new AppError('Not authorized to delete this comment', 403);
  }

  // Remove comment
  post.comments = post.comments.filter(
    ({ id }) => id !== req.params.commentId
  );

  await post.save();

  res.status(200).json({
    status: 'success',
    message: 'Comment deleted successfully ✔',
    data: {
      comments: post.comments
    }
  });
}); 