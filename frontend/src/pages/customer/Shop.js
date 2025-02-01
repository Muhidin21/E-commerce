import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../../components/Assets/all_products';
import { useCart } from '../../context/CartContext';
import './Shop.css';

const Shop = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const { addToCart, cartItems, getCartCount } = useCart();
  const [addedToCart, setAddedToCart] = useState(null);

  // Update selected category when URL parameter changes
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  // Filter products based on category and price range
  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || 
                         (selectedCategory === 'kids' && product.category === 'kid') ||
                         product.category.toLowerCase() === selectedCategory.toLowerCase();
    let priceMatch = true;

    if (priceRange === 'under50') {
      priceMatch = product.new_price < 50;
    } else if (priceRange === '50to100') {
      priceMatch = product.new_price >= 50 && product.new_price <= 100;
    } else if (priceRange === 'over100') {
      priceMatch = product.new_price > 100;
    }

    return categoryMatch && priceMatch;
  });

  const handleAddToCart = (product) => {
    try {
      addToCart(product);
      setAddedToCart(product.id);
      setTimeout(() => setAddedToCart(null), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="shop-page">
      <h2 className="shop-title">
        {category ? `${category}'s Collection` : 'Our Products'}
      </h2>

      {/* Show exclusive image only on main shop page */}
      {!category && (
        <div className="exclusive-section">
          <img src="Assets/exclusive_image.png" alt="Exclusive Offer" className="exclusive-image" />
        </div>
      )}

      <div className="shop-filters">
        <div className="filter-section">
          <h3>Categories</h3>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Price Range</h3>
          <select 
            value={priceRange} 
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="under50">Under $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="over100">Over $100</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-price">
                <span className="current-price">${product.new_price}</span>
                <span className="old-price">${product.old_price}</span>
              </div>
              <button 
                className={`add-to-cart ${addedToCart === product.id ? 'added' : ''} ${isInCart(product.id) ? 'in-cart' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={addedToCart === product.id}
              >
                {addedToCart === product.id ? 'Added!' : isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop; 