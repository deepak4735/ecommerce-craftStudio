import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import components
import List from '../../../../components/List/list';

// Import styles
import { ProductTypesContainer, CreateProductTypeBtn } from './styles';

class ProductTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ProductTypesContainer>
        <List
          headers={['Test', 'test2', 'test3']}
          width={'80%'}
          height={'70%'}
        />
        <CreateProductTypeBtn>
          <Link to='/product-types/create-product-type'>
            Create product type
          </Link>
        </CreateProductTypeBtn>
      </ProductTypesContainer>
    );
  }
}

export default ProductTypes;
