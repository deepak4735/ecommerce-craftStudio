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
  const { id, name, taxRate } = props.data;

  // TODO: Create calculator for tax rate, so you input in decimals
  return (
    <Container id={id}>
      <SelectBox>
        <Input
          id={id}
          onClick={e => props.delSelectedTaxes(e)}
          type='checkbox'
        />
      </SelectBox>
      <CategoryName
        onClick={e => props.history.push(`/taxes/edit/${props.data.id}`)}
      >
        {name}
      </CategoryName>
      <ProductsInCategory
        onClick={e => props.history.push(`/taxes/edit/${props.data.id}`)}
      >
        {taxRate}%
      </ProductsInCategory>
    </Container>
  );
};

export default withRouter(ListItem);
