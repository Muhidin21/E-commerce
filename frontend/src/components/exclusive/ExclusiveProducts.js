import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ExclusiveProducts.css';

const ExclusiveProducts = () => {
  const [exclusiveProducts, setExclusiveProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExclusiveProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/products/exclusive');
        setExclusiveProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exclusive products:', error);
        setLoading(false);
      }
    };

    fetchExclusiveProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="exclusive-section">
      <div className="exclusive-container">
        <div className="exclusive-image">
          <img src="/Assets/exclusive_image.png" alt="Exclusive Offer" />
        </div>
        <div className="exclusive-content">
          <h2>Exclusive Offers For You</h2>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <div className="exclusive-products">
            {exclusiveProducts.map((product) => (
              <div key={product._id} className="exclusive-product-card">
                <Link to={`/product/${product._id}`}>
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="price-container">
                      <span className="original-price">${product.price}</span>
                      {product.discount > 0 && (
                        <span className="discounted-price">
                          ${product.discountedPrice}
                        </span>
                      )}
                    </div>
                    {product.discount > 0 && (
                      <span className="discount-badge">-{product.discount}%</span>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/exclusive" className="view-all-btn">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProducts; 