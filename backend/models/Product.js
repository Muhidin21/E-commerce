const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    min: [0, 'Price must be greater than 0']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Men', 'Women', 'Kids']
  },
  subCategory: {
    type: String,
    required: [true, 'Please add a subcategory'],
    enum: [
      // Men's subcategories
      'Men-Shirts', 'Men-Pants', 'Men-Shoes', 'Men-Accessories',
      // Women's subcategories
      'Women-Dresses', 'Women-Tops', 'Women-Pants', 'Women-Shoes', 'Women-Accessories',
      // Kids subcategories
      'Kids-Boys', 'Kids-Girls', 'Kids-Shoes', 'Kids-Accessories'
    ]
  },
  images: [{
    type: String,
    required: [true, 'Please add at least one image']
  }],
  exclusiveImage: {
    type: String,
    default: 'Assets/exclusive_image.png'
  },
  isExclusive: {
    type: Boolean,
    default: false
  },
  size: {
    type: [String],
    required: [true, 'Please add available sizes'],
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', 
           '4', '5', '6', '7', '8', '9', '10', '11', '12',
           '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
  },
  color: {
    type: [String],
    required: [true, 'Please add available colors']
  },
  stock: {
    type: Number,
    required: [true, 'Please add stock quantity'],
    min: [0, 'Stock cannot be negative']
  },
  isNew: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, 'Discount cannot be negative'],
    max: [100, 'Discount cannot exceed 100%']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create indexes for better query performance
productSchema.index({ category: 1, subCategory: 1 });
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ price: 1 });
productSchema.index({ isExclusive: 1 });

// Virtual for discounted price
productSchema.virtual('discountedPrice').get(function() {
  if (this.discount > 0) {
    return this.price - (this.price * (this.discount / 100));
  }
  return this.price;
});

module.exports = mongoose.model('Product', productSchema); 