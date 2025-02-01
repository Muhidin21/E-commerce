import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for token and user data in localStorage on mount
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const response = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      if (data.success && data.token) {
        // Store the token
        localStorage.setItem('token', data.token);

        // Get user data after successful registration
        const userResponse = await fetch('/api/v1/auth/me', {
          headers: {
            'Authorization': `Bearer ${data.token}`
          }
        });

        if (!userResponse.ok) {
          throw new Error('Failed to get user data');
        }

        const userData = await userResponse.json();
        
        // Set user data in state and localStorage
        const userToStore = {
          id: userData.data._id,
          name: userData.data.name,
          email: userData.data.email,
          role: userData.data.role
        };
        
        setUser(userToStore);
        localStorage.setItem('user', JSON.stringify(userToStore));
        
        return data;
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.success && data.token) {
        localStorage.setItem('token', data.token);

        // Get user data after successful login
        const userResponse = await fetch('/api/v1/auth/me', {
          headers: {
            'Authorization': `Bearer ${data.token}`
          }
        });

        if (!userResponse.ok) {
          throw new Error('Failed to get user data');
        }

        const userData = await userResponse.json();
        
        // Set user data in state and localStorage
        const userToStore = {
          id: userData.data._id,
          name: userData.data.name,
          email: userData.data.email,
          role: userData.data.role
        };
        
        setUser(userToStore);
        localStorage.setItem('user', JSON.stringify(userToStore));
        
        return data;
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 