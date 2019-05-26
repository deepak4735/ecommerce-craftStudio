import gql from 'graphql-tag';

export const CREATE_NEW_CATEGORY = gql`
  mutation CREATE_NEW_CATEGORY($name: String!, $description: String) {
    createCategory(name: $name, description: $description) {
      id
      name
      productsInCategory {
        id
      }
    }
  }
`;
