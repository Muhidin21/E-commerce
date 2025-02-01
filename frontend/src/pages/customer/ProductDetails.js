import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/product/ProductDetails';

const ProductDetailsPage = () => {
  const { id } = useParams();
  
  return (
    <div className="product-details-page">
      <ProductDetails productId={id} />
    </div>
  );
};

export default ProductDetailsPage; 