import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Images from '../../components/Assets/images';
import './WomenPage.css';

const WomenPage = () => {
  const { addToCart, cartItems } = useCart();
  const [addedToCart, setAddedToCart] = useState(null);

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

  const products = [
    {
      id: 1,
      name: "Women's Floral Dress",
      image: Images.products.women.p1,
      price: 65.0,
      oldPrice: 85.0
    },
    {
      id: 2,
      name: "Women's Summer Blouse",
      image: Images.products.women.p2,
      price: 45.0,
      oldPrice: 60.0
    },
    {
      id: 3,
      name: "Women's Elegant Skirt",
      image: Images.products.women.p3,
      price: 55.0,
      oldPrice: 75.0
    },
    {
      id: 4,
      name: "Women's Casual Jeans",
      image: Images.products.women.p4,
      price: 75.0,
      oldPrice: 95.0
    },
    {
      id: 9,
      name: "Women's Party Dress",
      image: Images.products.women.p9,
      price: 95.0,
      oldPrice: 125.0
    },
    {
      id: 10,
      name: "Women's Office Blazer",
      image: Images.products.women.p10,
      price: 85.0,
      oldPrice: 110.0
    },
    {
      id: 11,
      name: "Women's Knit Sweater",
      image: Images.products.women.p11,
      price: 60.0,
      oldPrice: 80.0
    },
    {
      id: 12,
      name: "Women's Winter Coat",
      image: Images.products.women.p12,
      price: 120.0,
      oldPrice: 150.0
    }
  ];

  return (
    <div className="category-page">
      <div className="category-banner">
        <img src={Images.banners.women} alt="Women's Fashion" />
      </div>

      <div className="exclusive-collection">
        <div className="exclusive-image">
          <img src={Images.special.exclusive} alt="Exclusive Collection" />
        </div>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-price">
                <span className="current-price">${product.price}</span>
                <span className="old-price">${product.oldPrice}</span>
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

export default WomenPage;