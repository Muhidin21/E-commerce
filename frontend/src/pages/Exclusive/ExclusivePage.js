import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ExclusivePage.css';

const ExclusivePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExclusiveProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/products/exclusive');
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exclusive products:', error);
        setLoading(false);
      }
    };

    fetchExclusiveProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="exclusive-page">
      <div className="exclusive-header">
        <img 
          src="/Assets/exclusive_image.png" 
          alt="Exclusive Collection" 
          className="exclusive-banner"
        />
        <div className="header-content">
          <h1>Exclusive Collection</h1>
          <p>Discover our premium selection of exclusive products</p>
        </div>
      </div>

      <div className="exclusive-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`}>
              <div className="product-image-container">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="product-image"
                />
                {product.discount > 0 && (
                  <span className="discount-tag">-{product.discount}%</span>
                )}
                {product.isNew && <span className="new-tag">New</span>}
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                  <div className="price-info">
                    <span className="current-price">
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                    {product.discount > 0 && (
                      <span className="original-price">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="product-category">
                    <span>{product.category}</span>
                    <span className="separator">•</span>
                    <span>{product.subCategory.split('-')[1]}</span>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="sizes">
                    {product.size.slice(0, 3).map((size, index) => (
                      <span key={index} className="size-tag">{size}</span>
                    ))}
                    {product.size.length > 3 && <span className="more-sizes">+{product.size.length - 3}</span>}
                  </div>
                  <div className="colors">
                    {product.color.slice(0, 3).map((color, index) => (
                      <span 
                        key={index} 
                        className="color-dot"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      ></span>
                    ))}
                    {product.color.length > 3 && <span className="more-colors">+{product.color.length - 3}</span>}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusivePage; 