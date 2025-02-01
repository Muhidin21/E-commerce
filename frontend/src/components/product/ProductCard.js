import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart">
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 