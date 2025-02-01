import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserOrders = () => {
      // Ensure user is authenticated
      if (!user || !user.id) {
        navigate('/login', { state: { from: '/orders' } });
        return;
      }

      try {
        const savedOrders = localStorage.getItem('orderHistory');
        if (savedOrders) {
          const allOrders = JSON.parse(savedOrders);
          // Strictly filter orders for the current user only
          const userOrders = allOrders.filter(order => 
            order.userId === user.id && 
            order.userEmail === user.email // Double check user identity
          );
          
          // Sort by date (most recent first)
          userOrders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
          setOrders(userOrders);
        } else {
          setOrders([]); // No orders found
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setOrders([]); // Reset orders on error
      }
      setLoading(false);
    };

    fetchUserOrders();
  }, [user, navigate]);

  // Protect against unauthorized access
  if (!user) {
    return null; // Don't render anything if not authenticated
  }

  const formatPrice = (price) => {
    return price ? price.toFixed(2) : '0.00';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="orders-page">
        <div className="loading-spinner">Loading your orders...</div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Order History</h2>
      
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <button onClick={() => navigate('/shop')} className="shop-now-btn">
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order, index) => (
            <div key={order.id || index} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <span className="order-date">
                    Ordered on: {formatDate(order.orderDate)}
                  </span>
                  <span className="order-status">
                    Status: {order.status}
                  </span>
                  <span className="order-id">
                    Order ID: #{order.id || index + 1}
                  </span>
                </div>
                <div className="order-total">
                  Total: ${formatPrice(order.totalAmount)}
                </div>
              </div>
              
              <div className="order-items">
                {order.items.map((item, itemIndex) => (
                  <div key={`${order.id}-${itemIndex}`} className="order-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-price">
                        ${formatPrice(item.price)} x {item.quantity}
                      </p>
                    </div>
                    <div className="item-total">
                      ${formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders; 