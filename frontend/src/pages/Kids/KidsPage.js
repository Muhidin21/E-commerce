import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Images from '../../components/Assets/images';
import './KidsPage.css';

const KidsPage = () => {
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
      id: 25,
      name: "Kids' Hooded Sweatshirt",
      image: Images.products.kids.p25,
      price: 45.0,
      oldPrice: 65.0
    },
    {
      id: 26,
      name: "Kids' Casual T-Shirt",
      image: Images.products.kids.p26,
      price: 35.0,
      oldPrice: 50.0
    },
    {
      id: 27,
      name: "Kids' Summer Outfit",
      image: Images.products.kids.p27,
      price: 55.0,
      oldPrice: 75.0
    },
    {
      id: 28,
      name: "Kids' Sports Wear",
      image: Images.products.kids.p28,
      price: 40.0,
      oldPrice: 60.0
    },
    {
      id: 29,
      name: "Kids' Party Dress",
      image: Images.products.kids.p29,
      price: 65.0,
      oldPrice: 85.0
    },
    {
      id: 30,
      name: "Kids' Winter Jacket",
      image: Images.products.kids.p30,
      price: 75.0,
      oldPrice: 95.0
    },
    {
      id: 31,
      name: "Kids' School Uniform",
      image: Images.products.kids.p31,
      price: 50.0,
      oldPrice: 70.0
    },
    {
      id: 32,
      name: "Kids' Casual Pants",
      image: Images.products.kids.p32,
      price: 35.0,
      oldPrice: 55.0
    },
    {
      id: 33,
      name: "Kids' Dress Shirt",
      image: Images.products.kids.p33,
      price: 40.0,
      oldPrice: 60.0
    },
    {
      id: 34,
      name: "Kids' Play Outfit",
      image: Images.products.kids.p34,
      price: 45.0,
      oldPrice: 65.0
    },
    {
      id: 35,
      name: "Kids' Summer Dress",
      image: Images.products.kids.p35,
      price: 55.0,
      oldPrice: 75.0
    },
    {
      id: 36,
      name: "Kids' Casual Set",
      image: Images.products.kids.p36,
      price: 60.0,
      oldPrice: 80.0
    }
  ];

  return (
    <div className="category-page">
      <div className="category-banner">
        <img src={Images.banners.kids} alt="Kids' Fashion" />
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

export default KidsPage;