import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const CustomerLayout = () => {
  return (
    <div className="customer-layout">
      <Navbar />
      <main className="customer-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerLayout; 