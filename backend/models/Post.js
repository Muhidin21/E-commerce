const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  image: {
    type: String,
    default: null
  },
  tags: [{
    type: String,
    trim: true
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    text: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  },
  viewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
postSchema.index({ title: 'text', content: 'text' });
postSchema.index({ author: 1, createdAt: -1 });
postSchema.index({ status: 1 });

// Virtual field for comment count
postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

// Virtual field for like count
postSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

// Middleware to populate author details
postSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'author',
    select: 'name avatar'
  });
  next();
});

// Static method to get posts with pagination
postSchema.statics.getPaginatedPosts = async function(query = {}, page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  
  const [posts, total] = await Promise.all([
    this.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    this.countDocuments(query)
  ]);

  return {
    posts,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalPosts: total
  };
};

// Instance method to check if user has liked the post
postSchema.methods.isLikedByUser = function(userId) {
  return this.likes.some(like => like.toString() === userId.toString());
};

const Post = mongoose.model('Post', postSchema);

module.exports = Post; 