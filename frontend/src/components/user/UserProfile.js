import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      setSuccess('Profile updated successfully');
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to update profile');
      setSuccess('');
    }
  };

  return (
    <div className="user-profile">
      <h2>My Profile</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>
        <button type="submit" className="update-btn">Update Profile</button>
      </form>

      <div className="order-history">
        <h3>Recent Orders</h3>
        {/* Add order history component here */}
      </div>
    </div>
  );
};

export default UserProfile; 