import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// Import components
import List from '../../../../components/List/list';

// Import styles
import { ProductTypesContainer, CreateProductTypeBtn } from './styles';

// GraphQL
const ALL_PRODUCT_TYPES_QUERY = gql`
  query ALL_PRODUCT_TYPES_QUERY {
    productTypes {
      id
      name
      shippingRequired
      weight {
        id
        unit
        value
      }
      taxes {
        id
        name
        taxRate
      }
    }
  }
`;

class ProductTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ProductTypesContainer>
        <Query query={ALL_PRODUCT_TYPES_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading..</p>;
            return (
              <List
                listItemArray={data}
                headers={['Name', 'Has variants', 'Shipping required']}
                width={'80%'}
                height={'70%'}
              />
            );
          }}
        </Query>
        <Link to='/product-types/create-product-type'>
          <CreateProductTypeBtn>Create product type</CreateProductTypeBtn>
        </Link>
      </ProductTypesContainer>
    );
  }
}

export default ProductTypes;
