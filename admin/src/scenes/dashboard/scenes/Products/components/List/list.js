import React from 'react';

// Import styles
import { ListContainer, ListHeaders, ProductList, HeaderItem } from './styles';

const ListComponent = () => {
  return (
    <ListContainer>
      <ListHeaders>
        <HeaderItem>Title</HeaderItem>
        <HeaderItem>Base Price</HeaderItem>
        <HeaderItem>Available</HeaderItem>
        <HeaderItem>Category</HeaderItem>
      </ListHeaders>
      <ProductList />
    </ListContainer>
  );
};

export default ListComponent;
