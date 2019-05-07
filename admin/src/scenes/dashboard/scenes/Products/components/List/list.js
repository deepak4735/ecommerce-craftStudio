import React from 'react';

// Import styles
import { ListContainer, ListHeaders, ProductList, HeaderItem } from './styles';

// Import components
import ListItem from './components/listItem';

const ListComponent = () => {
  return (
    <ListContainer>
      <ListHeaders>
        <HeaderItem>Title</HeaderItem>
        <HeaderItem>Base Price</HeaderItem>
        <HeaderItem>Available</HeaderItem>
        <HeaderItem>Category</HeaderItem>
      </ListHeaders>
      <ProductList>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ProductList>
    </ListContainer>
  );
};

export default ListComponent;
