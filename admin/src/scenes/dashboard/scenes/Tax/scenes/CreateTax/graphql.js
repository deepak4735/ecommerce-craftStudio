import gql from 'graphql-tag';

export const CREATE_NEW_TAX = gql`
  mutation CREATE_NEW_TAX($name: String!, $taxRate: Int!) {
    createTax(name: $name, taxRate: $taxRate) {
      id
      name
      taxRate
    }
  }
`;
