import React from 'react';

// Import styles
import { ListItemContainer, Item } from './styles';

const ListItem = props => {
  return (
    <ListItemContainer>
      <Item>Chair</Item>
      <Item>210 dkk</Item>
      <Item>Yes</Item>
      <Item>Furniture</Item>
    </ListItemContainer>
  );
};

export default ListItem;
