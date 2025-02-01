import React, { useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import './CategoryPage.css';

const KidsPage = () => {
  const [filters, setFilters] = useState({
    category: 'kids',
    priceRange: 'all',
    sortBy: 'newest'
  });

  const products = [
    {
      _id: '1',
      name: 'Kids T-Shirt',
      price: 19.99,
      image: '/images/products/kids/tshirt.jpg',
      category: 'kids'
    },
    {
      _id: '2',
      name: 'Kids Jeans',
      price: 29.99,
      image: '/images/products/kids/jeans.jpg',
      category: 'kids'
    }
    // Add more products
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Kids' Collection</h1>
        <div className="filters">
          <select 
            value={filters.priceRange} 
            onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
          >
            <option value="all">All Prices</option>
            <option value="0-25">$0 - $25</option>
            <option value="26-50">$26 - $50</option>
            <option value="51+">$51+</option>
          </select>
          <select 
            value={filters.sortBy}
            onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsPage; 