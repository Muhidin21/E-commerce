import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Fashion Store
        </Link>
        
        <div className="nav-links">
          <Link to="/">Shop</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart />
            <span className="cart-count">{getCartCount()}</span>
          </Link>
          {user ? (
            <div className="user-menu">
              <Link to="/profile"><FaUser /></Link>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 