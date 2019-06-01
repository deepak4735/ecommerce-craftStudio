import gql from 'graphql-tag';

export const ALL_PRODUCT_TYPES_QUERY = gql`
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
      hasVariants
    }
  }
`;
