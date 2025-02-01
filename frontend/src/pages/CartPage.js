import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';
import './CartPage.css';

const CartPage = () => {
  // Mock cart data - replace with context or redux state
  const cart = {
    items: [
      {
        _id: '1',
        name: 'Classic T-Shirt',
        price: 29.99,
        image: '/images/products/tshirt.jpg',
        size: 'M',
        quantity: 1
      },
      {
        _id: '2',
        name: 'Denim Jeans',
        price: 59.99,
        image: '/images/products/jeans.jpg',
        size: '32',
        quantity: 1
      }
    ]
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    // Update cart quantity logic here
    console.log('Update quantity:', productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    // Remove item logic here
    console.log('Remove item:', productId);
  };

  if (cart.items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cart.items.map(item => (
            <CartItem
              key={item._id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>
        <div className="cart-summary">
          <OrderSummary cart={cart} />
        </div>
      </div>
      <div className="cart-actions">
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage; 