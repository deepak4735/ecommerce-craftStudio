import gql from 'graphql-tag';

export const QUERY_ALL_TAXES = gql`
  query QUERY_ALL_TAXES {
    taxes {
      id
      name
      taxRate
    }
  }
`;

export const DELETE_SELECTED_TAXES = gql`
  mutation DELETE_SELECTED_TAXES($id_in: [ID!]) {
    deleteManyTaxes(id_in: $id_in) {
      count
    }
  }
`;
