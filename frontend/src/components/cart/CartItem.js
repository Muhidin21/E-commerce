import React from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="item-size">Size: {item.size}</p>
        <p className="item-price">${item.price}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => onUpdateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1}>
          <FaMinus />
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}>
          <FaPlus />
        </button>
      </div>
      <div className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button className="remove-item" onClick={() => onRemove(item._id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem; 