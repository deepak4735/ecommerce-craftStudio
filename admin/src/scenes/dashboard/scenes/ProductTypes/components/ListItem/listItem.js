import React from 'react';
import { withRouter } from 'react-router';

// Import components
import { Input } from '../../../../../../components/FormElements/formElements';

// Import styles
import { Container, SelectBox, CategoryValue } from './styles';

const ListItem = props => {
  const {
    id,
    name,
    hasVariants,
    taxes,
    weight: { value, unit }
  } = props.data;
  console.log(props.data);
  return (
    <Container id={id}>
      <SelectBox>
        <Input
          id={id}
          onClick={e => props.delSelectedProductTypes(e)}
          type='checkbox'
        />
      </SelectBox>
      <CategoryValue
        onClick={e =>
          props.history.push(`/product-types/edit/${props.data.id}`)
        }
      >
        {name}
      </CategoryValue>
      <CategoryValue
        onClick={e =>
          props.history.push(`/product-types/edit/${props.data.id}`)
        }
      >
        {hasVariants === false ? 'No' : 'Yes'}
      </CategoryValue>
      <CategoryValue
        onClick={e =>
          props.history.push(`/product-types/edit/${props.data.id}`)
        }
      >
        {props.data.weight === null ? (
          'No data'
        ) : (
          <>
            <span>{value}</span> <span>{unit}</span>
          </>
        )}
      </CategoryValue>
      <CategoryValue
        onClick={e =>
          props.history.push(`/product-types/edit/${props.data.id}`)
        }
      >
        {taxes === null ? 'No data' : taxes.name}
      </CategoryValue>
    </Container>
  );
};

export default withRouter(ListItem);
