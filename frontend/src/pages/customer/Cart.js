import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [orderStatus, setOrderStatus] = useState('idle');
  const [orderMessage, setOrderMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token && !!user);
  }, [user]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      localStorage.setItem('pendingCart', JSON.stringify(cartItems));
      navigate('/login', { state: { from: '/cart' } });
      return;
    }

    if (cartItems.length === 0) {
      setOrderMessage('Your cart is empty');
      return;
    }

    setOrderStatus('processing');
    setOrderMessage('Processing your order...');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        navigate('/login', { state: { from: '/cart' } });
        return;
      }

      // Create order object
      const newOrder = {
        orderDate: new Date().toISOString(),
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.new_price,
          quantity: item.quantity,
          image: item.image
        })),
        totalAmount: getCartTotal(),
        status: 'completed'
      };

      // Get existing orders from localStorage
      const existingOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
      
      // Add new order to history
      const updatedOrders = [newOrder, ...existingOrders];
      localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));

      // Simulate order processing
      setTimeout(() => {
        setOrderStatus('completed');
        setOrderMessage('Order placed successfully! ✔');
        clearCart(); // This will update the cart count to 0
        setTimeout(() => {
          navigate('/orders'); // Redirect to orders page instead of home
        }, 2000);
      }, 1500);

    } catch (error) {
      console.error('Checkout error:', error);
      setOrderStatus('error');
      setOrderMessage('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>
      
      {!isAuthenticated && (
        <div className="auth-warning">
          Please <button onClick={() => navigate('/login', { state: { from: '/cart' } })}>login</button> to checkout
        </div>
      )}
      
      {orderStatus !== 'idle' && (
        <div className={`order-status ${orderStatus}`}>
          {orderMessage}
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/shop')} className="continue-shopping">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="item-price">
                    <span className="current-price">${item.new_price}</span>
                    <span className="old-price">${item.old_price}</span>
                  </div>
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="item-total">
                  ${(item.new_price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <button 
              className="checkout-button"
              onClick={handleCheckout}
              disabled={orderStatus === 'processing' || cartItems.length === 0}
            >
              {!isAuthenticated ? 'Login to Checkout' : 
               orderStatus === 'processing' ? 'Processing...' : 
               orderStatus === 'completed' ? '✔ Order Complete' : 
               'Checkout'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 