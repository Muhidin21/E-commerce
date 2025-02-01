import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = [
    {
      _id: '1',
      name: 'Classic T-Shirt',
      price: 29.99,
      image: '/images/products/tshirt.jpg',
      category: 'men'
    },
    // Add more featured products
  ];

  const categories = [
    { id: 'men', name: 'Men', image: '/images/categories/men.jpg' },
    { id: 'women', name: 'Women', image: '/images/categories/women.jpg' },
    { id: 'kids', name: 'Kids', image: '/images/categories/kids.jpg' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Fashion Store</h1>
          <p>Discover the latest trends in fashion</p>
          <Link to="/shop" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={`/${category.id}`} 
              className="category-card"
            >
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 