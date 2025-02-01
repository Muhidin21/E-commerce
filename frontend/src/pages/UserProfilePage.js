import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from '../components/user/UserProfile';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const orders = [
    {
      id: '1',
      date: '2024-01-15',
      total: 89.98,
      status: 'Delivered',
      items: [
        { name: 'Classic T-Shirt', quantity: 1, price: 29.99 },
        { name: 'Denim Jeans', quantity: 1, price: 59.99 }
      ]
    }
    // Add more orders as needed
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        <aside className="profile-sidebar">
          <nav>
            <Link to="/profile" className="active">Profile</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/addresses">Addresses</Link>
          </nav>
        </aside>

        <main className="profile-content">
          <UserProfile />

          <section className="recent-orders">
            <h2>Recent Orders</h2>
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <span>Order #{order.id}</span>
                    <span className="order-date">{order.date}</span>
                  </div>
                  <div className="order-items">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <span>{item.name} x{item.quantity}</span>
                        <span>${item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="order-footer">
                    <span className="order-status">{order.status}</span>
                    <span className="order-total">Total: ${order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserProfilePage; 