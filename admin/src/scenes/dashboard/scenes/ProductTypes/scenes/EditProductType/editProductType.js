import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { withRouter } from 'react-router';

// Import styles
import { ProductTypeContainer } from '../components/styles';

// Import graphql
import { EDIT_PRODUCT_TYPE } from './graphql';

const EditProductType = props => {
  let id = props.match.params.id;
  console.log(id);
  return (
    <ProductTypeContainer>
      <Query query={EDIT_PRODUCT_TYPE} variables={{ id }}>
        {({ data, loading, error }) => {
          console.log(data);
          console.log(error);
          if (loading) return <p>Loading...</p>;
          return <p>{data.productType.name}</p>;
        }}
      </Query>
    </ProductTypeContainer>
  );
};

export default withRouter(EditProductType);
