import React from 'react';

// Import styles
import { ListItemContainer, ItemValue, ItemName, Section } from './styles';

const ListItem = props => {
  const { attributeName, attributeValues } = props.data;
  return (
    <ListItemContainer>
      <ItemName>{attributeName}</ItemName>
      <Section>
        {attributeValues.map((el, i) => (
          <ItemValue key={i}>{el}, </ItemValue>
        ))}
      </Section>
    </ListItemContainer>
  );
};

export default ListItem;
