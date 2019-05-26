import gql from 'graphql-tag';

export const QUERY_ALL_CATEGORIES = gql`
  query QUERY_ALL_CATEGORIES {
    categories {
      id
      name
      productsInCategory {
        id
      }
    }
  }
`;

export const DELETE_SELECTED_CATEGORIES = gql`
  mutation DELETE_SELECTED_CATEGORIES($id_in: [ID!]) {
    deleteManyCategories(id_in: $id_in) {
      count
    }
  }
`;
