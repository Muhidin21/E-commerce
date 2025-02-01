import React, { useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import './CategoryPage.css';

const MenPage = () => {
  const [filters, setFilters] = useState({
    category: 'men',
    priceRange: 'all',
    sortBy: 'newest'
  });

  const products = [
    {
      _id: '1',
      name: 'Classic T-Shirt',
      price: 29.99,
      image: '/images/products/men/tshirt.jpg',
      category: 'men'
    },
    {
      _id: '2',
      name: 'Denim Jeans',
      price: 59.99,
      image: '/images/products/men/jeans.jpg',
      category: 'men'
    }
    // Add more products
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Men's Collection</h1>
        <div className="filters">
          <select 
            value={filters.priceRange} 
            onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
          >
            <option value="all">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101+">$101+</option>
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

export default MenPage; 