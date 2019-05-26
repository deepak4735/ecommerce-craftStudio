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
  const { id, name, productsInCategory } = props.data;
  return (
    <Container id={id}>
      <SelectBox>
        <Input
          id={id}
          onClick={e => props.delSelectedCategories(e)}
          type='checkbox'
        />
      </SelectBox>
      <CategoryName
        onClick={e => props.history.push(`/categories/edit/${props.data.id}`)}
      >
        {name}
      </CategoryName>
      <ProductsInCategory
        onClick={e => props.history.push(`/categories/edit/${props.data.id}`)}
      >
        {productsInCategory.length}
      </ProductsInCategory>
    </Container>
  );
};

export default withRouter(ListItem);
