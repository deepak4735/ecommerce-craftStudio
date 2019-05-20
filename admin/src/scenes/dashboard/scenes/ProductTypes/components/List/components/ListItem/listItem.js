import React from 'react';

// Import styles
import { ListItemContainer, ItemValue, ItemName, Section } from './styles';

const ListItem = props => {
  const { attributeName, attributeValues } = props.data;
  console.log(props.data);
  return (
    <ListItemContainer>
      <ItemName>{attributeName}</ItemName>
      <Section>
        {attributeValues.map((el, i) => (
          <ItemValue key={i}>{el.value}, </ItemValue>
        ))}
      </Section>
    </ListItemContainer>
  );
};

export default ListItem;
