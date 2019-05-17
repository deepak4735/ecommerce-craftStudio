import gql from 'graphql-tag';

// Query
export const EDIT_PRODUCT_TYPE = gql`
  query EDIT_PRODUCT_TYPE($id: ID!) {
    productType(where: { id: $id }) {
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
      productAttributes {
        id
        attributeName
        attributeValues {
          id
          value
        }
      }
      variantAttributes {
        id
        attributeName
        attributeValues {
          id
          value
        }
      }
    }
  }
`;
