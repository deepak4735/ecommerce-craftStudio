import gql from 'graphql-tag';

export const QUERY_TAX = gql`
  query QUERY_TAX($id: ID) {
    tax(where: { id: $id }) {
      name
      taxRate
    }
  }
`;

export const UPDATE_TAX_MUTATION = gql`
  mutation UPDATE_TAX_MUTATION($id: ID, $name: String, $taxRate: Int) {
    updateTax(id: $id, name: $name, taxRate: $taxRate) {
      name
    }
  }
`;

export const DELETE_TAX_MUTATION = gql`
  mutation DELETE_TAX_MUTATION($id: ID) {
    deleteTax(id: $id) {
      name
      id
    }
  }
`;
