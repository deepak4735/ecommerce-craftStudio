import gql from 'graphql-tag';

export const QUERY_CATEGORY = gql`
  query QUERY_CATEGORY($id: ID) {
    category(where: { id: $id }) {
      name
      description
    }
  }
`;

export const UPDATE_CATEGORY_MUTATION = gql`
  mutation UPDATE_CATEGORY_MUTATION(
    $id: ID
    $name: String
    $description: String
  ) {
    updateCategory(id: $id, name: $name, description: $description) {
      id
    }
  }
`;

export const DELETE_BUTTON_MUTATION = gql`
  mutation DELETE_BUTTON_MUTATION($id: ID) {
    deleteCategory(id: $id) {
      name
      id
    }
  }
`;
