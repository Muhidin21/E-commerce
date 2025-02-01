import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/product/ProductDetails';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock product data - replace with API call
  useEffect(() => {
    // Simulating API call
    const fetchProduct = () => {
      setLoading(true);
      // Mock product data
      const mockProduct = {
        _id: id,
        name: 'Classic T-Shirt',
        price: 29.99,
        description: 'A comfortable and stylish t-shirt made from 100% cotton.',
        image: '/images/products/tshirt.jpg',
        sizes: ['S', 'M', 'L', 'XL'],
        category: 'men',
        inStock: true,
        colors: ['Black', 'White', 'Gray']
      };

      setTimeout(() => {
        setProduct(mockProduct);
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-details-page">
      <div className="breadcrumb">
        Home / {product.category} / {product.name}
      </div>
      <ProductDetails product={product} />
      
      <section className="related-products">
        <h2>You May Also Like</h2>
        {/* Add related products component here */}
      </section>
    </div>
  );
};

export default ProductDetailsPage; 