import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardTitle,
  ProductCardStatus,
  BrowseProductBtn
} from './styles';

const ProductCard = props => {
  const { title, price, status, productId } = props;

  return (
    <ProductCardContainer>
      <ProductCardImage>
        <img
          src='data:image/webp;base64,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'
          alt='test'
        />
      </ProductCardImage>
      <ProductCardTitle>
        <p>{title}</p>
        <p>{price} kr.</p>
      </ProductCardTitle>
      <ProductCardStatus status={status}>
        <p>Status: </p>
        {status === 'available' ? <p>Available</p> : <p>Unavailable</p>}
      </ProductCardStatus>
      <BrowseProductBtn>
        <Link to={`/products/${productId}`}>Browse product</Link>
      </BrowseProductBtn>
    </ProductCardContainer>
  );
};

export default ProductCard;
