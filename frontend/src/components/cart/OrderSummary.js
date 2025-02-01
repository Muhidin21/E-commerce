import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = ({ cart }) => {
  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="summary-item">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Link to="/checkout" className="checkout-btn">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default OrderSummary; 