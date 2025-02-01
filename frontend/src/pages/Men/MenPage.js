import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Images from '../../components/Assets/images';
import './MenPage.css';

const MenPage = () => {
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
      id: 5,
      name: "Men's Casual Shirt",
      image: Images.products.men.p5,
      price: 55.0,
      oldPrice: 75.0
    },
    {
      id: 6,
      name: "Men's Summer T-Shirt",
      image: Images.products.men.p6,
      price: 35.0,
      oldPrice: 50.0
    },
    {
      id: 7,
      name: "Men's Sport Jacket",
      image: Images.products.men.p7,
      price: 75.0,
      oldPrice: 95.0
    },
    {
      id: 8,
      name: "Men's Winter Coat",
      image: Images.products.men.p8,
      price: 125.0,
      oldPrice: 160.0
    },
    {
      id: 13,
      name: "Men's Casual Jacket",
      image: Images.products.men.p13,
      price: 85.0,
      oldPrice: 120.5
    },
    {
      id: 14,
      name: "Men's Formal Shirt",
      image: Images.products.men.p14,
      price: 65.0,
      oldPrice: 90.0
    },
    {
      id: 15,
      name: "Men's Denim Jacket",
      image: Images.products.men.p15,
      price: 95.0,
      oldPrice: 130.0
    },
    {
      id: 16,
      name: "Men's Classic Suit",
      image: Images.products.men.p16,
      price: 175.0,
      oldPrice: 220.0
    },
    {
      id: 17,
      name: "Men's Casual Blazer",
      image: Images.products.men.p17,
      price: 115.0,
      oldPrice: 150.0
    },
    {
      id: 18,
      name: "Men's Business Shirt",
      image: Images.products.men.p18,
      price: 70.0,
      oldPrice: 95.0
    },
    {
      id: 19,
      name: "Men's Leather Jacket",
      image: Images.products.men.p19,
      price: 145.0,
      oldPrice: 190.0
    },
    {
      id: 20,
      name: "Men's Casual Sweater",
      image: Images.products.men.p20,
      price: 65.0,
      oldPrice: 85.0
    }
  ];

  return (
    <div className="category-page">
      <div className="category-banner">
        <img src={Images.banners.men} alt="Men's Fashion" />
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

export default MenPage;