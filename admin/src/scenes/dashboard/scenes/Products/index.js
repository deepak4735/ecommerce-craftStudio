import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import { ProductContainer } from './styles';

const Products = () => {
  return (
    <ProductContainer>
      <p>YOYOYOYOYO</p>
      <Link to='/products/create-new-product'>Create a new product</Link>
    </ProductContainer>
  );
};

export default Products;
