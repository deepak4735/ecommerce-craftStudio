import React from 'react';
import { withRouter } from 'react-router';

// Import components
import { Input } from '../../../../../../components/FormElements/formElements';

// Import styles
import {
  Container,
  SelectBox,
  CategoryName,
  ProductsInCategory
} from './styles';

const ListItem = props => {
  const { id, name, address, postNumber, city } = props.data;
  return (
    <Container id={id}>
      <SelectBox>
        <Input
          id={id}
          onClick={e => props.delSelectedStockLocations(e)}
          type='checkbox'
        />
      </SelectBox>
      <CategoryName
        onClick={e => props.history.push(`/stock/edit/${props.data.id}`)}
      >
        {name}
      </CategoryName>
      <CategoryName
        onClick={e => props.history.push(`/stock/edit/${props.data.id}`)}
      >
        {city}
      </CategoryName>
      <CategoryName
        textAlign='center'
        onClick={e => props.history.push(`/stock/edit/${props.data.id}`)}
      >
        {postNumber}
      </CategoryName>
    </Container>
  );
};

export default withRouter(ListItem);
