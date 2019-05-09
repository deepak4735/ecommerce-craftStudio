import React from 'react';

// Import styles
import { ListItemContainer, ItemValue, ItemName, Section } from './styles';

const ListItem = props => {
  console.log(props.data);
  const { attributeName, attributeValues } = props.data;
  return (
    <ListItemContainer>
      <ItemName>{attributeName}</ItemName>
      <Section>
        {attributeValues.map(el => (
          <ItemValue>{el}, </ItemValue>
        ))}
      </Section>
    </ListItemContainer>
  );
};

export default ListItem;
