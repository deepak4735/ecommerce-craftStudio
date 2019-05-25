import React from 'react';
import { Query, Mutation } from 'react-apollo';

// Import styled
import { CategoriesContainer } from './styles';

// Import GraphQL
import { QUERY_ALL_CATEGORIES } from './graphql';

const Categories = () => {
  return (
    <CategoriesContainer>
      <p>Categories</p>
    </CategoriesContainer>
  );
};

export default Categories;
